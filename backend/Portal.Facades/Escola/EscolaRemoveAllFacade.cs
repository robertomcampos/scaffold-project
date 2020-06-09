using Portal.Data.UnitOfWork;
using Portal.Services.Escola;
using System;
using System.Threading.Tasks;

namespace Portal.Facades.Escola
{
    public class EscolaRemoveAllFacade: IEscolaRemoveAllFacade
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IEscolaRemoveAllService _escolaService;
        public EscolaRemoveAllFacade(IEscolaRemoveAllService escolaService, IUnitOfWork unitOfWork)
        {
            _escolaService = escolaService;
            _unitOfWork = unitOfWork;
        }

        public async Task RemoveAll(object[] ids)
        {
            _escolaService.RemoveAll(ids);
            await _unitOfWork.SaveChangesAsync();
        }
    }
}
