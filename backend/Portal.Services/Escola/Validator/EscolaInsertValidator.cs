using FluentValidation;
using Portal.Domain.DTO;

namespace Portal.Services.Escola.Validator
{
    public class EscolaInsertValidator : AbstractValidator<EscolaRequest>, IEscolaValidator
    {
        public EscolaInsertValidator()
        {
            RuleFor(p => p.Name)
                .NotEmpty()
                .MinimumLength(12)
                .EmailAddress();
            
            RuleFor(p => p.Address).NotEmpty();
        }
    }
}

