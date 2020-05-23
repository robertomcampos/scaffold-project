using Portal.Domain.DTO;
using System.Threading.Tasks;

namespace Portal.Services.Turma
{
    public interface ITurmaInsertService
    {
        Task Insert(TurmaRequest turma);
    }
}
