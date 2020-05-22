using AutoMapper;
using Portal.Data.UnitOfWork;
using Portal.DTO;
using System.Threading.Tasks;
using TurmaEntity = Portal.Entities.Turma;

namespace Portal.Services.Turma
{
    public class TurmaInsertService : ITurmaInsertService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public TurmaInsertService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task Insert(TurmaRequest request)
        {
            await _unitOfWork.TurmaRepository.InsertAsync(_mapper.Map<TurmaEntity>(request));
        }
    }
}
