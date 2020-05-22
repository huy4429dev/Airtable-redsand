using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectManage.Data;
using ProjectManage.Models;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
namespace ProjectManage.Controllers
{
    [Route("api/user")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        UserManager<ApplicationUser> userManager;
        RoleManager<Role> roleManager;
        public UserController(ApplicationDbContext _context,
                  UserManager<ApplicationUser> userManager, RoleManager<Role> roleManager)
        {
            this._context = _context;
            this.userManager = userManager;
            this.roleManager = roleManager;
        }
        
        [Authorize]
        [HttpGet]
        public IActionResult GetAction()
        {
            var found =  new {
                Name =  User.Identity.Name,
                Email = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value,
                userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value,
            };
            int f =Int32.Parse(found.userId);
            var data = _context.Users.Find(f);
            return Ok(data);
        }
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] ApplicationUser model)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                       .Where(y => y.Count > 0)
                                       .ToList();
                return BadRequest(errors);
            }
            var user = new ApplicationUser
            {
                FullName = model.FullName,
                Email = model.Email,
                Avatar = model.Avatar,
                UserName = model.UserName,
                Password = model.Password,
            };

            var result = await userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                return Ok(model);
            }
            return BadRequest(result.Errors);
        }
        [Authorize]
        [HttpPut]
        public async Task<IActionResult> Edit([FromBody] ApplicationUser model)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                   .Where(y => y.Count > 0)
                                   .ToList();
                return BadRequest(errors);
            }

            var userID =Int32.Parse(User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value);

            var found = await userManager.FindByIdAsync(userID.ToString());
            if (found != null)
            {
                found.Avatar = model.Avatar;
                found.FullName = model.FullName;
                var result = await userManager.UpdateAsync(found);
                var token = await userManager.GeneratePasswordResetTokenAsync(found);
                await userManager.ResetPasswordAsync(found, token, model.Password);

                if (result.Succeeded)
                {
                    return Ok(model);
                }
                return BadRequest("Cập nhật thông tin thất bại !");
            }
            return NotFound("Không tồn tại user");
        }
        [Authorize]
        [HttpDelete]
        public async Task<IActionResult> Delete()
        {
            var userID =Int32.Parse(User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value);
         
            var found = await _context.Users.FindAsync(userID);
            if (found != null)
            {
                _context.Users.Remove(found);
                await _context.SaveChangesAsync();
                return Ok(new { success = "Xóa user thành công" });
            }
            return NotFound();
        }
    }
}