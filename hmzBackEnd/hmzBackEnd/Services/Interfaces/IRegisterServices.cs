using hmzBackEnd.Data.Dtos.UserDto;

namespace hmzBackEnd.Services.Interfaces
{
    public interface IRegisterServices
    {
        Task<CreateUserDto> CreateUser(CreateUserDto createUserDto);
    }
}
