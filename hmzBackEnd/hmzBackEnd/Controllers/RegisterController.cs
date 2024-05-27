using hmzBackEnd.Data.Dtos.UserDto;
using hmzBackEnd.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace hmzBackEnd.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RegisterController : ControllerBase
    {
        private IRegisterServices _services;
        public RegisterController(IRegisterServices services)
        {
            _services = services;
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] CreateUserDto user)
        {
            try
            {
                var register = await _services.CreateUser(user);
                if (register == null)
                    return BadRequest(new { message = "Failed to register user" });
                return StatusCode(StatusCodes.Status201Created);
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
        }
    }
}
