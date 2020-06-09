using Portal.Data.UnitOfWork;
using Portal.Services.Escola;
using System;
using System.Threading.Tasks;

namespace Portal.Facades.Escola
{
    public class EscolaRemoveFacade: IEscolaRemoveFacade
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IEscolaRemoveService _escolaService;
        public EscolaRemoveFacade(IEscolaRemoveService escolaService, IUnitOfWork unitOfWork)
        {
            _escolaService = escolaService;
            _unitOfWork = unitOfWork;
        }

        public async Task Remove(object id)
        {
            _escolaService.Remove(id);
            await _unitOfWork.SaveChangesAsync();
        }
    }
}
