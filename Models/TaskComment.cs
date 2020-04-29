using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectManage.Models
{
    public class TaskComment
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập nội dung")]
        public string content { get; set; }

        /*=============================
             user - comment: 1 - n
        */

        [ForeignKey("UserId")]
        public int UserId { get; set; }
        public virtual ApplicationUser User { get; set; }


        /*=============================
             task - comment: 1 - n
        */
        [ForeignKey("TaskId")]
        public int TaskId { get; set; }
        public virtual Task Task{get;set;}
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

    }
}