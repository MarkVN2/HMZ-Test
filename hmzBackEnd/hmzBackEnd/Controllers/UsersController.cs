using AutoMapper;
using hmzBackEnd.Data;
using hmzBackEnd.Data.Dtos.UserDto;
using hmzBackEnd.Data.Dtos.UserResponseDto;
using hmzBackEnd.Models;
using hmzBackEnd.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace hmzBackEnd.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {

        private IMapper _mapper;
        private IUserServices _services;
        public UsersController(IUserServices services, IMapper mapper)
        {
            _services = services;
            _mapper = mapper;
        }
           

        [HttpGet()]
        public async Task<IActionResult> GetUsers([FromQuery] int? page = 1, [FromQuery(Name = "per_page")] int? perPage = 5)
        {
            try
            {
                PagedResultDto<ReadUserDto> users = await _services.GetUsers((int)page, (int)perPage);
                return Ok(users);
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
        }
        [HttpGet("{id}")]
        public async Task<ActionResult> GetUserByIdAsync(int id)
        {
            try
            {   
                ReadUserDto user = await _services.GetUserById(id);
                return Ok(user);
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            try
            {
                var response = await _services.DeleteUser(id);
                if (response == null)
                    return BadRequest(new { message = "Failed to delete user maybe user doesn't exist" });
                return Ok();
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] UpdateUserDto user)
        {
            try
            { 
                await _services.UpdateUser(id,user);
                return Ok();
            }
            catch( Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
        }
    }
}
