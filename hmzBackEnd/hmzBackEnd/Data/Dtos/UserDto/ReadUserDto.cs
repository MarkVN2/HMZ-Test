﻿using System.ComponentModel.DataAnnotations;

namespace hmzBackEnd.Data.Dtos.UserDto
{
    public class ReadUserDto
    {
        [Key]
        [Required]
        public int? Id { get; set; }
        [Required]
        public string? FirstName { get; set; }
        [Required]
        public string? LastName { get; set; }
        [Required]
        public string? Email { get; set; }
        [Required]
        public string? Avatar { get; set; }
    }
}
