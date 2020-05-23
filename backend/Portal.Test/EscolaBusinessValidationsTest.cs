using FluentValidation.Results;
using FluentValidation.TestHelper;
using Portal.Domain.DTO;
using Portal.Services.Escola.Validator;
using Xunit;

namespace Portal.Test
{
    public class EscolaBusinessValidationsTest
    {
        [Fact]
        public void ShouldHaveValidationErrorForEmptyName()
        {
            var validator = new EscolaInsertValidator();

            var escola = new EscolaRequest
            {
                Name = string.Empty
            };

            var validationResult = validator.TestValidate(escola);

            validationResult.ShouldHaveValidationErrorFor(x => x.Name);
        }

        [Fact]
        public void ShouldHaveSuccessForFilledName()
        {
            var validator = new EscolaInsertValidator();

            var escola = new EscolaRequest
            {
                Name = "Roberto@gmail.com"
            };

            var validationResult = validator.TestValidate(escola);
            validationResult.ShouldNotHaveValidationErrorFor(x => x.Name);
        }
    }
}
