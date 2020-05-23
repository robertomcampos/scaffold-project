using Portal.Data.UnitOfWork;
using Portal.Domain.DTO;
using Portal.Services.Escola;
using System.Threading.Tasks;

namespace Portal.Facades.Escola
{
    public class EscolaInsertFacade : IEscolaInsertFacade
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IEscolaCreateService _escolaService;
        public EscolaInsertFacade(IUnitOfWork unitOfWork, IEscolaCreateService escolaService)
        {
            _unitOfWork = unitOfWork;
            _escolaService = escolaService;
        }

        public async Task Insert(EscolaRequest escola)
        {
            await _escolaService.Create(escola);
            await _unitOfWork.SaveChangesAsync();
        }
    }
}
