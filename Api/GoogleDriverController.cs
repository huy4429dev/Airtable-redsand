using ProjectManage.Models.BusinessModels;
using ProjectManage.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.IO;
using System.Threading.Tasks;

namespace ProjectManage.Controllers
{
    [Route("api/google-driver")]
    public class GoogleDriverController : ControllerBase
    {

        [HttpGet]
        public IActionResult sayHi(){
            return Ok("done");
        }

        [HttpPost]
        public IActionResult Upload(IFormFile file)
        {
            string filePath = Path.Combine(Path.GetTempPath(), file.FileName);

            if (file.Length > 0)
            {
                using (FileStream stream = new FileStream(filePath, FileMode.Create))
                {
                    file.CopyToAsync(stream).Wait();
                }
            }
            GoogleDriveFilesRepositoryService.UploadFile(filePath);
            return Ok("Index");
        }

        [HttpGet("Download/{id}")]
        public async Task<IActionResult> DownloadAsync([FromRoute(Name = "id")] string fileId)
        {
            string filePath = await GoogleDriveFilesRepositoryService.DownloadFileAsync(fileId);
            string fileName = Path.GetFileName(filePath);

            byte[] buffer = System.IO.File.ReadAllBytes(filePath);
            System.IO.File.Delete(filePath);
            return File(buffer, "application/force-download", fileName);
        }

        [HttpGet("Delete/{id}")]
        public IActionResult Delete([FromRoute(Name = "id")] string fileId)
        {
            GoogleDriveFilesRepositoryService.DeleteFile(fileId);
            return RedirectToAction("Index");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return BadRequest(new
            {
                RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier
            });
        }
    }
}