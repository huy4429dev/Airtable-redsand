 using System;
using System.ComponentModel.DataAnnotations;

namespace  ProjectManage.Models
 {
     public class Background
     {
         [Key]
         public int Id{get;set;}
         [Required]
         public string url{get;set;}
         public float size{get;set;}
         public DateTime CreatedAt{get;set;}
     }
 }