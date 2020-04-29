using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectManage.Models
{
    public class TaskAttach
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Vui lòng chọn file")]
        public string Url { get; set; }

        /*=================================== 
              task - taskAttach: 1 - n

        */

        [ForeignKey("TaskId")]        
        public int TaskId { get; set; }
        public virtual Task Task{get;set;}
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}