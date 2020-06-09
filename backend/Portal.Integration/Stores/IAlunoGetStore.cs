using Portal.Domain.DTO;
using Portal.Integration.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Portal.Integration.Stores
{
    public interface IAlunoGetStore
    {
        Task<IEnumerable<AlunoPortalResponse>> Get();
    }
}
