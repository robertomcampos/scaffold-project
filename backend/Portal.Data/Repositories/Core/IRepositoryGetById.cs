namespace Portal.Data.Repositories.Core
{
    public interface IRepositoryGetById<T> where T : class
    {
        T GetById(object id);
    }
}
