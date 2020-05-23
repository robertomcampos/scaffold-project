using FluentValidation.Results;
using Portal.Domain.DTO;

namespace Portal.Services.Turma.Validator
{
    public interface ITurmaValidator
    {
        ValidationResult Validate(TurmaRequest escola);
    }
}
