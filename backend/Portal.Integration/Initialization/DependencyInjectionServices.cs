using Microsoft.Extensions.DependencyInjection;
using Portal.Integration.Stores;

namespace Portal.Integration.Initialization
{
    public static class DependencyInjectionServices
    {
        public static void AddIntegrationDependencies(this IServiceCollection services)
        {
            services.AddTransient<IAlunoGetStore, AlunoGetStore>();
        }
    }
}
