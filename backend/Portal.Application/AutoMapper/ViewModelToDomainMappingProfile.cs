using AutoMapper;
using Portal.Entities;
using Portal.DTO;

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
