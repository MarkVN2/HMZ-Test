using System.ComponentModel.DataAnnotations;

namespace hmzBackEnd.Data.Dtos.UserResponseDto
{
    public class PaginationDto
    {
        [Required]
        public int Page { get; set; } = 1;
        [Required]
        public int PageSize { get; set; } = 5;
    }
}

