using AutoMapper;
using Portal.Domain.DTO;
using Portal.Domain.Entities;

namespace Portal.Api.Infrastructure.AutoMapper
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public DomainToViewModelMappingProfile()
        {
            CreateMap<Escola, EscolaResponse>();
            CreateMap<Turma, TurmaResponse>();
        }
    }
}
