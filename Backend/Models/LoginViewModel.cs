using System.ComponentModel.DataAnnotations;

namespace Portfolio.Backend.Models
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Login jest wymagany.")]
        public string Username { get; set; } = string.Empty;

        [Required(ErrorMessage = "Hasło jest wymagane.")]
        [DataType(DataType.Password)]
        public string Password { get; set; } = string.Empty;
    }
}
