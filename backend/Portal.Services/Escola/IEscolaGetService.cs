using Portal.Domain.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Portal.Services.Escola
{
    public interface IEscolaGetService
    {
        Task<IEnumerable<EscolaResponse>> Get();
     }
}
