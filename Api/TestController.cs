using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc; 
namespace ProjectManage 
{
    [Authorize]
    [Route("api/test")]
    public class Test : ControllerBase
    {
        [HttpGet]
        public string getAll(){
            return "hi hi hi";
        }
    }
}