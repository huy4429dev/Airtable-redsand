using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProjectManage.Models
{
    public class Task
    {
        [Key]
        public int Id { get; set; }

        [StringLength(255, ErrorMessage = "Tiêu đề không đúng định dạng")]
        [Required(ErrorMessage = "Vui lòng nhập tiêu đề")]
        public string Title { get; set; }
        public string Desc { get; set; }

        /*=============================
             listask - task: 1 - n
        */

        [ForeignKey("ListTaskId")]
        public int ListTaskId { get; set; }
        public virtual ListTask ListTask { get; set; }
        public int Status { get; set; }


        /*=============================
             user - task: n - n
        */

        public ICollection<UserTask> UserTasks { get; set; }

        /*=================================== 
            task - taskItem: 1 - n
        */

        public ICollection<TaskItem> TaskItems { get; set; }
        
        /*=================================== 
            task - comment: 1 - n
        */

        public ICollection<TaskComment> TaskComments { get; set; }

        /*=================================== 
            task - taskAttach: 1 - n
        */

        public ICollection<TaskAttach> taskAttaches { get; set; }

        public DateTime DeadLine { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}