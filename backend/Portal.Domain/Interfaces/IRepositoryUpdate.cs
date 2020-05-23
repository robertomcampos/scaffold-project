namespace Portal.Domain.Interfaces
{
    public interface IRepositoryUpdate<T> where T : class
    {
        void Update(T obj);
    }
}
