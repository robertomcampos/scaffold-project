using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace Portal.Infrastructure
{
    public class ApiLoggingFilter : ActionFilterAttribute
    {
        public override Task OnResultExecutionAsync(ResultExecutingContext context, ResultExecutionDelegate next)
        {
            var logger = GetLogger(context);

            Log(context, logger);

            return base.OnResultExecutionAsync(context, next);
        }

        private void Log(ResultExecutingContext context, ILogger logger) => logger?.Log(LogLevel.Information, context.HttpContext.User.Identity.Name);
        private ILogger GetLogger(ResultExecutingContext context)
        {
            var loggerFactory = (ILoggerFactory)context.HttpContext.RequestServices.GetService(typeof(ILoggerFactory));
            Type controllerType = ((Microsoft.AspNetCore.Mvc.Controllers.ControllerActionDescriptor)context.ActionDescriptor).ControllerTypeInfo.UnderlyingSystemType;
            return loggerFactory.CreateLogger(controllerType);
        }
    }
}
