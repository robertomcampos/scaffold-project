using FluentValidation;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using System;

namespace Portal.Infrastructure
{
    public class ApiExceptionFilter : ExceptionFilterAttribute
    {
        public object ExceptionToResult { get; private set; }

        public override void OnException(ExceptionContext context)
        {
            var logger = GetLogger(context);

            LogException(context.Exception, logger);

            if (context.Result != null)
                return;

            switch (context.Exception)
            {
                case ArgumentNullException ae:
                    context.Result = new ObjectResult($"Attribute: {ae.ParamName} is mandatory");
                    context.HttpContext.Response.StatusCode = StatusCodes.Status400BadRequest;
                    break;
                case ValidationException ve:
                    context.Result = new ObjectResult(new FormErrorInfo(ve.Errors));
                    context.HttpContext.Response.StatusCode = StatusCodes.Status400BadRequest;
                    break;
                default:
                    context.Result = new ObjectResult($"Unexpected Error details: {context.Exception.Message}");
                    context.HttpContext.Response.StatusCode = StatusCodes.Status500InternalServerError;
                    break;
            }
        }

        private void LogException(Exception ex, ILogger logger) => logger?.Log(LogLevel.Error, ex.Message);
        private ILogger GetLogger(ExceptionContext context)
        {
            var loggerFactory = (ILoggerFactory)context.HttpContext.RequestServices.GetService(typeof(ILoggerFactory));
            Type controllerType = ((Microsoft.AspNetCore.Mvc.Controllers.ControllerActionDescriptor)context.ActionDescriptor).ControllerTypeInfo.UnderlyingSystemType;
            return loggerFactory.CreateLogger(controllerType);
        }
    }
}
