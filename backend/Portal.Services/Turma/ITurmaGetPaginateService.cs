using Portal.Domain.DTO;
using System.Threading.Tasks;

namespace Portal.Services.Turma
{
    public interface ITurmaGetPaginateService
    {
        Task<PagedListResponse<TurmaResponse>> Get(PagingParametersRequest parameters);
    }
}
