using System;

namespace Portal.Domain.Interfaces
{ 
    public interface IRepositoryDeleteRange<T> where T : class
    {
        void DeleteRange(object[] ids);
    }
}
