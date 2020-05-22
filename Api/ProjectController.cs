using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectManage.Data;
using ProjectManage.Models;

namespace ProjectManage.Controllers
{
    [Authorize]
    [Route("api/project")]
    public class ProjectController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public ProjectController(ApplicationDbContext context)
        {
            _context = context;
        }
        // getprojct by name: /api/Project/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Project>> Get(int id)
        {
            // var project = await _context.Projects.FindAsync(id);
            var userID =Int32.Parse(User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value);
            var newQuery = _context.Projects.Where(p => p.UserProjects.Any(pu => pu.UserId == userID && pu.ProjectId == id))
                .Select(p => new
                {
                    id = p.Id,
                    name = p.Name,
                    created = p.CreatedAt,
                    updated = p.UpdatedAt,
                    manager = p.ManagerId,
                    status = p.Status,
                    thumb = p.Thumb,
                    users = p.UserProjects.Select(du => new
                    {
                        userId = du.User.Id,
                        fullName = du.User.FullName,
                        email = du.User.Email,
                        avatar = du.User.Avatar,
                    }),
                });
                var dataNeW = await newQuery.ToListAsync();
                return Ok(dataNeW);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var userID =Int32.Parse(User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value);
            var newQuery = _context.Projects.Where(p => p.UserProjects.Any(pu => pu.UserId == userID))
                .Select(p => new
                {
                    id = p.Id,
                    name = p.Name,
                    created = p.CreatedAt,
                    updated = p.UpdatedAt,
                    manager = p.ManagerId,
                    status = p.Status,
                    thumb = p.Thumb,
                    users = p.UserProjects.Select(du => new
                    {
                        userId = du.User.Id,
                        fullName = du.User.FullName,
                        email = du.User.Email,
                        avatar = du.User.Avatar,
                    }),
                });
                var dataNeW = await newQuery.ToListAsync();
                return Ok(dataNeW);
        }
        // post-create new Project: api/Project
        [HttpPost]
        public async Task<ActionResult<Project>> Create([FromBody] Project model, ProjectViewModel viewModel)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                    .Where(y => y.Count > 0)
                                    .ToList();
                return BadRequest(errors);
            }
            /*==============================
            Insert table Projects
            ==============================*/
            model.CreatedAt = DateTime.Now;
            model.UpdatedAt = DateTime.Now;
            model.Status = ProjectStatus.Pending;
            await _context.Projects.AddAsync(model);
            await _context.SaveChangesAsync();

            /*==============================
            Insert table ProjectsHistories
            ==============================*/

            var history = new ProjectHistory()
            {
                ProjectId = model.Id,
                UserId = model.ManagerId,
                Content = "Tạo dự án",
                CreatedAt = DateTime.Now,
                UpdatedAt = DateTime.Now
            };

            await _context.ProjectHistories.AddAsync(history);
            await _context.SaveChangesAsync();

            var FullName = await _context.Users.Where(u => u.Id == model.ManagerId).Select(u => u.FullName).FirstAsync();

            /*==============================
            Get projects and projectHistory
            ==============================*/

            viewModel.Id = model.Id;
            viewModel.Name = model.Name;
            viewModel.Status = model.Status;
            viewModel.Thumb = model.Thumb;
            viewModel.Note = model.Note;
            viewModel.ManagerId = model.ManagerId;
            viewModel.FullName = FullName;
            viewModel.Content = history.Content;
            viewModel.CreatedAt = viewModel.CreatedAt;
            return Ok(viewModel);
        }

        // put-edit newproject: api/Project/1

        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(int id, [FromBody] Project model, ProjectViewModel viewModel)
        {
            var userID =Int32.Parse(User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value);
             // return Ok(found);
            
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                .Where(y => y.Count > 0)
                                .ToList();
                return BadRequest(errors);
            }
            // var found = await _context.Projects.FindAsync(id);
            var found = await _context.Projects.FirstAsync(p => p.UserProjects.Any(pu => pu.UserId == userID && pu.ProjectId == id));
          
            if (found != null)
            {
                /*==============================
                    Update table Projects
                    ==============================*/

                found.Name = model.Name;
                found.Thumb = model.Thumb;
                found.Status = model.Status;
                found.UpdatedAt = DateTime.Now;
                await _context.SaveChangesAsync();

                /*==============================
                    Update table UserProject
                    1. Delete
                    2. Insert
                    ==============================*/
                /* =========== 1 ==========*/

                var query = _context.UserProjects.AsQueryable();
                query = query.Where(item => item.ProjectId == id);
                var data = await query.ToListAsync();
                
                foreach (var item in data)
                {

                    _context.UserProjects.Remove(item);
                    await _context.SaveChangesAsync();

                }
                /* =========== 2 ==========*/
                if (model.UserProjects.Count > 0)
                {
                    await _context.UserProjects.AddRangeAsync(model.UserProjects);
                    await _context.SaveChangesAsync();
                }
                /*==============================
                Insert table ProjectsHistories
                ==============================*/

                var history = new ProjectHistory()
                {
                    ProjectId = id,
                    UserId = model.ManagerId,
                    Content = "Cập nhật dự án",
                    CreatedAt = DateTime.Now,
                    UpdatedAt = DateTime.Now
                };

                await _context.ProjectHistories.AddAsync(history);
                await _context.SaveChangesAsync();

                var FullName = await _context.Users.Where(u => u.Id == model.ManagerId).Select(u => u.FullName).FirstAsync();

                /*==============================
                Get projects and projectHistory
                ==============================*/

                viewModel.Id = id;
                viewModel.Name = model.Name;
                viewModel.Status = model.Status;
                viewModel.Thumb = model.Thumb;
                viewModel.Note = model.Note;
                viewModel.ManagerId = found.ManagerId;
                viewModel.FullName = FullName;
                viewModel.Content = history.Content;
                viewModel.CreatedAt = history.CreatedAt;
                return Ok(viewModel);
            }
            return NotFound("Không tồn tại dự án");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var userID =Int32.Parse(User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value);
         
            var found = await _context.Projects.FindAsync(id);
            if (found != null && userID == found.ManagerId)
            {
                _context.Projects.Remove(found);
                await _context.SaveChangesAsync();
                return Ok(new { success = "Xóa dự án thành công" });
            }
            return NotFound("bạn ko phải quản lý của dự án");
        }

    }



}