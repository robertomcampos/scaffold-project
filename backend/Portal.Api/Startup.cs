using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Portal.Infrastructure;
using Portal.Data;
using Portal.Facades.Initialization;
using Portal.Application.Initialization;
using Portal.Services.Initialization;
using Portal.Api.Infrastructure.AutoMapper;

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
            services.AddDbContext<ApplicationContext>(opts =>
                opts.UseNpgsql(Configuration.GetConnectionString("postgreConnection"), b => b.MigrationsAssembly("Portal.Data")));

            services.AddCors(options =>
            {
                options.AddPolicy(name: MyCorsPolicy,
                                  builder =>
                                  {
                                      builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
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
        }
    }
}
