using AutoMapper;
using Portal.Domain.DTO;
using Portal.Domain.Entities;

namespace Portal.Application.AutoMapper
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
