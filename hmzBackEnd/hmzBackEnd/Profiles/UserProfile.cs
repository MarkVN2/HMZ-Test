using AutoMapper;
using hmzBackEnd.Data.Dtos.UserDto;
using hmzBackEnd.Models;
namespace hmzBackEnd.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<CreateUserDto, UserModel>();
            CreateMap<UpdateUserDto, UserModel>();
            CreateMap<ReadUserDto, UserModel>();
            CreateMap<UserModel, ReadUserDto>();
            CreateMap<UserModel, CreateUserDto>();
            CreateMap<UserModel, UpdateUserDto>();

        }
    }
}

