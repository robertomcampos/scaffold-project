using Microsoft.Extensions.DependencyInjection;
using Portal.Data.UnitOfWork;

namespace Portal.Application.Initialization
{
    public static class DependencyInjectionServices
    {
        public static void AddDataDependencies(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWork, UnitOfWork>();
        }
    }
}
