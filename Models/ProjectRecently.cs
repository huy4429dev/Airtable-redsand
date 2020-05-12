using System.ComponentModel.DataAnnotations;

namespace ProjectManage.Models
{
    public class ProjectRecently
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public virtual ApplicationUser User {get;set;}
        public int ProjectId { get; set; }
        public virtual Project Project { get; set; }
    }
}