using Portal.Application.Extension;
using Portal.DTO;
using System.Threading.Tasks;

namespace Portal.Services.Escola
{
    public interface IEscolaGetPaginateService
    {
        Task<PagedList<EscolaResponse>> Get(PagingParametersRequest parameters);
    }
}
