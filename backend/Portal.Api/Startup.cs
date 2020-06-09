using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Portal.Api.Infrastructure.AutoMapper;
using Portal.Application.Initialization;
using Portal.Data;
using Portal.Data.Integration.Initialization;
using Portal.Facades.Initialization;
using Portal.Infrastructure;
using Portal.Services.Initialization;
using System.IO;

namespace Portal
{
    public class Startup
    {
        readonly string MyCorsPolicy = "_myCorsPolicy";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddHttpClient();

            services.AddDbContext<ApplicationContext>(opts =>
                opts.UseNpgsql(Configuration.GetConnectionString("postgreConnection"), b => b.MigrationsAssembly("Portal.Data")));

            services.AddCors(options =>
            {
                options.AddPolicy(name: MyCorsPolicy,
                                  builder =>
                                  {
                                      builder
                                      .AllowAnyMethod()
                                      .AllowAnyHeader()
                                      .SetIsOriginAllowed(origin => true)
                                      .AllowCredentials();
                                  });
            });

            services.AddOptions();
            services.AddControllers(options =>
            {
                options.Filters.Add<ApiExceptionFilter>();
                options.Filters.Add<ApiLoggingFilter>();
            });

            services.AddFacadesDependencies();
            services.AddServicesDependencies();
            services.AddAutoMapperDependencies();
            services.AddDataDependencies();
            services.AddIntegrationDependencies();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ApplicationContext dataContext, ILoggerFactory loggerFactory)
        {
            dataContext.Database.Migrate();

            loggerFactory.AddFile(Configuration.GetSection("Logging:FileDestination").Value);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseCors(MyCorsPolicy);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.Map("/Projeto", staticApp =>
            {
                staticApp.UseStaticFiles();
                staticApp.UseDefaultFiles();
                // Enables deep linking for angular app (maps any unresolved request to index.html)
                staticApp.UseRouter(r =>
                   r.MapGet("{*url}",
                       context =>
                       {
                           context.Response.ContentType = "text/html";
                           return context.Response.SendFileAsync(Path.Combine(env.WebRootPath, "index.html"));
                       })
               );
            });
        }
    }
}
