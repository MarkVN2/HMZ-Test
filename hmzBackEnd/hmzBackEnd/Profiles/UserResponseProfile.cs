using AutoMapper;
using hmzBackEnd.Models;
using Microsoft.AspNetCore.Mvc;

namespace hmzBackEnd.Profiles
{
    public class UserResponseProfile : Profile
    {
        public UserResponseProfile()
        {
            CreateMap<UserResponseModel ,UserModel >();
        }
      
    }
}
