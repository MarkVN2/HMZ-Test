using System.ComponentModel.DataAnnotations;

namespace hmzBackEnd.Data.Dtos.UserDto
{
    public class CreateUserDto
    {
        [Required]
        public string firstName { get; set; }
        [Required]
        public string lastName { get; set; }
        [Required]
        public string  email { get; set; }
        public string avatar { get; set; }
        [Required]
        public string? password { get; set; }
        
    }  
}

