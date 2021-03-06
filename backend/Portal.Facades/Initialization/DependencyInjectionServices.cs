﻿using Microsoft.Extensions.DependencyInjection;
using Portal.Facades.Aluno;
using Portal.Facades.Escola;
using Portal.Facades.Turma;

namespace Portal.Facades.Initialization
{
    public static class DependencyInjectionServices
    {
        public static void AddFacadesDependencies(this IServiceCollection services)
        {
            services.AddTransient<IEscolaGetPaginateFacade, EscolaGetPaginateFacade>();
            services.AddTransient<IEscolaGetFacade, EscolaGetFacade>();
            services.AddTransient<IEscolaCreateFacade, EscolaCreateFacade>();
            services.AddTransient<IEscolaRemoveFacade, EscolaRemoveFacade>();
            services.AddTransient<IEscolaRemoveAllFacade, EscolaRemoveAllFacade>();
            services.AddTransient<ITurmaGetPaginateFacade, TurmaGetPaginateFacade>();
            services.AddTransient<ITurmaCreateFacade, TurmaCreateFacade>();
            services.AddTransient<ITurmaGetFacade, TurmaGetFacade>();
            services.AddTransient<IAlunoGetFacade, AlunoGetFacade>();
        }
    }
}
