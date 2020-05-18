using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ProjectManage.Models;

namespace ProjectManage.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, Role, int, IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Project> Projects { get; set; }
        public DbSet<UserProject> UserProjects { get; set; }
        public DbSet<ListTask> ListTasks { get; set; }
        public DbSet<Task> Tasks { get; set; }
        public DbSet<UserTask> UserTasks { get; set; }
        public DbSet<TaskItem> TaskItems { get; set; }
        public DbSet<TaskComment> TaskComments { get; set; }
        public DbSet<TaskAttach> TaskAttaches { get; set; }
        public DbSet<ProjectHistory> ProjectHistories { get; set; }
        public DbSet<Background> Backgrounds { get; set; }
        public DbSet<ProjectRecently> ProjectRecentlies { get; set; }

        override protected void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            //========================================================================

            // Tên bảng cho các bảng identity

            builder.Entity<ApplicationUser>().ToTable("Users");
            builder.Entity<Role>().ToTable("Roles");
            builder.Entity<IdentityUserToken<int>>().ToTable("UserTokens");
            builder.Entity<IdentityRoleClaim<int>>().ToTable("RoleClaims");
            builder.Entity<UserRole>().ToTable("UserRoles");
            builder.Entity<IdentityUserClaim<int>>().ToTable("UserClaims");
            builder.Entity<IdentityUserLogin<int>>().ToTable("UserLogins");

            /*========================================================================
            /* Relation 

            1. n - n: User - Project
            2. n - n: User - Task
            3. n - n: User - ProjectRecently

            */

            //===================== 1 ========================

            builder.Entity<UserProject>()
                .HasKey(bc => new { bc.UserId, bc.ProjectId });

            builder.Entity<UserProject>()
                .HasOne(bc => bc.User)
                .WithMany(b => b.UserProjects)
                .HasForeignKey(bc => bc.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<UserProject>()
                .HasOne(bc => bc.Project)
                .WithMany(c => c.UserProjects)
                .HasForeignKey(bc => bc.ProjectId)
                .OnDelete(DeleteBehavior.Cascade);


            //===================== 2 ========================


            builder.Entity<UserTask>()
                .HasKey(bc => new { bc.UserId, bc.TaskId });

            builder.Entity<UserTask>()
                .HasOne(bc => bc.User)
                .WithMany(b => b.UserTasks)
                .HasForeignKey(bc => bc.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<UserTask>()
                .HasOne(bc => bc.Task)
                .WithMany(c => c.UserTasks)
                .HasForeignKey(bc => bc.TaskId)
                .OnDelete(DeleteBehavior.Cascade);

            //===================== 3 ========================


            builder.Entity<ProjectRecently>()
                .HasKey(bc => new { bc.Id});

            builder.Entity<ProjectRecently>()
                .HasOne(bc => bc.User)
                .WithMany(b => b.ProjectRecentlies)
                .HasForeignKey(bc => bc.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<ProjectRecently>()
                .HasOne(bc => bc.Project)
                .WithMany(c => c.ProjectRecentlies)
                .HasForeignKey(bc => bc.ProjectId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }

}

