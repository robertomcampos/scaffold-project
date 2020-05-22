﻿using Portal.Data.Repositories;
using System;
using System.Threading.Tasks;

namespace Portal.Data.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private ITurmaRepository _turmaRepository;
        private IEscolaRepository _escolaRepository;
        public ApplicationContext DatabaseContext { get; private set; }

        public UnitOfWork(ApplicationContext databaseContext)
        {
            DatabaseContext = databaseContext;
        }

        public async Task SaveChangesAsync()
        {
            try
            {
                await DatabaseContext.SaveChangesAsync();
            }
            catch(Exception ex)
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
                    _turmaRepository = new TurmaRepository(DatabaseContext);
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
                    _escolaRepository = new EscolaRepository(DatabaseContext);
                }
                return _escolaRepository;
            }
        }
     }
}