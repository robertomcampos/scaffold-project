namespace Portal.Domain.Interfaces
{
    public interface IRepository<T>: IRepositoryGet<T>, IRepositoryGetById<T>, IRepositoryInsert<T>, IRepositoryUpdate<T>, IRepositoryDelete<T> where T : class
    {
    }
}
