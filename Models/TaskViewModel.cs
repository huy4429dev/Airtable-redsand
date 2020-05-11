using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectManage.Models
{
    public class TaskViewModel{
        public int Id{get;set;}
        public string Title { get; set; }
        public string ListTaskId { get; set; }
        public string Desc { get; set; }
        public int Status { get; set; }
        public string Content {get;set;} 
        public DateTime CreatedAt{get;set;}
    }

}