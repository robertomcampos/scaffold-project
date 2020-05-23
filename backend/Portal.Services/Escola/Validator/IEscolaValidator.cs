using FluentValidation.Results;
using Portal.Domain.DTO;

namespace Portal.Services.Escola.Validator
{
    public interface IEscolaValidator
    {
        ValidationResult Validate(EscolaRequest escola);
    }
}
