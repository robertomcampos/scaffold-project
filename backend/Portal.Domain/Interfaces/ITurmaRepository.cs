using Portal.Domain.Entities;
using System.Linq;

namespace Portal.Domain.Interfaces
{
    public interface ITurmaRepository: IRepositoryInsert<Turma>, IRepositoryGet<Turma>
    {
    }
}
