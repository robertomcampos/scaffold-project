using Portal.Domain.Interfaces;
using System;

namespace Portal.Services.Escola
{
    public class EscolaRemoveAllService : IEscolaRemoveAllService
    {
        private readonly IEscolaRepository _escolaRepository;
        
        public EscolaRemoveAllService(IEscolaRepository escolaRepository)
        {
            _escolaRepository = escolaRepository;
        }

        public void RemoveAll(object[] ids)
        {
            _escolaRepository.DeleteRange(ids);
        }
    }
}
