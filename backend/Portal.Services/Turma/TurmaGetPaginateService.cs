using AutoMapper;
using AutoMapper.QueryableExtensions;
using Portal.Application.Extension;
using Portal.Data.UnitOfWork;
using Portal.DTO;
using System.Threading.Tasks;

namespace Portal.Services.Turma
{
    public class TurmaGetPaginateService : ITurmaGetPaginateService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public TurmaGetPaginateService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<PagedList<TurmaResponse>> Get(PagingParametersRequest parameters)
        {
            return await _unitOfWork
                .TurmaRepository
                .Get()
                .ProjectTo<TurmaResponse>(_mapper.ConfigurationProvider)
                .ToPagedListAsync(parameters.Page, parameters.Limit);
        }
    }
}
