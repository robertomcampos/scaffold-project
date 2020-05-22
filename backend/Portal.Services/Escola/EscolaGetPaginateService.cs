using AutoMapper;
using AutoMapper.QueryableExtensions;
using Portal.Application.Extension;
using Portal.Data.UnitOfWork;
using Portal.DTO;
using System;
using System.Threading.Tasks;

namespace Portal.Services.Escola
{
    public class EscolaGetPaginateService : IEscolaGetPaginateService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public EscolaGetPaginateService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<PagedList<EscolaResponse>> Get(PagingParametersRequest parameters)
        {
            try
            {
                return await _unitOfWork.EscolaRepository
                .Get()
                .ProjectTo<EscolaResponse>(_mapper.ConfigurationProvider)
                .ToPagedListAsync(parameters.Page, parameters.Limit);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
