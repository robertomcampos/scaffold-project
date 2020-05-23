using AutoMapper;
using FluentValidation;
using FluentValidation.Results;
using Portal.Data.UnitOfWork;
using Portal.Domain.DTO;
using Portal.Domain.Interfaces;
using Portal.Services.Escola.Validator;
using System.Threading.Tasks;
using EscolaEntity = Portal.Domain.Entities.Escola;

namespace Portal.Services.Escola
{
    public class EscolaInsertService : IEscolaInsertService
    {
        private readonly IMapper _mapper;
        private readonly IEscolaRepository _escolaRepository;
        private readonly IEscolaValidator _validator;

        public EscolaInsertService(IEscolaRepository escolaRepository, IMapper mapper, IEscolaValidator validator)
        {
            _escolaRepository = escolaRepository;
            _mapper = mapper;
            _validator = validator;
        }

        public async Task Insert(EscolaRequest request)
        {
            ValidationResult results = _validator.Validate(request);

            if (!results.IsValid) {
                throw new ValidationException(results.Errors);
            }

            await _escolaRepository.InsertAsync(_mapper.Map<EscolaEntity>(request));
        }
    }
}
