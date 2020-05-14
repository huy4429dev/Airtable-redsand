using System;
using Microsoft.AspNetCore.Mvc;
using ProjectManage.Models;
using ProjectManage.Data;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
namespace ProjectManage.Controllers
{
    [Route("api/project-recently")]
    public class ProjectRecentlyController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        public ProjectRecentlyController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] int? userId)
        {
            var query = context.ProjectRecentlies.Where(pr => pr.UserId == userId)
                                                 .Select(pr => new
                                                 {
                                                     id = pr.Id,
                                                     projectId = pr.ProjectId,
                                                     name = pr.Project.Name,
                                                     thumb = pr.Project.Thumb
                                                 })
                                                 .OrderByDescending(pr => pr.id)
                                                 .Take(3);
            var data = await query.ToListAsync();
            return Ok(data);

        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] ProjectRecently model)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                    .Where(y => y.Count > 0)
                                    .ToList();
                return BadRequest(errors);
            }

            await context.ProjectRecentlies.AddAsync(model);
            await context.SaveChangesAsync();

            return Ok(model);

        }
    }
}