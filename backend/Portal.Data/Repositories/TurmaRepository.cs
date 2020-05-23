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
    public class TurmaRepository: Repository<Turma>, ITurmaRepository
    {
        private readonly IMapper _mapper;

        public TurmaRepository(ApplicationContext context, IMapper mapper) : base(context)
        {
            _mapper = mapper;
        }

        public async Task<PagedListResponse<TurmaResponse>> Get(int page, int limit)
        {
            return await base.Get().OrderByDescending(x => x.CreatedDate)
                .ProjectTo<TurmaResponse>(_mapper.ConfigurationProvider)
                .ToPagedListAsync(page, limit);
        }
    }
}
