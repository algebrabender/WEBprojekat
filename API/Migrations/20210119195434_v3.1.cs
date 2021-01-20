using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class v31 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Studios_Katalog_KatalogID",
                table: "Studios");

            migrationBuilder.DropIndex(
                name: "IX_Studios_KatalogID",
                table: "Studios");

            migrationBuilder.DropColumn(
                name: "KatalogID",
                table: "Studios");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "KatalogID",
                table: "Studios",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Studios_KatalogID",
                table: "Studios",
                column: "KatalogID");

            migrationBuilder.AddForeignKey(
                name: "FK_Studios_Katalog_KatalogID",
                table: "Studios",
                column: "KatalogID",
                principalTable: "Katalog",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
