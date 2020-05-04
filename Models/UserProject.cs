using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectManage.Models
{
    public class UserProject
    {
        [Key]
        public int Id { get; set; }

        // [Key, Column(Order = 1)]
        public int UserId { get; set; }
        public virtual ApplicationUser User { get; set; }

        // [Key, Column(Order = 2)]
        public int ProjectId { get; set; }
        public virtual Project Project { get; set; }

    }
}