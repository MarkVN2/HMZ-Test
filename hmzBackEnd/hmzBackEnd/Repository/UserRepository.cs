using AutoMapper;
using hmzBackEnd.Data;
using hmzBackEnd.Data.Dtos.UserDto;
using hmzBackEnd.Data.Dtos.UserResponseDto;
using hmzBackEnd.Models;
using hmzBackEnd.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace hmzBackEnd.Repository
{
    public class UserRepository : IUserRepository
    {
        private AppDBContext _context;
        private IMapper _mapper;
        public UserRepository(AppDBContext appDBContext, IMapper mapper)
        {
            _context = appDBContext;
            _mapper = mapper;
        }
        public async Task<ReadUserDto> GetUserById(int id)
        {
            UserModel? user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                throw new Exception($"User with id {id} not found [getByID]");
            }
            ReadUserDto final_user = new ReadUserDto()
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                Avatar = user.Avatar
            };
            return final_user;
        }
        public async Task<PagedResultDto<ReadUserDto>> GetUsers(PaginationDto pagination)
        {
            var total = await _context.Users.CountAsync();
            var total_pages = (int)Math.Ceiling(total / (double)pagination.PageSize);

            var users = await _context.Users
                .Skip((pagination.Page - 1) * pagination.PageSize)
                .Take(pagination.PageSize)
                .Select(x => new ReadUserDto()
                {
                    Id = x.Id,
                    FirstName = x.FirstName,
                    LastName = x.LastName,
                    Email = x.Email,
                    Avatar = x.Avatar
                })
                .ToListAsync();

            return new PagedResultDto<ReadUserDto>
            {
                Page = pagination.Page,
                PageSize = pagination.PageSize,
                Total = total,
                TotalPages = total_pages,
                Data = users
            };
        }
        public async Task<UserModel> CreateUser(UserModel user)
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task<bool?> DeleteUser(int id)
        {
            var local = _context.Set<UserModel>()
            .Local
            .FirstOrDefault(entry => entry.Id.Equals(id));

           
            if (local != null)
            {
                _context.Entry(local).State = EntityState.Detached;
            }

            UserModel selected_user = await _context.Users.FindAsync(id);

            if (selected_user == null)
            {
                return null;
            }

            _context.Users.Remove(selected_user);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<UserModel> UpdateUser(int id, UserModel user)
        {
            UserModel edit_user = await _context.Users.FindAsync(id);

            if (edit_user == null)
            {
                return null;
            }


            edit_user.Avatar = user.Avatar;
            edit_user.FirstName = user.FirstName;
            edit_user.LastName = user.LastName;
            edit_user.Email = user.Email;

            _context.Update(edit_user);
            await _context.SaveChangesAsync();

            return edit_user;
        }
    }
}
