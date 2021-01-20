using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class V46 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_VideoIgre_Studios_StudioID",
                table: "VideoIgre");

            migrationBuilder.DropIndex(
                name: "IX_VideoIgre_StudioID",
                table: "VideoIgre");

            migrationBuilder.AlterColumn<int>(
                name: "StudioID",
                table: "VideoIgre",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "StudioID",
                table: "VideoIgre",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

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
    }
}
