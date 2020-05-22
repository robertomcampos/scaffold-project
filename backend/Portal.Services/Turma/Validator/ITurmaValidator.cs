using FluentValidation.Results;
using Portal.DTO;

namespace Portal.Services.Turma.Validator
{
    public interface ITurmaValidator
    {
        ValidationResult Validate(TurmaRequest escola);
    }
}
