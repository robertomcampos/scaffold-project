using Portal.Application.Extension;
using Portal.DTO;
using System.Threading.Tasks;

namespace Portal.Facades.Escola
{
    public interface IEscolaGetPaginateFacade
    {
        Task<PagedList<EscolaResponse>> Get(PagingParametersRequest request);
    }
}
