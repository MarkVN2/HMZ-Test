using Microsoft.AspNetCore.Mvc;

namespace hmzBackEnd.Models
{
    public class UserResponseModel 
    {
        public int Page { get; set; }
        public int PerPage { get; set; }
        public int Total { get; set; }
        public int TotalPages { get; set; }
        public List<UserModel> Data { get; set; }
    }
}
