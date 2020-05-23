using AutoMapper;
using AutoMapper.QueryableExtensions;
using Portal.Data.UnitOfWork;
using Portal.Domain.DTO;
using Portal.Domain.Interfaces;
using Portal.Extensions;
using System.Threading.Tasks;

namespace Portal.Services.Turma
{
    public class TurmaGetPaginateService : ITurmaGetPaginateService
    {
        private readonly IMapper _mapper;
        private readonly ITurmaRepository _turmaRepository;

        public TurmaGetPaginateService(ITurmaRepository turmaRepository, IMapper mapper)
        {
            _turmaRepository = turmaRepository;
            _mapper = mapper;
        }

        public async Task<PagedListResponse<TurmaResponse>> Get(PagingParametersRequest parameters)
        {
            return await _turmaRepository.Get()
                .ProjectTo<TurmaResponse>(_mapper.ConfigurationProvider)
                .ToPagedListAsync(parameters.Page, parameters.Limit);
        }
    }
}
