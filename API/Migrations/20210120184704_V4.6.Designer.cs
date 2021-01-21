﻿// <auto-generated />
using System;
using API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace API.Migrations
{
    [DbContext(typeof(GameShopContext))]
    [Migration("20210120184704_V4.6")]
    partial class V46
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.2");

            modelBuilder.Entity("API.Models.Katalog", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .UseIdentityColumn();

                    b.Property<int>("M")
                        .HasColumnType("int")
                        .HasColumnName("M");

                    b.Property<int>("N")
                        .HasColumnType("int")
                        .HasColumnName("N");

                    b.Property<string>("Naziv")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Naziv");

                    b.HasKey("ID");

                    b.ToTable("Katalog");
                });

            modelBuilder.Entity("API.Models.Studio", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .UseIdentityColumn();

                    b.Property<int>("BrojIgara")
                        .HasColumnType("int")
                        .HasColumnName("BrojIgara");

                    b.Property<int>("BrojIgaraNaStanju")
                        .HasColumnType("int")
                        .HasColumnName("BrojIgaraNaStanju");

                    b.Property<int>("GodinaOsnivanja")
                        .HasMaxLength(4)
                        .HasColumnType("int")
                        .HasColumnName("GodinaOsnivanja");

                    b.Property<string>("Naziv")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Naziv");

                    b.Property<string>("Sediste")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Sediste");

                    b.HasKey("ID");

                    b.ToTable("Studios");
                });

            modelBuilder.Entity("API.Models.VideoIgra", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .UseIdentityColumn();

                    b.Property<int>("BrojDiskova")
                        .HasColumnType("int")
                        .HasColumnName("BrojDiskova");

                    b.Property<DateTime>("DatumIzdavanja")
                        .HasColumnType("datetime2")
                        .HasColumnName("Datum");

                    b.Property<int?>("KatalogID")
                        .HasColumnType("int");

                    b.Property<int>("KolicinaNaStanju")
                        .HasColumnType("int")
                        .HasColumnName("NaStanju");

                    b.Property<string>("Naziv")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Naziv");

                    b.Property<int>("StudioID")
                        .HasColumnType("int")
                        .HasColumnName("StudioID");

                    b.Property<string>("Tip")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Tip");

                    b.Property<int>("X")
                        .HasColumnType("int")
                        .HasColumnName("X");

                    b.Property<int>("Y")
                        .HasColumnType("int")
                        .HasColumnName("Y");

                    b.HasKey("ID");

                    b.HasIndex("KatalogID");

                    b.ToTable("VideoIgre");
                });

            modelBuilder.Entity("API.Models.VideoIgra", b =>
                {
                    b.HasOne("API.Models.Katalog", "Katalog")
                        .WithMany("VideoIgre")
                        .HasForeignKey("KatalogID");

                    b.Navigation("Katalog");
                });

            modelBuilder.Entity("API.Models.Katalog", b =>
                {
                    b.Navigation("VideoIgre");
                });
#pragma warning restore 612, 618
        }
    }
}