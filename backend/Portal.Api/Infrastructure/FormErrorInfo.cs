using FluentValidation.Results;
using System.Collections.Generic;
using System.Linq;

namespace Portal.Infrastructure
{
    public class FormErrorInfo
    {
        public FormErrorInfo(IEnumerable<ValidationFailure> messages)
        {
            Messages = messages.Select(x => x.ErrorMessage);
        }
        public IEnumerable<string> Messages { get; }
    }
}
