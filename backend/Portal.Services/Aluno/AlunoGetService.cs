using AutoMapper;
using Portal.Data.Integration.DTO;
using Portal.Data.Integration.Stores;
using Portal.Domain.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Portal.Services.Aluno
{
    public class AlunoGetService : IAlunoGetService
    {
        private readonly IAlunoGetStore _alunoGetStore;
        private readonly IMapper _mapper;

        public AlunoGetService(IAlunoGetStore alunoGetStore, IMapper mapper)
        {
            _alunoGetStore = alunoGetStore;
            _mapper = mapper;
        }

        public async Task<IEnumerable<AlunoListResponse>> Get()
        {
            var alunos = await _alunoGetStore.Get();
            return _mapper.Map<IEnumerable<AlunoPortalResponse>, IEnumerable<AlunoListResponse>>(alunos);
        }
    }
}
