using AutoMapper;
using FluentValidation;
using Portal.Domain.DTO;
using Portal.Domain.Interfaces;
using Portal.Services.Turma.Validator;
using System.Threading.Tasks;
using TurmaEntity = Portal.Domain.Entities.Turma;

namespace Portal.Services.Turma
{
    public class TurmaInsertService : ITurmaInsertService
    {
        private readonly IMapper _mapper;
        private readonly ITurmaRepository _turmaRepository;
        private readonly ITurmaValidator _validator;

        public TurmaInsertService(ITurmaRepository turmaRepository, IMapper mapper, ITurmaValidator validator)
        {
            _turmaRepository = turmaRepository;
            _mapper = mapper;
            _validator = validator;
        }

        public async Task Insert(TurmaRequest request)
        {
            var results = _validator.Validate(request);

            if (!results.IsValid)
            {
                throw new ValidationException(results.Errors);
            }

            await _turmaRepository.InsertAsync(_mapper.Map<TurmaEntity>(request));
        }
    }
}
