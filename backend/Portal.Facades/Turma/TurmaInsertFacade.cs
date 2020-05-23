using Portal.Data.UnitOfWork;
using Portal.Domain.DTO;
using Portal.Services.Turma;
using System.Threading.Tasks;

namespace Portal.Facades.Turma
{
    public class TurmaInsertFacade : ITurmaInsertFacade
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ITurmaInsertService _turmaService;

        public TurmaInsertFacade(IUnitOfWork unitOfWork, ITurmaInsertService turmaService)
        {
            _unitOfWork = unitOfWork;
            _turmaService = turmaService;
        }

        public async Task Insert(TurmaRequest request)
        {
            await _turmaService.Insert(request);
            await _unitOfWork.SaveChangesAsync();
        }
    }
}
