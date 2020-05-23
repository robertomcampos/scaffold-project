using AutoMapper;
using FluentValidation;
using FluentValidation.Results;
using Portal.Data.UnitOfWork;
using Portal.Domain.DTO;
using Portal.Services.Escola.Validator;
using System.Threading.Tasks;
using EscolaEntity = Portal.Domain.Entities.Escola;

namespace Portal.Services.Escola
{
    public class EscolaInsertService : IEscolaInsertService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IEscolaValidator _validator;

        public EscolaInsertService(IUnitOfWork unitOfWork, IMapper mapper, IEscolaValidator validator)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _validator = validator;
        }

        public async Task Insert(EscolaRequest request)
        {
            ValidationResult results = _validator.Validate(request);

            if (!results.IsValid) {
                throw new ValidationException(results.Errors);
            }

            await _unitOfWork.EscolaRepository.InsertAsync(_mapper.Map<EscolaEntity>(request));
        }
    }
}
