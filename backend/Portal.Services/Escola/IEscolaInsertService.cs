using Portal.DTO;
using System.Threading.Tasks;

namespace Portal.Services.Escola
{
    public interface IEscolaInsertService
    {
        Task Insert(EscolaRequest escola);
    }
}
