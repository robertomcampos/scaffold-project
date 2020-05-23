using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Portal.Domain.DTO;
using Portal.Domain.Entities;
using Portal.Domain.Interfaces;
using Portal.Extensions;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portal.Data.Repositories
{
    public class EscolaRepository : Repository<Escola>, IEscolaRepository
    {
        private readonly IMapper _mapper;
        public EscolaRepository(ApplicationContext context, IMapper mapper) : base(context)
        {
            _mapper = mapper;
        }
        public async Task<PagedListResponse<EscolaResponse>> Get(int page, int limit)
        {
            return await base.Get().OrderByDescending(x => x.CreatedDate)
                .ProjectTo<EscolaResponse>(_mapper.ConfigurationProvider)
                .ToPagedListAsync(page, limit);
        }

        public async new Task<IEnumerable<EscolaResponse>> Get()
        {
            return await base.Get().OrderByDescending(x => x.CreatedDate)
                .ProjectTo<EscolaResponse>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }
    }
}
