using Portal.Domain.Entities;

namespace Portal.Domain.Interfaces
{
    public interface IEscolaRepository : IRepositoryInsert<Escola>, IRepositoryGet<Escola>, IRepositoryDelete<Escola>, IRepositoryDeleteRange<Escola> { }
}
