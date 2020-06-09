using FluentValidation;
using Portal.Domain.DTO;

namespace Portal.Services.Escola.Validator
{
    public class EscolaValidator : AbstractValidator<EscolaRequest>, IEscolaValidator
    {
        public EscolaValidator()
        {
            RuleFor(p => p.Name)
                .NotEmpty();

            RuleFor(p => p.Email)
                .NotEmpty()
                .EmailAddress();

            RuleFor(p => p.Address).NotEmpty();
        }
    }
}

