using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProjectManage.Models
{
    public class ListTask
    {
        public int Id { get; set; }

        [StringLength(255)]
        [Required(ErrorMessage = "Vui lòng nhập tiêu đề")]
        public string Title { get; set; }
        [StringLength(255)]
        public string Desc { get; set; }
        /*============================
          user - listTask: 1 - n
        */
        [ForeignKey("UserId")]
        public int UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
        /*============================
            project - listtask: 1 - n
         */
        [ForeignKey("ProjectId")]
        public int ProjectId { get; set; }
        public virtual Project Project { get; set; }

        /*============================
            listask - task: 1 - n
         */
        public ICollection<Task> Tasks { get; set; }


        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

    }
}