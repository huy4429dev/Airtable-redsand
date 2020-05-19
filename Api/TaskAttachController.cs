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
    [Route("api/attachment")]
    public class TaskAttachController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public TaskAttachController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskAttach>>> getAll()
        {
            var query = await context.TaskAttaches.ToListAsync();
            return query;
        }

        [HttpPost]
        public async Task<IActionResult> CreateAttach([FromBody] TaskAttach model)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                    .Where(y => y.Count > 0)
                                    .ToList();
                return BadRequest(errors);
            }
            model.CreatedAt = DateTime.Now;
            model.UpdatedAt = DateTime.Now;
           await context.TaskAttaches.AddAsync(model);
           await context.SaveChangesAsync();
           return Ok(model);
        }
        

            

            [HttpDelete("{id}")]
            public async Task<IActionResult> Delete(int id)
        {

            var found = await context.TaskAttaches.FindAsync(id);
            if (found != null)
            {
                context.TaskAttaches.Remove(found);
                await context.SaveChangesAsync();
                return Ok("file đính kèm đã được xóa thành công");
            }

else
           {return BadRequest("Không tồn tại file đính kèm");};
        }

    }


}