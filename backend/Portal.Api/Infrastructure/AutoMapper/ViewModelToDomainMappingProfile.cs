using AutoMapper;
using Portal.Domain.DTO;
using Portal.Domain.Entities;

namespace Portal.Api.Infrastructure.AutoMapper
{
    public class ViewModelToDomainMappingProfile : Profile
    {
        public ViewModelToDomainMappingProfile()
        {
            CreateMap<EscolaRequest, Escola>();
            CreateMap<TurmaRequest, Turma>();
        }
    }
}
