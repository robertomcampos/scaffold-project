using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Portal.Data.Repositories.Core
{
    public abstract class Repository<T> : IRepository<T> where T : class
    {
        private readonly ApplicationContext _context;
        private readonly DbSet<T> table = null;

        public Repository(ApplicationContext context)
        {
            _context = context;
            table = _context.Set<T>();
        }
        public IQueryable<T> Get()
        {
            return table.AsQueryable();
        }
        public IQueryable<T> Get(Expression<Func<T, bool>> predicate)
        {
            return table.Where(predicate).AsQueryable();
        }
        public T GetById(object id)
        {
            return table.Find(id);
        }
        public async Task InsertAsync(T obj)
        {
            await table.AddAsync(obj);
        }
        public void Update(T obj)
        {
            table.Attach(obj);
            _context.Entry(obj).State = EntityState.Modified;
        }
        public void Delete(object id)
        {
            T existing = table.Find(id);
            table.Remove(existing);
        }
    }
}
