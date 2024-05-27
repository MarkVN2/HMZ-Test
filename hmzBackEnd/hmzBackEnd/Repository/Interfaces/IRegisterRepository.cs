using hmzBackEnd.Data.Dtos.UserDto;

namespace hmzBackEnd.Repository.Interfaces
{
    public interface IRegisterRepository
    {
        Task<CreateUserDto> CreateUser(CreateUserDto user);
    }
}
