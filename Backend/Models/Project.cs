using System.ComponentModel.DataAnnotations;

namespace Portfolio.Backend.Models
{
    public class Project
    {
        public int Id { get; set; }

        [Required]
        [StringLength(200)]
        public string Title { get; set; } = string.Empty;

        [StringLength(200)]
        public string Subtitle { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        // Będziemy przechowywać tagi jako tekst po przecinku (np. "React, C#, SQL") dla uproszczenia bazy
        public string Tags { get; set; } = string.Empty;

        // "web" lub "video"
        [StringLength(50)]
        public string Type { get; set; } = "web";

        // "local", "youtube", "placeholder"
        [StringLength(50)]
        public string VideoType { get; set; } = "placeholder";

        public string? VideoSrc { get; set; }
        public string? VideoSrcEn { get; set; }
        public string? VideoSrcDe { get; set; }

        public string? Thumb { get; set; }
        public string? Link { get; set; }
    }
}
