using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CRUD.Models
{
    public class DCandidate
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName ="nvarchar(100)")]
        public string fullName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public int mobile { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public int email { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public int age { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public int bloodGroup { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public int address { get; set; }
    }
}
