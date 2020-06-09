using Portal.Domain.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Portal.Facades.Turma
{
    public interface ITurmaGetFacade
    {
        Task<IEnumerable<TurmaResponse>> Get();
    }
}
