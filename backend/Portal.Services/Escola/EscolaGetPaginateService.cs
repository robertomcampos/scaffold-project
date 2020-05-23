using Portal.Domain.DTO;
using Portal.Domain.Interfaces;
using EscolaEntity = Portal.Domain.Entities.Escola;
using System;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper.QueryableExtensions;
using AutoMapper;
using Portal.Extensions;

namespace Portal.Services.Escola
{
    public class EscolaGetPaginateService : IEscolaGetPaginateService
    {
        private readonly IEscolaRepository _escolaRepository;
        private readonly IMapper _mapper;

        public EscolaGetPaginateService(IEscolaRepository escolaRepository, IMapper mapper)
        {
            _escolaRepository = escolaRepository;
            _mapper = mapper;
        }

        public async Task<PagedListResponse<EscolaResponse>> Get(PagingParametersRequest parameters)
        {
            try
            {
                return await _escolaRepository.Get()
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
