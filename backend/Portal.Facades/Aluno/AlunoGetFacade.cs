using Portal.Domain.DTO;
using Portal.Services.Aluno;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Portal.Facades.Aluno
{
    public class AlunoGetFacade: IAlunoGetFacade
    {
        private readonly IAlunoGetService _alunoGetService;

        public AlunoGetFacade(IAlunoGetService alunoGetService)
        {
            _alunoGetService = alunoGetService;
        }

        public async Task<IEnumerable<AlunoListResponse>> Get()
        {
            return await _alunoGetService.Get();
        }
    }
}
