using Microsoft.AspNetCore.Mvc;
using Portal.Facades.Aluno;
using System.Threading.Tasks;

namespace Portal.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AlunoController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> Get([FromServices]IAlunoGetFacade alunoFacade)
        {
            return Ok(await alunoFacade.Get());
        }
    }
}
