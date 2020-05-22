namespace Portal.Data.Repositories.Core
{
    public interface IRepositoryDelete<T> where T : class
    {
        void Delete(object id);
    }
}
