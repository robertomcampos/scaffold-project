using Portal.Domain.DTO;
using System.Threading.Tasks;

namespace Portal.Services.Escola
{
    public interface IEscolaGetPaginateService
    {
        Task<PagedListResponse<EscolaResponse>> Get(PagingParametersRequest parameters);
    }
}
