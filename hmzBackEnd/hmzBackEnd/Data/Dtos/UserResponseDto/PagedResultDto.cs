using System.ComponentModel.DataAnnotations;

namespace hmzBackEnd.Data.Dtos.UserResponseDto
{
    public class PagedResultDto<T>
    {
        [Required]
        public int Page { get; set; }
        [Required]
        public int PageSize { get; set; }
        [Required]
        public int Total { get; set; }
        [Required]
        public int TotalPages { get; set; }
        [Required]
        public List<T> Data { get; set; }
    }
}
