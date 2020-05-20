using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectManage.Data;
using ProjectManage.Models;
namespace Airtable_redsand.Api
{
    [Route("api/comment")]
    public class TaskCommentController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public TaskCommentController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskComment>>> getAll()
        {
            var query = await context.TaskComments.ToListAsync();
            return query;
        }

       
            [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteComment(int id)
        {

            var found = await context.TaskComments.FindAsync(id);
            if (found != null)
            {
                context.TaskComments.Remove(found);
                await context.SaveChangesAsync();
                return Ok("comment đã được xóa");
            }

else
           {return BadRequest("Không tồn tại commnent");};
        }

    }


}