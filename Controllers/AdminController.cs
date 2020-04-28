using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectManage.Data;
using ProjectManage.Models;

namespace ProjectManage.Controlers
{
    public class AdminController : ControllerBase
    {
        ApplicationDbContext ctx;
        UserManager<ApplicationUser> userManager;
        RoleManager<Role> roleManager;

        public AdminController(ApplicationDbContext ctx,
            UserManager<ApplicationUser> userManager, RoleManager<Role> roleManager)
        {
            this.ctx = ctx;
            this.userManager = userManager;
            this.roleManager = roleManager;
        }

        public async Task<IActionResult> Init()
        {
            if (!await ctx.Users.AnyAsync())
            {
                var roleResult = await roleManager.CreateAsync(new Role
                {
                    Name = "Administrators"
                });


                var user = new ApplicationUser
                {
                    UserName = "admin",
                    Email = "club@gmail.com",
                    FullName = "Administrator",
                };

                var result = await userManager.CreateAsync(user, "admin@123");

                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(user, "Administrators");

                    return Content("Success");
                }
                return Content("Failure");
            }
            return Content("Exists");
        }

        public string  sayHi(){
            return "hj";
        }
    }
}