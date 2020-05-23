using Portal.Domain.DTO;
using System.Threading.Tasks;

namespace Portal.Facades.Turma
{
    public interface ITurmaInsertFacade
    {
        Task Insert(TurmaRequest school);
    }
}
