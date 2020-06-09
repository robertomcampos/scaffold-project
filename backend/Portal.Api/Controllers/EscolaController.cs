using Microsoft.AspNetCore.Mvc;
using Portal.Domain.DTO;
using Portal.Facades.Escola;
using System.Threading.Tasks;

namespace Portal.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EscolaController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> Get([FromServices]IEscolaGetPaginateFacade escolaFacade, [FromQuery]PagingParametersRequest parameters = null)
        {
            return Ok(await escolaFacade.Get(parameters));
        }

        [HttpGet("all")]
        public async Task<IActionResult> Get([FromServices]IEscolaGetFacade escolaFacade)
        {
            return Ok(await escolaFacade.Get());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromServices]IEscolaCreateFacade escolaFacade, EscolaRequest request)
        {
            await escolaFacade.Create(request);
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> Remove([FromServices]IEscolaRemoveFacade escolaFacade, object request)
        {
            await escolaFacade.Remove(request);
            return Ok();
        }
        
        [HttpDelete]
        [Route("all")]
        public async Task<IActionResult> RemoveAll([FromServices]IEscolaRemoveAllFacade escolaFacade, string[] request)
        {
            await escolaFacade.RemoveAll(request);
            return Ok();
        }
    }
}
