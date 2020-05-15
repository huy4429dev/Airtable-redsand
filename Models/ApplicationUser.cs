using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using ProjectManage.Data;

namespace ProjectManage.Models
{
    public class ApplicationUser : IdentityUser<int>
    {
        [MaxLength(50)]
        public string FullName { get; set; }
        public string Password { get; set; }
        public string Avatar { get; set; }

        /*==================================
            user - project: 1 - n  - manager
        */

        public ICollection<Project> Projects { get; set; }

        /*==================================
            user - project: n - n  
        */

        public ICollection<UserProject> UserProjects { get; set; }


        /*==================================
            user - task: n - n  
        */

        public ICollection<UserTask> UserTasks { get; set; }

        /*=================================== 
            user - task: 1 - n

        */

        public ICollection<Task> Tasks {get;set;}

        
        /*=================================== 
            user - comment: 1 - n
        */

        public ICollection<TaskComment> TaskComments {get;set;}

        /*=================================== 
            user - projectHistory: 1 - n
        */


        public ICollection<ProjectHistory> ProjectHistories { get; set; }


        
        /*==================================
            user - projectRecently: n - n  
        */

        public ICollection<ProjectRecently> ProjectRecentlies { get; set; }

    }

    public class Role : IdentityRole<int>
    {
        public virtual ICollection<UserRole> Users { get; set; }

        public virtual ICollection<IdentityRoleClaim<int>> Claims { get; set; }
    }

    public class UserRole : IdentityUserRole<int>
    {
        [ForeignKey("RoleId")]
        public virtual Role Role { get; set; }

        [ForeignKey("UserId")]
        public virtual ApplicationUser User { get; set; }
    }

    /* user and role stores */
    public class ApplicationUserStore : UserStore<ApplicationUser, Role, ApplicationDbContext, int, IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>, IdentityUserToken<int>, IdentityRoleClaim<int>>
    {
        public ApplicationUserStore(ApplicationDbContext db, IdentityErrorDescriber describer = null) : base(db, describer) { }
    }

    public class ApplicationRoleStore : RoleStore<Role, ApplicationDbContext, int, UserRole, IdentityRoleClaim<int>>
    {
        public ApplicationRoleStore(ApplicationDbContext db, IdentityErrorDescriber describer = null) : base(db, describer)
        {

        }
    }
}