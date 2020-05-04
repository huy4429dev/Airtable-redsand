using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ProjectManage.Data;
using ProjectManage.Models;
namespace ProjectManage.Controllers
{
    [Route("api/list-task")]
    public class ListTaskController : ControllerBase
    {

        private readonly ApplicationDbContext context;
        public ListTaskController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet("{id}")]

        public async Task<IActionResult> Get(int id)
        {
            var found = await context.ListTasks.FindAsync(id);
            if (found != null)
                return Ok(found);
            return BadRequest("Không tồn tại list task");
        }


        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] string search = null, int? projectId = null)
        {
            var query = context.ListTasks.AsQueryable();

            /*===================== 
             1. get by keyword
             2. get by projectId
            ======================*/

            if (!string.IsNullOrEmpty(search))
            {
                query = query.Where(l => l.Title.Contains(search));
            }

            if (projectId.HasValue)
            {
                var queryProject = context.ListTasks.Where(l => l.ProjectId.Equals(projectId))
                                                    .Select(l => new
                                                    {
                                                        l.Id,
                                                        l.Title,
                                                        l.Desc,
                                                        l.UserId,
                                                        User = new
                                                        {
                                                            name = l.User.FullName,
                                                            avatar = l.User.Avatar,
                                                        },
                                                        Tasks = l.Tasks.Select(lt => lt)
                                                    });
                var queryProjectData = await queryProject.ToListAsync();
                return Ok(queryProjectData);
            }

            var data = await query.ToListAsync();
            return Ok(data);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] ListTask model)
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

            await context.ListTasks.AddAsync(model);
            await context.SaveChangesAsync();
            return Ok(model);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update([FromBody] ListTask model, int id)
        {   
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                    .Where(y => y.Count > 0)
                                    .ToList();
                return BadRequest(errors);
            }

            var found = await context.ListTasks.FindAsync(id);
            if (found != null)
            {
                found.Title = model.Title;
                found.Desc = model.Desc;
                found.UpdatedAt = DateTime.Now;
                await context.SaveChangesAsync();
                return Ok(found);
            }

            return BadRequest("Không tồn tại list task");

        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> Delete(int id)
        {
            var found = await context.ListTasks.FindAsync(id);
            if (found != null)
            {
                context.ListTasks.Remove(found);
                await context.SaveChangesAsync();
                return Ok("Xóa thành công");
            }
            return BadRequest("Không tồn tại list task");
        }
    }


}