using hmzBackEnd.Data.Dtos.UserDto;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace hmzBackEnd.Models
{
    public class UserModel
    {
        private ReadUserDto selected_user;

        [Key]
        [Required]        
        public int Id { get; set; }
  
        public string? Avatar { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
