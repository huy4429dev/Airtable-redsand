using Microsoft.AspNetCore.Mvc;
using System;
using ProjectManage.Data;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using ProjectManage.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace ProjectManage.Controllers
{
    [Route("api/user")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class UserController : ControllerBase
    {

        private readonly ApplicationDbContext ctx;
        UserManager<ApplicationUser> userManager;
        RoleManager<Role> roleManager;

        public UserController(ApplicationDbContext ctx,
                   UserManager<ApplicationUser> userManager, RoleManager<Role> roleManager)
        {
            this.ctx = ctx;
            this.userManager = userManager;
            this.roleManager = roleManager;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAction(int id)
        {

            var found = await ctx.Users.FindAsync(id);
            if (found != null)
            {
                return Ok(found);
            }
            return NotFound("Không tồn tại user");
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(string search = null)
        {
            var query = ctx.Users.AsQueryable();

            /*==============================
              Search Task by FullName
              ==============================*/

            if (!string.IsNullOrWhiteSpace(search))
            {
                query = query.Where(item => item.FullName.ToLower().Contains(search.ToLower()));
            }


            var data = await query.ToListAsync();

            return Ok(data);

        }

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
                Password = "hihihi",
            };

            var result = await userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                //await ctx.Users.AddAsync(model);
                //await ctx.SaveChangesAsync();
                return Ok(model);
            }
            return BadRequest("Thêm tài khoản thất bại");

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(int id, [FromBody] ApplicationUser model)
        {

            if (!ModelState.IsValid)
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                   .Where(y => y.Count > 0)
                                   .ToList();
                return BadRequest(errors);
            }

            var found = await userManager.FindByIdAsync(id.ToString());
            if (found != null)
            {
                
                // found.Email = model.Email;
                found.Avatar = model.Avatar;
                found.FullName = model.FullName;
                //found.SecurityStamp = Guid.NewGuid().ToString();
                var result = await userManager.UpdateAsync(found);
                var token = await userManager.GeneratePasswordResetTokenAsync(found);
                await userManager.ResetPasswordAsync(found, token, model.Password);

                if(result.Succeeded){
                    return Ok(model);
                }
                return BadRequest("Cập nhật thông tin thất bại !");

            }

            return NotFound("Không tồn tại user");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            var found = await ctx.Users.FindAsync(id);
            if (found != null)
            {
                ctx.Users.Remove(found);
                await ctx.SaveChangesAsync();
                return Ok(new { success = "Xóa user thành công" });
            }

            return NotFound();
        }
    }
}