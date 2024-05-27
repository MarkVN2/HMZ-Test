using hmzBackEnd.Data.Dtos.UserDto;
using hmzBackEnd.Data.Dtos.UserResponseDto;
using hmzBackEnd.Models;

namespace hmzBackEnd.Repository.Interfaces
{
    public interface IUserRepository
    {
        Task<PagedResultDto<ReadUserDto>> GetUsers(PaginationDto paginationDto);
        Task<ReadUserDto> GetUserById(int id);
        Task<UserModel> UpdateUser(int id, UserModel user);
        Task<bool?> DeleteUser(int id);
    }
}
