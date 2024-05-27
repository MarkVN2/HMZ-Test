using AutoMapper;
using hmzBackEnd.Data;
using hmzBackEnd.Data.Dtos.UserDto;
using hmzBackEnd.Models;
using hmzBackEnd.Repository.Interfaces;

namespace hmzBackEnd.Repository
{
    public class RegisterRepository : IRegisterRepository
    {
        private AppDBContext _context;
        private IMapper _mapper;
        public RegisterRepository(AppDBContext appDBContext, IMapper mapper)
        {
            _context = appDBContext;
            _mapper = mapper;
        }
        public async Task<CreateUserDto> CreateUser(CreateUserDto user)
        {
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }

            try 
            {
                var userModel = _mapper.Map<UserModel>(user);
                _context.Users.Add(userModel);
                await _context.SaveChangesAsync();

                return _mapper.Map<CreateUserDto>(userModel);
            }
            catch
            {
                return null;
            }

          
        }
    }
}
