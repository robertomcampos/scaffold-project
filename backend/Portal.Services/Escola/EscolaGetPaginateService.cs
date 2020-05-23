using Portal.Data.UnitOfWork;
using Portal.Domain.DTO;
using System;
using System.Threading.Tasks;

namespace Portal.Services.Escola
{
    public class EscolaGetPaginateService : IEscolaGetPaginateService
    {
        private readonly IUnitOfWork _unitOfWork;

        public EscolaGetPaginateService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<PagedListResponse<EscolaResponse>> Get(PagingParametersRequest parameters)
        {
            try
            {
                return await _unitOfWork.EscolaRepository.Get(parameters.Page, parameters.Limit);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
