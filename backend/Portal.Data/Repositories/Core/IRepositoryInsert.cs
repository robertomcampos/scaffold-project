using System.Threading.Tasks;

namespace Portal.Data.Repositories
{
    public interface IRepositoryInsert<T> where T : class
    {
        Task InsertAsync(T obj);
    }
}
