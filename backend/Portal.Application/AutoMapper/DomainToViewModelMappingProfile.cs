using AutoMapper;
using Portal.Entities;
using Portal.DTO;

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
