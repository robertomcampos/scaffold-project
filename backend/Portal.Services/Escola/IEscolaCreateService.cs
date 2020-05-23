using Portal.Domain.DTO;
using System.Threading.Tasks;

namespace Portal.Services.Escola
{
    public interface IEscolaCreateService
    {
        Task Create(EscolaRequest escola);
    }
}
