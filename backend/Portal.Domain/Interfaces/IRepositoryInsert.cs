using System.Threading.Tasks;

namespace Portal.Domain.Interfaces
{
    public interface IRepositoryInsert<T> where T : class
    {
        Task InsertAsync(T obj);
    }
}
