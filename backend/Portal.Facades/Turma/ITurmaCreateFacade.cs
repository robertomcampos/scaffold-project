using Portal.Domain.DTO;
using System.Threading.Tasks;

namespace Portal.Facades.Turma
{
    public interface ITurmaCreateFacade
    {
        Task Create(TurmaRequest turma);
    }
}
