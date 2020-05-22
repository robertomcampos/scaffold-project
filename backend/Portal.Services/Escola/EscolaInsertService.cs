using AutoMapper;
using FluentValidation;
using FluentValidation.Results;
using Portal.Data.UnitOfWork;
using Portal.DTO;
using Portal.Services.Escola.Validator;
using EscolaEntity = Portal.Entities.Escola ;
using System.Threading.Tasks;

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
