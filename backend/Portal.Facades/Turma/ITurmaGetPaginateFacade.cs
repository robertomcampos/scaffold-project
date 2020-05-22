using Portal.Application.Extension;
using Portal.DTO;
using System.Threading.Tasks;

namespace Portal.Facades.Turma
{
    public interface ITurmaGetPaginateFacade
    {
        Task<PagedList<TurmaResponse>> Get(PagingParametersRequest parameters);
    }
}
