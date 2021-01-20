using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class V44 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Boja",
                table: "VideoIgre");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Boja",
                table: "VideoIgre",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
