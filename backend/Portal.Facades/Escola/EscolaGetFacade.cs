using Portal.DTO;
using Portal.Services.Escola;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Portal.Facades.Escola
{
    public class EscolaGetFacade: IEscolaGetFacade
    {
        private readonly IEscolaGetService _escolaService;
        public EscolaGetFacade(IEscolaGetService escolaService)
        {
            _escolaService = escolaService;
        }

        public async Task<IEnumerable<EscolaResponse>> Get()
        {
            return await _escolaService.Get();
        }
    }
}
