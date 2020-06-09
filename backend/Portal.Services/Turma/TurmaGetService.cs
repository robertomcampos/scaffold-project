using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Portal.Data.UnitOfWork;
using Portal.Domain.DTO;
using Portal.Domain.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Portal.Services.Turma
{
    public class TurmaGetService : ITurmaGetService
    {
        private readonly ITurmaRepository _turmaRepository;
        private readonly IMapper _mapper;

        public TurmaGetService(ITurmaRepository turmaRepository, IMapper mapper)
        {
            _turmaRepository = turmaRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<TurmaResponse>> Get()
        {
            return await _turmaRepository.Get()
                .ProjectTo<TurmaResponse>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }
    }
}
