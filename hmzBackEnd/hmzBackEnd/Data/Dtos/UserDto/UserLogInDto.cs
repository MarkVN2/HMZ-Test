using System.ComponentModel.DataAnnotations;

namespace hmzBackEnd.Data.Dtos.UserDto
{
    public class UserLogInDto
    {
        [Required]
        public string? Email { get; set; }
        [Required]
        public string? Password { get; set; }
    }
}
