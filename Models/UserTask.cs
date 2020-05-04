using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectManage.Models
{
    public class UserTask
    {
        [Key]
        public int Id { get; set; }

        // [Key, Column(Order = 1)]
        public int UserId { get; set; }
        public virtual ApplicationUser User { get; set; }

        // [Key, Column(Order = 2)]
        public int TaskId { get; set; }
        public virtual Task Task { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}