using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
    public class Studio
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }

        [Column("Naziv")]
        [MaxLength(255)]
        public string Naziv { get; set; }
        
        [Column("Sediste")]
        [MaxLength(255)]
        public string Sediste { get; set; }
        
        [Column("GodinaOsnivanja")]
        public int GodinaOsnivanja { get; set; }

        [Column("BrojIgara")]
        public int BrojIgara { get; set; }

        [Column("BrojIgaraNaStanju")]
        public int BrojIgaraNaStanju { get; set; }

        public Katalog Katalog { get; set; }
    }
}