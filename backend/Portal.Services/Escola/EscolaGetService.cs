using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Portal.Application.Extension;
using Portal.Data.Repositories.Core;
using Portal.Data.UnitOfWork;
using Portal.Entities;
using Portal.DTO;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Portal.Services.Escola
{
    public class EscolaGetService : IEscolaGetService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public EscolaGetService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<IEnumerable<EscolaResponse>> Get()
        {
            return await _unitOfWork.EscolaRepository
                .Get()
                .ProjectTo<EscolaResponse>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }
    }
}
