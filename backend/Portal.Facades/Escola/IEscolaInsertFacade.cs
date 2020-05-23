using Portal.Domain.DTO;
using System.Threading.Tasks;

namespace Portal.Facades.Escola
{
    public interface IEscolaInsertFacade
    {
        Task Insert(EscolaRequest escola);
    }
}
