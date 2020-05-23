using AutoMapper;
using Portal.Domain.Entities;
using Portal.Domain.Interfaces;
using System.Linq;

namespace Portal.Data.Repositories
{
    public class EscolaRepository : Repository<Escola>, IEscolaRepository
    {
        private readonly IMapper _mapper;
        public EscolaRepository(ApplicationContext context, IMapper mapper) : base(context)
        {
            _mapper = mapper;
        }
        public new IQueryable<Escola> Get()
        {
            return base.Get().OrderByDescending(x => x.CreatedDate);
        }
    }
}
