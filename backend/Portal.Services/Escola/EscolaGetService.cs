using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Portal.Data.UnitOfWork;
using Portal.Domain.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Portal.Services.Escola
{
    public class EscolaGetService : IEscolaGetService
    {
        private readonly IUnitOfWork _unitOfWork;

        public EscolaGetService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<IEnumerable<EscolaResponse>> Get()
        {
            return await _unitOfWork.EscolaRepository.Get();
        }
    }
}
