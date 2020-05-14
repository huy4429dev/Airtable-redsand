using ProjectManage.Models.BusinessModels;
using ProjectManage.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.IO;
using System.Threading.Tasks;

namespace ProjectManage.Controllers
{
    [Route("auth/google")]
    public class AuthGoogleController : ControllerBase
    {

        [HttpGet]
        public IActionResult auth(){
            return Ok("done");
        }
    }
    
}