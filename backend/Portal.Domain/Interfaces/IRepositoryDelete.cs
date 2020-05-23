namespace Portal.Domain.Interfaces
{ 
    public interface IRepositoryDelete<T> where T : class
    {
        void Delete(object id);
    }
}
