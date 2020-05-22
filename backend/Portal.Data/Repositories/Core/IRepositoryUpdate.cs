namespace Portal.Data.Repositories.Core
{
    public interface IRepositoryUpdate<T> where T : class
    {
        void Update(T obj);
    }
}
