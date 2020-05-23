using Portal.Domain.DTO;
using System.Threading.Tasks;

namespace Portal.Facades.Turma
{
    public interface ITurmaGetPaginateFacade
    {
        Task<PagedListResponse<TurmaResponse>> Get(PagingParametersRequest parameters);
    }
}
