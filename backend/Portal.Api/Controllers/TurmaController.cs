using Microsoft.AspNetCore.Mvc;
using Portal.Domain.DTO;
using Portal.Facades.Turma;
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
        public async Task<IActionResult> Create([FromServices]ITurmaInsertFacade turmaFacade, TurmaRequest request)
        {
            await turmaFacade.Insert(request);
            return Ok();
        }
    }
}
