using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Models = ProjectManage.Models;
using ProjectManage.Data;
using Microsoft.AspNetCore.Mvc;
using ProjectManage.Models;
using Microsoft.AspNetCore.Authorization;

namespace ProjectManage.Controllers
{
    [Authorize]
    [Route("api/task")]
    public class TaskController : ControllerBase
    {
        public ApplicationDbContext context;
        public TaskController(ApplicationDbContext context)
        {
            this.context = context;
        }

        //================== get task by id

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var task = await context.Tasks
            .Where(t => t.Id.Equals(id))
            .Select(t => new
            {
                task     = t,
                users    = t.UserTasks.Select(ut => ut.User.UserName),
                comments = t.TaskComments
                            .Where(tc => tc.TaskId == id)
                            .Select(tc => new {
                                content = tc.content,
                                fullname = tc.User.FullName 
                            })
                            .ToList(),
                attaches = t.taskAttaches
                
            })
            .FirstOrDefaultAsync();

            if (task != null)
            {
                return Ok(task);
            }

            return BadRequest("Khôn tồn tại task");
        }


        //================== get all task

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var query = context.Tasks.AsQueryable();
            var data = await query.ToListAsync();
            return Ok(data);
        }


        //================== create task

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

            model.Status    = 0;
            model.CreatedAt = DateTime.Now;
            model.UpdatedAt = DateTime.Now;
            model.DeadLine  = DateTime.Now.AddDays(1);

            await context.Tasks.AddAsync(model);
            await context.SaveChangesAsync();
            return Ok(model);
        }


        //================ Add user 


        [HttpPost("{id}/user")]
        public async Task<IActionResult> AddUser(int id, [FromBody] Models.Task model)
        {

            // if (!ModelState.IsValid)
            // {
            //     var errors = ModelState.Select(x => x.Value.Errors)
            //                         .Where(y => y.Count > 0)
            //                         .ToList();
            //     return BadRequest(errors);
            // }

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

        //================== add comment

        [HttpPost("{id}/comment")]
        public async Task<IActionResult> AddComment(int id, [FromBody] Models.TaskComment model)
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
                model.CreatedAt = DateTime.Now;
                model.UpdatedAt = DateTime.Now;
                await context.AddAsync(model);
                await context.SaveChangesAsync();
                return Ok(model);
            }
            return BadRequest("Không tồn tại task");
        }


        //================== add task item

        [HttpPost("{id}/task-item")]
        public async Task<IActionResult> AddTaskItem(int id, [FromBody] Models.TaskItem model)
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
                model.Status = ProjectStatus.Pending;
                model.CreatedAt = DateTime.Now;
                model.UpdatedAt = DateTime.Now;
                await context.TaskItems.AddAsync(model);
                await context.SaveChangesAsync();
                return Ok(model);
            }

            return BadRequest("Không tồn tại task");


        }

        /*================== update task

         1. title
         2. desc
         3. deadline
         4. status
         5. updatedAt

        */

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
            if (found != null)
            {
                found.Title = model.Title;
                found.Desc = model.Desc;
                found.DeadLine = model.DeadLine;
                found.Status = 100;
                found.UpdatedAt = DateTime.Now;
                await context.SaveChangesAsync();
                return Ok(found);
            }
            return BadRequest("Không tồn tại task.");
        }


        //================== delete task

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

