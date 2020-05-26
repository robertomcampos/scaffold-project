using Portal.Data.UnitOfWork;
using Portal.Domain.DTO;
using Portal.Services.Escola;
using System.Threading.Tasks;

namespace Portal.Facades.Escola
{
    public class EscolaCreateFacade : IEscolaCreateFacade
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IEscolaCreateService _escolaService;
        public EscolaCreateFacade(IUnitOfWork unitOfWork, IEscolaCreateService escolaService)
        {
            _unitOfWork = unitOfWork;
            _escolaService = escolaService;
        }

        public async Task Create(EscolaRequest escola)
        {
            await _escolaService.Create(escola);
            await _unitOfWork.SaveChangesAsync();
        }
    }
}
