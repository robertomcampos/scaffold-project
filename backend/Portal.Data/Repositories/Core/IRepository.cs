namespace Portal.Data.Repositories.Core
{
    public interface IRepository<T>: IRepositoryGet<T>, IRepositoryGetById<T>, IRepositoryInsert<T>, IRepositoryUpdate<T>, IRepositoryDelete<T> where T : class
    {
    }
}
