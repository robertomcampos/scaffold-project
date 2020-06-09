using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using Portal.Domain.DTO;
using Portal.Facades.Escola;
using Portal.Facades.Turma;
using Portal.Services.Turma;
using System.Threading.Tasks;

namespace Portal.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TurmaController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> Get([FromServices]ITurmaGetPaginateFacade turmaFacade, [FromQuery] PagingParametersRequest parameters)
        {
            return Ok(await turmaFacade.Get(parameters));
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromServices]ITurmaCreateFacade turmaFacade, TurmaRequest request)
        {
            await turmaFacade.Create(request);
            return Ok();
        }

        [HttpGet("all")]        
        public async Task<IActionResult> Get([FromServices]ITurmaGetFacade turmaFacade)
        {
            return Ok(await turmaFacade.Get());
        }
    }
}
