using Portal.Domain.DTO;
using Portal.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Portal.Domain.Interfaces
{
    public interface IEscolaRepository: IRepositoryInsert<Escola>
    {
        Task<PagedListResponse<EscolaResponse>> Get(int page, int limit);
        Task<IEnumerable<EscolaResponse>> Get();
    }
}
