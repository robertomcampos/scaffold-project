using Portal.Data.Integration.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Portal.Data.Integration.Stores
{
    public interface IAlunoGetStore
    {
        Task<IEnumerable<AlunoPortalResponse>> Get();
    }
}
