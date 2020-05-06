using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectManage.Models
{
    public class ProjectHistory
    {
        [Key]
        public int Id { get; set; }
        [StringLength(255, ErrorMessage = "Không đúng định dạng")]
        [Required(ErrorMessage = "Hoạt động không được để trống")]
        public string Content { get; set; }

        /*=============================
             user - projectHistory: 1 - n
        */

        [ForeignKey("UserId")]
        public int UserId { get; set; }
        public virtual ApplicationUser User { get; set; }



        /*=============================
             project - projectHistory: 1 - n
        */

        [ForeignKey("ProjectId")]
        public int ProjectId { get; set; }
        public virtual Project Project { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }

}