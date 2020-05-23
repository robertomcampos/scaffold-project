using AutoMapper;
using Microsoft.Extensions.DependencyInjection;

namespace Portal.Api.Infrastructure.AutoMapper
{
    public static class DependencyInjectionServices
    {
        public static void AddAutoMapperDependencies(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(DomainToViewModelMappingProfile), typeof(ViewModelToDomainMappingProfile));
        }
    }
}
