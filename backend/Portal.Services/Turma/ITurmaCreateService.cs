using Portal.Domain.DTO;
using System.Threading.Tasks;

namespace Portal.Services.Turma
{
    public interface ITurmaCreateService
    {
        Task Create(TurmaRequest turma);
    }
}
