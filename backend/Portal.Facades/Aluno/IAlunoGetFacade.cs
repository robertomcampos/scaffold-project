using Portal.Domain.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Portal.Facades.Aluno
{
    public interface IAlunoGetFacade
    {
        Task<IEnumerable<AlunoListResponse>> Get();
    }
}
