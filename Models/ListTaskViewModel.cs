using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectManage.Models
{
    public class ListTaskViewModel{
        public int Id{get;set;}
        public string  Title { get; set; }
        public string Desc { get; set; }
        public string UserId { get; set; }
        public string FullName { get; set; }
        public int ProjectId{get;set;}
        public string Content {get;set;} 
        public DateTime CreatedAt{get;set;}
    }

}