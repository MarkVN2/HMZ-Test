using hmzBackEnd.Data.Dtos.UserDto;
using hmzBackEnd.Repository.Interfaces;
using hmzBackEnd.Services.Interfaces;

namespace hmzBackEnd.Services
{
    public class RegisterServices : IRegisterServices
    {
        IRegisterRepository _repository;
        public RegisterServices(IRegisterRepository repository)
        {
            _repository = repository;
        }
        public async Task<CreateUserDto> CreateUser(CreateUserDto createUserDto)
        {
            return await _repository.CreateUser(createUserDto); ;
        }
    }
}
