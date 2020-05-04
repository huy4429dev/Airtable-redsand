using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Models = ProjectManage.Models;
using ProjectManage.Data;
using Microsoft.AspNetCore.Mvc;
namespace ProjectManage.Controllers
{
    [Route("api/task")]
    public class TaskController : ControllerBase
    {
        public ApplicationDbContext context;
        public TaskController(ApplicationDbContext context)
        {
            this.context = context;
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var task = await context.Tasks.Select(t => new
            {
                task = t,
                user = t.UserTasks.Select(ut => ut.User.FullName)
            }).FirstAsync();

            return Ok(task);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Models.Task model)
        {

            if (!ModelState.IsValid)
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                    .Where(y => y.Count > 0)
                                    .ToList();
                return BadRequest(errors);
            }

            model.Status = 0;
            model.CreatedAt = DateTime.Now;
            model.UpdatedAt = DateTime.Now;
            model.DeadLine = DateTime.Now.AddDays(1);

            await context.Tasks.AddAsync(model);
            await context.SaveChangesAsync();

            return Ok(model);
        }


        [HttpPost("{id}/user")]
        public async Task<IActionResult> AddUser(int id, [FromBody] Models.Task model)
        {

            if (!ModelState.IsValid)
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                    .Where(y => y.Count > 0)
                                    .ToList();
                return BadRequest(errors);
            }

            var found = await context.Tasks.FindAsync(id);
            if (found != null)
            {
                /*==============================
                     Update table UserTasks
                     1. Delete
                     2. Insert
                     ==============================*/

                /* =========== 1 ==========*/

                var query = context.UserTasks.AsQueryable();
                query = query.Where(item => item.TaskId == id);
                var data = await query.ToListAsync();
                foreach (var item in data)
                {

                    context.UserTasks.Remove(item);
                    await context.SaveChangesAsync();

                }

                /* =========== 2 ==========*/

                if (model.UserTasks.Count > 0)
                {
                    await context.UserTasks.AddRangeAsync(model.UserTasks);
                    await context.SaveChangesAsync();
                }

                return Ok(model.UserTasks);

            }
            return BadRequest("Không tồn tại task");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> update(int id, [FromBody] Models.Task model)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                    .Where(y => y.Count > 0)
                                    .ToList();
                return BadRequest(errors);
            }

            var found = await context.Tasks.FindAsync(id);
            if(found != null){
                found.Title = model.Title;
                found.Desc = model.Desc;
                found.DeadLine = model.DeadLine;
                found.UpdatedAt = DateTime.Now;
            }
            return BadRequest("Không tồn tại task.");
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            var found = await context.Tasks.FindAsync(id);
            if (found != null)
            {
                context.Tasks.Remove(found);
                return Ok("Xóa task thành công. ");
            }

            return BadRequest("Không tồn tại Task");
        }

    }
}

