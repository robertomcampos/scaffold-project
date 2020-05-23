using Portal.Domain.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Portal.Facades.Escola
{
    public interface IEscolaGetFacade
    {
        Task<IEnumerable<EscolaResponse>> Get();
    }
}
