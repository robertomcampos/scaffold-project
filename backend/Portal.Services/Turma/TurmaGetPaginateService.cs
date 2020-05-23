using AutoMapper;
using Portal.Data.UnitOfWork;
using Portal.Domain.DTO;
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

        public async Task<PagedListResponse<TurmaResponse>> Get(PagingParametersRequest parameters)
        {
            return await _unitOfWork.TurmaRepository.Get(parameters.Page, parameters.Limit);
        }
    }
}
