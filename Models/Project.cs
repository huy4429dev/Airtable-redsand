using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace ProjectManage.Models
{
    public class Project
    {
        [Key]
        public int Id { get; set; }

        [StringLength(255, ErrorMessage = "Lỗi định dạng")]
        [Required(ErrorMessage = "Vui lòng nhập tên dự án")]
        public int Name { get; set; }

        [Required(ErrorMessage = "Vui lòng chọn hình ảnh")]
        public string Thumb { get; set; }
        public string Note { get; set; }

        /*=================================== 
            user - project: 1 - n

        */

        [ForeignKey("ManagerId")]
        public int ManagerId { get; set; }
        public virtual ApplicationUser Manager { get; set; }
        public ProjectStatus Status { get; set; }


        /*=================================== 
            project - listtask: 1 - n

        */

        public ICollection<ListTask> ListTasks { get; set; }


        /*=================================== 
            user - project: n - n

        */

        public ICollection<UserProject> UserProjects { get; set; }


        /*=================================== 
            project - projectHistory: 1 - n

        */

        public ICollection<ProjectHistory> ProjectHistories { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}