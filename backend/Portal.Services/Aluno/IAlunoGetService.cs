using Portal.Domain.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Portal.Services.Aluno
{
    public interface IAlunoGetService
    {
        Task<IEnumerable<AlunoListResponse>> Get();
     }
}
