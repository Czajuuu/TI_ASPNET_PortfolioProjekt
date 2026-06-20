using System.ComponentModel.DataAnnotations;

namespace Portfolio.Backend.Models
{
    public class Photo
    {
        public int Id { get; set; }

        [Required]
        public string Src { get; set; } = string.Empty;

        [StringLength(200)]
        public string Alt { get; set; } = string.Empty;

        public string Caption { get; set; } = string.Empty;
    }
}
