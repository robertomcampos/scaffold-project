using Portal.Domain.DTO;
using Portal.Services.Escola;
using System.Threading.Tasks;

namespace Portal.Facades.Escola
{
    public class EscolaGetPaginateFacade : IEscolaGetPaginateFacade
    {
        private readonly IEscolaGetPaginateService _escolaService;
        public EscolaGetPaginateFacade(IEscolaGetPaginateService escolaService)
        {
            _escolaService = escolaService;
        }

        public async Task<PagedListResponse<EscolaResponse>> Get(PagingParametersRequest request)
        {
            return await _escolaService.Get(request);
        }
    }
}
