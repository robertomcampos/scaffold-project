using AutoMapper;
using System;
using System.Threading.Tasks;

namespace Portal.Data.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationContext _databaseContext;

        public UnitOfWork(ApplicationContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public async Task SaveChangesAsync()
        {
            try
            {
                await _databaseContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
