using System;
using Microsoft.AspNetCore.Mvc;
using ProjectManage.Data;
using System.Threading.Tasks;
using ProjectManage.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Microsoft.AspNetCore.Identity;

namespace ProjectManage.Controllers
{
    public class AccountController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public AccountController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpGet]
        public async Task<IActionResult> GetCurrentUserId()
        {
            ApplicationUser usr = await GetCurrentUserAsync();
            return Ok( new { UseId = usr?.Id });
        }

        private Task<ApplicationUser> GetCurrentUserAsync() => _userManager.GetUserAsync(HttpContext.User);
    }

}
