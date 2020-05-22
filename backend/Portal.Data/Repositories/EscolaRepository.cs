using Portal.Data.Repositories.Core;
using Portal.Entities;
using System.Linq;

namespace Portal.Data.Repositories
{
    public class EscolaRepository : Repository<Escola>, IEscolaRepository
    {
        public EscolaRepository(ApplicationContext context) : base(context)
        {
        }
        public new IQueryable<Escola> Get()
        {
            return base.Get().OrderByDescending(x => x.CreatedDate).AsQueryable();
        }
    }
}
