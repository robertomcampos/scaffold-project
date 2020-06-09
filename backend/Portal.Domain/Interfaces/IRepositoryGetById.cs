using System.Threading.Tasks;

namespace Portal.Domain.Interfaces
{ 
    public interface IRepositoryGetById<T> where T : class
    {
        Task<T> GetById(object id);
    }
}
