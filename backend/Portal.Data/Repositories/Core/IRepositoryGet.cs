using System;
using System.Linq;
using System.Linq.Expressions;

namespace Portal.Data.Repositories
{
    public interface IRepositoryGet<T> where T : class
    {
        IQueryable<T> Get();
        IQueryable<T> Get(Expression<Func<T, bool>> predicate);
    }
}
