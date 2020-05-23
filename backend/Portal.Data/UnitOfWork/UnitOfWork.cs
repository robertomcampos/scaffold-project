using AutoMapper;
using Portal.Data.Repositories;
using Portal.Domain.Interfaces;
using System;
using System.Threading.Tasks;

namespace Portal.Data.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private ITurmaRepository _turmaRepository;
        private IEscolaRepository _escolaRepository;
        private readonly IMapper _mapper;
        public ApplicationContext DatabaseContext { get; private set; }

        public UnitOfWork(ApplicationContext databaseContext, IMapper mapper)
        {
            DatabaseContext = databaseContext;
            _mapper = mapper;
        }

        public async Task SaveChangesAsync()
        {
            try
            {
                await DatabaseContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public ITurmaRepository TurmaRepository
        {
            get
            {
                if (_turmaRepository == null)
                {
                    _turmaRepository = new TurmaRepository(DatabaseContext, _mapper);
                }
                return _turmaRepository;
            }
        }

        public IEscolaRepository EscolaRepository
        {
            get
            {
                if (_escolaRepository == null)
                {
                    _escolaRepository = new EscolaRepository(DatabaseContext, _mapper);
                }
                return _escolaRepository;
            }
        }
    }
}
