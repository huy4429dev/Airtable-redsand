using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectManage.Migrations
{
    public partial class add_attachment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "TaskAttaches",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "TaskAttaches");
        }
    }
}
