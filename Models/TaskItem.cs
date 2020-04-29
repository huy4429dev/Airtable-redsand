using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectManage.Models
{
    public class TaskItem
    {
        [Key]
        public int Id { get; set; }

        [StringLength(255, ErrorMessage = "Tiêu đề không đúng định dạng")]
        [Required(ErrorMessage = "Vui lòng nhập tiêu đề")]
        public string Title { get; set; }
        public ProjectStatus Status { get; set; }

        /*=============================
             task - taskItem: 1 - n
        */

        [ForeignKey("TaskId")]
        public int TaskId { get; set; }
        public virtual Task Task { get; set; }


        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}