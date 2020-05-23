using Portal.Domain.Interfaces;
using System.Threading.Tasks;

namespace Portal.Data.UnitOfWork
{
    public interface IUnitOfWork
    {
        ApplicationContext DatabaseContext { get; }
        Task SaveChangesAsync();
        ITurmaRepository TurmaRepository { get; }
        IEscolaRepository EscolaRepository { get; }
    }
}
