using System;
using Microsoft.AspNetCore.Mvc; 
namespace ProjectManage 
{
    [Route("api/test")]
    public class Test : ControllerBase
    {
        [HttpGet]
        public string getAll(){
            return "hi";
        }
    }
}