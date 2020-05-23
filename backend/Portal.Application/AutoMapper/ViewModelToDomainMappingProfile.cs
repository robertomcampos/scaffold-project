using AutoMapper;
using Portal.Domain.DTO;
using Portal.Domain.Entities;

namespace Portal.Application.AutoMapper
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
