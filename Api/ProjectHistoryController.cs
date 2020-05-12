using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectManage.Data;
using ProjectManage.Models;

namespace ProjectManage.Controllers
{
    [Route("api/project-history")]
    public class ProjectHistoryController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        public ProjectHistoryController(ApplicationDbContext context)
        {
            this.context = context;
        }


        //================== create history

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] ProjectHistory model)
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

            await context.ProjectHistories.AddAsync(model);
            await context.SaveChangesAsync();

            return Ok(model);
        }


        //================== Get 10 record history

        [HttpGet]

        public async Task<IActionResult> GetAll([FromQuery] int take = 10)
        {
            var query = context.ProjectHistories.AsQueryable();
            var data = await query
                        .OrderByDescending(t => t.Id)
                        .Take(take)
                        .Select(h => new {
                            content = h.Content,
                            time = h.CreatedAt,
                            fullname = h.User.FullName,
                            userId =  h.User.Id

                        })
                        .ToListAsync();
            return Ok(data);
        }

    }
}