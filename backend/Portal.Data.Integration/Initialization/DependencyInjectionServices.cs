using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Portal.Data.Integration.Stores;
using System;

namespace Portal.Data.Integration.Initialization
{
    public static class DependencyInjectionServices
    {
        public static void AddIntegrationDependencies(this IServiceCollection services)
        {
            services.AddHttpContextAccessor();
            services.AddHttpClient<IAlunoGetStore, AlunoGetStore>(client =>
            {
                var serviceProvider = services.BuildServiceProvider();
                var httpContextAccessor = serviceProvider.GetService<IHttpContextAccessor>();
                var requestVerificationToken = httpContextAccessor.HttpContext.Request.Cookies["__RequestVerificationToken"];
                var portalSessionID = httpContextAccessor.HttpContext.Request.Cookies["PortalEleva_DEV_SessionID"];

                client.DefaultRequestHeaders.Add("__RequestVerificationToken", requestVerificationToken);
                client.DefaultRequestHeaders.Add("Origin", "https://localhost:44326/");
                client.DefaultRequestHeaders.Add("PortalEleva_DEV_SessionID", portalSessionID);

                client.BaseAddress = new Uri("https://localhost:44326/");
            });
        }
    }
}
