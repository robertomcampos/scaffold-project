using Microsoft.EntityFrameworkCore;
using Portal.Data.Repositories.Core;
using Portal.Entities;
using System.Linq;

namespace Portal.Data.Repositories
{
    public class TurmaRepository: Repository<Turma>, ITurmaRepository
    {
        public TurmaRepository(ApplicationContext context): base(context)
        {
        }
        public new IQueryable<Turma> Get()
        {
            return base.Get()
                .OrderByDescending(x => x.CreatedDate)
                .Include(x => x.Escola)
                .AsQueryable();
        }
    }
}
