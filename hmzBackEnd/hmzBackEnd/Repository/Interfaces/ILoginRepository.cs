using hmzBackEnd.Data.Dtos.UserDto;
using hmzBackEnd.Models;

namespace hmzBackEnd.Repository.Interfaces
{
    public interface ILoginRepository
    {
        Task<UserModel> GetUserByEmail(string email);
    }
}
