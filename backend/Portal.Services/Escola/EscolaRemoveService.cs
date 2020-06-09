using Portal.Domain.Interfaces;
using System;

namespace Portal.Services.Escola
{
    public class EscolaRemoveService : IEscolaRemoveService
    {
        private readonly IEscolaRepository _escolaRepository;
        
        public EscolaRemoveService(IEscolaRepository escolaRepository)
        {
            _escolaRepository = escolaRepository;
        }

        public void Remove(object id)
        {
            _escolaRepository.Delete(id);
        }
    }
}
