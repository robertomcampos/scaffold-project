using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Portal.Domain.DTO;
using Portal.Domain.Entities;
using Portal.Domain.Interfaces;
using Portal.Extensions;
using System.Linq;
using System.Threading.Tasks;

namespace Portal.Data.Repositories
{
    public class TurmaRepository : Repository<Turma>, ITurmaRepository
    {
        public TurmaRepository(ApplicationContext context) : base(context) { }

        public new IQueryable<Turma> Get()
        {
            return base.Get().OrderByDescending(x => x.CreatedDate);
        }
    }
}
