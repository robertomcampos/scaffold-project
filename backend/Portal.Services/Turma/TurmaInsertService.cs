using AutoMapper;
using FluentValidation;
using Portal.Data.UnitOfWork;
using Portal.Domain.DTO;
using Portal.Services.Turma.Validator;
using System.Threading.Tasks;
using TurmaEntity = Portal.Domain.Entities.Turma;

namespace Portal.Services.Turma
{
    public class TurmaInsertService : ITurmaInsertService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly ITurmaValidator _validator;

        public TurmaInsertService(IUnitOfWork unitOfWork, IMapper mapper, ITurmaValidator validator)
        {
            _unitOfWork = unitOfWork;
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

            await _unitOfWork.TurmaRepository.InsertAsync(_mapper.Map<TurmaEntity>(request));
        }
    }
}
