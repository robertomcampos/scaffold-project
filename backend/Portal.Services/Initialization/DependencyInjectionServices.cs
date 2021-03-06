﻿using Microsoft.Extensions.DependencyInjection;
using Portal.Services.Aluno;
using Portal.Services.Escola;
using Portal.Services.Escola.Validator;
using Portal.Services.Turma;
using Portal.Services.Turma.Validator;

namespace Portal.Services.Initialization
{
    public static class DependencyInjectionServices
    {
        public static void AddServicesDependencies(this IServiceCollection services)
        {
            services.AddTransient<IEscolaGetPaginateService, EscolaGetPaginateService>();
            services.AddTransient<IEscolaGetService, EscolaGetService>();
            services.AddTransient<IEscolaCreateService, EscolaCreateService>();
            services.AddTransient<IEscolaValidator, EscolaValidator>();
            services.AddTransient<IEscolaRemoveService, EscolaRemoveService>();
            services.AddTransient<IEscolaRemoveAllService, EscolaRemoveAllService>();
            services.AddTransient<ITurmaGetPaginateService, TurmaGetPaginateService>();
            services.AddTransient<ITurmaCreateService, TurmaCreateService>();
            services.AddTransient<ITurmaValidator, TurmaValidator>();
            services.AddTransient<ITurmaGetService, TurmaGetService>();
            services.AddTransient<IAlunoGetService, AlunoGetService>();
        }
    }
}
