using hmzBackEnd.Data.Dtos.UserDto;
using hmzBackEnd.Data.Dtos.UserResponseDto;
using hmzBackEnd.Models;

namespace hmzBackEnd.Services.Interfaces
{
    public interface IUserServices
    {
        Task UpdateUser(int id ,UpdateUserDto updateUserDto);
        Task<PagedResultDto<ReadUserDto>> GetUsers(int page, int pageSize);
        Task<ReadUserDto> GetUserById(int id);
        Task<bool?> DeleteUser(int id);
    }
}
