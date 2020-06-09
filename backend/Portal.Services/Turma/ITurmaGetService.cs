using Portal.Domain.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Portal.Services.Turma
{
    public interface ITurmaGetService
    {
        Task<IEnumerable<TurmaResponse>> Get();
     }
}
