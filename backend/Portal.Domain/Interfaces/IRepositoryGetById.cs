namespace Portal.Domain.Interfaces
{ 
    public interface IRepositoryGetById<T> where T : class
    {
        T GetById(object id);
    }
}
