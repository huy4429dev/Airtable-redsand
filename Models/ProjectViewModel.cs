using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectManage.Models
{
    public class ProjectViewModel{
        public int Id{get;set;}
        public string Name { get; set; }
        public string Thumb { get; set; }
        public string Note { get; set; }
        [ForeignKey("ManagerId")]
        public int ManagerId { get; set; }
        public string FullName { get; set; }
        public ProjectStatus Status { get; set; }
        public string Content {get;set;} 
        public DateTime CreatedAt{get;set;}
    }

}