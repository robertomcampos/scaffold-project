using System;
using System.Threading.Tasks;

namespace Portal.Facades.Escola
{
    public interface IEscolaRemoveAllFacade
    {
        Task RemoveAll(object[] ids);
    }
}
