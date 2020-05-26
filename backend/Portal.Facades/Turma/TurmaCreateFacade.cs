using Portal.Data.UnitOfWork;
using Portal.Domain.DTO;
using Portal.Services.Turma;
using System.Threading.Tasks;

namespace Portal.Facades.Turma
{
    public class TurmaCreateFacade : ITurmaCreateFacade
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ITurmaCreateService _turmaService;

        public TurmaCreateFacade(IUnitOfWork unitOfWork, ITurmaCreateService turmaService)
        {
            _unitOfWork = unitOfWork;
            _turmaService = turmaService;
        }

        public async Task Create(TurmaRequest request)
        {
            await _turmaService.Create(request);
            await _unitOfWork.SaveChangesAsync();
        }
    }
}
