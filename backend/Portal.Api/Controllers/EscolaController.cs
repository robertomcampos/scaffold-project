﻿using Microsoft.AspNetCore.Mvc;
using Portal.DTO;
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
        public async Task<IActionResult> Create([FromServices]IEscolaInsertFacade escolaFacade, EscolaRequest request)
        {
            await escolaFacade.Insert(request);
            return Ok();
        }
    }
}