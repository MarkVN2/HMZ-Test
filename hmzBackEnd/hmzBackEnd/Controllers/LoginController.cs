using hmzBackEnd.Data.Dtos.UserDto;
using hmzBackEnd.Services;
using hmzBackEnd.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;


namespace hmzBackEnd.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private ILoginServices _services;
        public  LoginController(ILoginServices services)
        {
            _services = services;
        }


        [HttpPost]
        public async Task<IActionResult> Login([FromBody] UserLogInDto user)
        {
            
            try
            {
                var validation =  await _services.Authenticate(user.Email, user.Password);
                if (validation == null)
                    return BadRequest(new { message = "Username or password is incorrect" });
                return Ok();
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
        }
    }
}
