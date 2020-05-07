using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectManage.Data;
using ProjectManage.Models;
using System.Linq;
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


        [HttpGet("{id}")]
        public async Task<IActionResult> GetAction(int id)
        {

            var found = await _context.Users.FindAsync(id);
            if (found != null)
            {
                return Ok(found);
            }
            return NotFound("Không tồn tại user");
        }


        [HttpGet]
        public async Task<IActionResult> GetAll(string search = null)
        {
            var query = _context.Users.AsQueryable();

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
                Password = "hihihi",
            };

            var result = await userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                return Ok(model);
            }
            return BadRequest(result.Errors);

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

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            var found = await _context.Users.FindAsync(id);
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