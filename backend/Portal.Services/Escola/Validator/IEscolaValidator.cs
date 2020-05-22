using FluentValidation.Results;
using Portal.DTO;

namespace Portal.Services.Escola.Validator
{
    public interface IEscolaValidator
    {
        ValidationResult Validate(EscolaRequest escola);
    }
}
