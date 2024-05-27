using hmzBackEnd.Models;
using hmzBackEnd.Repository.Interfaces;
using hmzBackEnd.Services.Interfaces;

namespace hmzBackEnd.Services
{
    public class LoginServices : ILoginServices
    {
        private ILoginRepository _repository;
        public LoginServices(ILoginRepository repository) 
        { 
            _repository = repository;
        }
        public async Task<UserModel> Authenticate(string email, string password)
        {
            UserModel user = await _repository.GetUserByEmail(email);
            if (user == null)
            {
                return null;
            }
            if (user.Password != password)
            {
               return null;
            }
            return user;
        }

    }
}
