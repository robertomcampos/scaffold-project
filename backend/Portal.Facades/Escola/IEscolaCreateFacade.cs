using Portal.Domain.DTO;
using System.Threading.Tasks;

namespace Portal.Facades.Escola
{
    public interface IEscolaCreateFacade
    {
        Task Create(EscolaRequest escola);
    }
}
