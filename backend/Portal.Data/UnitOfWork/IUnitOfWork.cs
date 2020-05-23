using System.Threading.Tasks;

namespace Portal.Data.UnitOfWork
{
    public interface IUnitOfWork
    {
        Task SaveChangesAsync();
    }
}
