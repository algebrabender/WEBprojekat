using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Katalog",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    N = table.Column<int>(type: "int", nullable: false),
                    M = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Katalog", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "VideoIgre",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Datum = table.Column<DateTime>(type: "datetime2", nullable: false),
                    BrojDiskova = table.Column<int>(type: "int", nullable: false),
                    Tip = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    NaStanju = table.Column<int>(type: "int", nullable: false),
                    X = table.Column<int>(type: "int", nullable: false),
                    Y = table.Column<int>(type: "int", nullable: false),
                    KatalogID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VideoIgre", x => x.ID);
                    table.ForeignKey(
                        name: "FK_VideoIgre_Katalog_KatalogID",
                        column: x => x.KatalogID,
                        principalTable: "Katalog",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Studios",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Sediste = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    GodinaOsnivanja = table.Column<int>(type: "int", nullable: false),
                    BrojIgara = table.Column<int>(type: "int", nullable: false),
                    BrojIgaraNaStanju = table.Column<int>(type: "int", nullable: false),
                    KatalogID = table.Column<int>(type: "int", nullable: true),
                    VideoIgraID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Studios", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Studios_Katalog_KatalogID",
                        column: x => x.KatalogID,
                        principalTable: "Katalog",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Studios_VideoIgre_VideoIgraID",
                        column: x => x.VideoIgraID,
                        principalTable: "VideoIgre",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Studios_KatalogID",
                table: "Studios",
                column: "KatalogID");

            migrationBuilder.CreateIndex(
                name: "IX_Studios_VideoIgraID",
                table: "Studios",
                column: "VideoIgraID");

            migrationBuilder.CreateIndex(
                name: "IX_VideoIgre_KatalogID",
                table: "VideoIgre",
                column: "KatalogID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Studios");

            migrationBuilder.DropTable(
                name: "VideoIgre");

            migrationBuilder.DropTable(
                name: "Katalog");
        }
    }
}
