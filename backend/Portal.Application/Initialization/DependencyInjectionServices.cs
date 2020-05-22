using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using Portal.Application.AutoMapper;

namespace Portal.Application.Initialization
{
    public static class DependencyInjectionServices
    {
        public static void AddApplicationDependencies(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(DomainToViewModelMappingProfile), typeof(ViewModelToDomainMappingProfile));
        }
    }
}
