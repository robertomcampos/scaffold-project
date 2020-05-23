using Microsoft.Extensions.DependencyInjection;
using Portal.Data.Repositories;
using Portal.Data.UnitOfWork;
using Portal.Domain.Interfaces;

namespace Portal.Application.Initialization
{
    public static class DependencyInjectionServices
    {
        public static void AddDataDependencies(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<ITurmaRepository, TurmaRepository>();
            services.AddScoped<IEscolaRepository, EscolaRepository>();
        }
    }
}
