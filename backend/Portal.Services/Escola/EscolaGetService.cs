using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Portal.Data.UnitOfWork;
using Portal.Domain.DTO;
using Portal.Domain.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Portal.Services.Escola
{
    public class EscolaGetService : IEscolaGetService
    {
        private readonly IEscolaRepository _escolaRepository;
        private readonly IMapper _mapper;

        public EscolaGetService(IEscolaRepository escolaRepository, IMapper mapper)
        {
            _escolaRepository = escolaRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<EscolaResponse>> Get()
        {
            return await _escolaRepository.Get()
                .ProjectTo<EscolaResponse>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }
    }
}
