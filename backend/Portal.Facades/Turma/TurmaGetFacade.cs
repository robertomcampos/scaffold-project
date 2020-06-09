using Portal.Domain.DTO;
using Portal.Services.Turma;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Portal.Facades.Turma
{
    public class TurmaGetFacade : ITurmaGetFacade
    {
        private readonly ITurmaGetService _turmaService;
        public TurmaGetFacade(ITurmaGetService turmaService)
        {
            _turmaService = turmaService;
        }

        public async Task<IEnumerable<TurmaResponse>> Get()
        {
            return await _turmaService.Get();
        }
    }
}
