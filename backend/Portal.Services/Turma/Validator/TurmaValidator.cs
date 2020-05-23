using FluentValidation;
using Portal.Domain.DTO;

namespace Portal.Services.Turma.Validator
{
    public class TurmaValidator : AbstractValidator<TurmaRequest>, ITurmaValidator
    {
        public TurmaValidator()
        {
            RuleFor(p => p.Name)
                .NotEmpty()
                .MinimumLength(12)
                .EmailAddress();
            
            RuleFor(p => p.EscolaId).NotEmpty();
        }
    }
}

