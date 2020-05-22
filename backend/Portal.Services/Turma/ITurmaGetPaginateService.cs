using Portal.Application.Extension;
using Portal.DTO;
using System.Threading.Tasks;

namespace Portal.Services.Turma
{
    public interface ITurmaGetPaginateService
    {
        Task<PagedList<TurmaResponse>> Get(PagingParametersRequest parameters);
    }
}
