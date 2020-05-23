using Portal.Domain.DTO;
using Portal.Domain.Entities;
using System.Threading.Tasks;

namespace Portal.Domain.Interfaces
{
    public interface ITurmaRepository: IRepositoryInsert<Turma>, IRepositoryGet<Turma>
    {
        Task<PagedListResponse<TurmaResponse>> Get(int page, int limit);
    }
}
