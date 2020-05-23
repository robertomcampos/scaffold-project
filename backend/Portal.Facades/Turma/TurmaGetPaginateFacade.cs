using Portal.Data.UnitOfWork;
using Portal.Domain.DTO;
using Portal.Services.Turma;
using System.Threading.Tasks;

namespace Portal.Facades.Turma
{
    public class TurmaGetPaginateFacade : ITurmaGetPaginateFacade
    {
        private readonly ITurmaGetPaginateService _turmaService;
        public TurmaGetPaginateFacade(IUnitOfWork unitOfWork, ITurmaGetPaginateService turmaService)
        {
            _turmaService = turmaService;
        }

        public async Task<PagedListResponse<TurmaResponse>> Get(PagingParametersRequest parameters)
        {
            return await _turmaService.Get(parameters);
        }
    }
}
