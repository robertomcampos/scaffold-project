using Portal.Domain.DTO;
using System.Threading.Tasks;

namespace Portal.Facades.Escola
{
    public interface IEscolaGetPaginateFacade
    {
        Task<PagedListResponse<EscolaResponse>> Get(PagingParametersRequest request);
    }
}
