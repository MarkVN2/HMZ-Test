using AutoMapper;
using hmzBackEnd.Data.Dtos.UserDto;
using hmzBackEnd.Data.Dtos.UserResponseDto;
using hmzBackEnd.Models;
using hmzBackEnd.Repository.Interfaces;
using hmzBackEnd.Services.Interfaces;

namespace hmzBackEnd.Services
{
    public class UserServices : IUserServices
    {
        private IMapper _mapper;
        private IUserRepository _repository;

        public UserServices(IMapper mapper,IUserRepository repository)
        {
            _mapper = mapper;
            _repository = repository;
        }

        public Task<bool?> DeleteUser(int id)
        {   
            return _repository.DeleteUser(id);
        }

        public async Task<ReadUserDto> GetUserById(int id)
        {
            return  await _repository.GetUserById(id);
        }

        public async Task<PagedResultDto<ReadUserDto>> GetUsers(int page, int pageSize)
        {
            PaginationDto pagination = new PaginationDto()
            {
                Page = page,
                PageSize = pageSize
            };

            return await _repository.GetUsers(pagination);
        }

        public Task UpdateUser(int id,UpdateUserDto updateUserDto)
        {
           UserModel user = _mapper.Map<UserModel>(updateUserDto);
           return _repository.UpdateUser(id, user);
        }
    }
}
