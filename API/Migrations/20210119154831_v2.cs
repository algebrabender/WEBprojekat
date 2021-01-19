using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class v2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Studios_VideoIgre_VideoIgraID",
                table: "Studios");

            migrationBuilder.DropIndex(
                name: "IX_Studios_VideoIgraID",
                table: "Studios");

            migrationBuilder.DropColumn(
                name: "VideoIgraID",
                table: "Studios");

            migrationBuilder.AddColumn<int>(
                name: "StudioID",
                table: "VideoIgre",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_VideoIgre_StudioID",
                table: "VideoIgre",
                column: "StudioID");

            migrationBuilder.AddForeignKey(
                name: "FK_VideoIgre_Studios_StudioID",
                table: "VideoIgre",
                column: "StudioID",
                principalTable: "Studios",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_VideoIgre_Studios_StudioID",
                table: "VideoIgre");

            migrationBuilder.DropIndex(
                name: "IX_VideoIgre_StudioID",
                table: "VideoIgre");

            migrationBuilder.DropColumn(
                name: "StudioID",
                table: "VideoIgre");

            migrationBuilder.AddColumn<int>(
                name: "VideoIgraID",
                table: "Studios",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Studios_VideoIgraID",
                table: "Studios",
                column: "VideoIgraID");

            migrationBuilder.AddForeignKey(
                name: "FK_Studios_VideoIgre_VideoIgraID",
                table: "Studios",
                column: "VideoIgraID",
                principalTable: "VideoIgre",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
