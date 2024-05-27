using AutoMapper;
using hmzBackEnd.Data;
using hmzBackEnd.Data.Dtos.UserDto;
using hmzBackEnd.Models;
using hmzBackEnd.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace hmzBackEnd.Repository
{
    public class LoginRepository : ILoginRepository
    {
        private AppDBContext _context;
        private IMapper _mapper;
        public LoginRepository(AppDBContext appDBContext, IMapper mapper)
        {
            _context = appDBContext;
            _mapper = mapper;
        }

        public async Task<UserModel> GetUserByEmail(string email)
        {
            UserModel? user = await _context.Users.FirstOrDefaultAsync(x => x.Email == email);
            return user;
        }
    }
}
