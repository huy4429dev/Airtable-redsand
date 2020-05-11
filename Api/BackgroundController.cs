using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using ProjectManage.Models;
using ProjectManage.Data;
using System.Threading.Tasks;
using System.IO;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Http;

namespace ProjectManage.Controllers
{
    [Route("api/background")]
    public class BackgroundController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        public BackgroundController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var query = context.Backgrounds.AsQueryable();
            var data = await query.ToListAsync();
            return Ok(data);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Background model)
        {
            try
            {

                var file = Request.Form.Files[0];
                var folderName = Path.Combine("Resources", "images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if (file.Length > 0)
                {
                    var now = DateTime.Now.Ticks.ToString();
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var typeFile = fileName.Substring(fileName.LastIndexOf("."));
                    fileName = fileName.Substring(0, fileName.Length - typeFile.Length) + now + typeFile;
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    model.url = dbPath;
                    model.size = file.Length;
                    model.CreatedAt = new DateTime();

                    await context.Backgrounds.AddAsync(model);
                    await context.SaveChangesAsync();
                    return Ok(model);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server errors {e}");
            }
        }
    }
}