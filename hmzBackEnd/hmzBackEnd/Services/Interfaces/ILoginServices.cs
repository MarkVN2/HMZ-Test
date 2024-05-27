using hmzBackEnd.Data.Dtos.UserDto;
using hmzBackEnd.Models;

namespace hmzBackEnd.Services.Interfaces
{
    public interface ILoginServices
    {
        Task<UserModel> Authenticate(string email, string password);

    }
}
