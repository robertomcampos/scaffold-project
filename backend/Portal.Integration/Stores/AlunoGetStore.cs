using Microsoft.AspNetCore.Http;
using Portal.Domain.DTO;
using Portal.Integration.DTO;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace Portal.Integration.Stores
{
    public class AlunoGetStore : IAlunoGetStore
    {
        private readonly HttpClient _httpClient;

        public AlunoGetStore(HttpClient httpClient, IHttpContextAccessor httpAccessor)
        {
            _httpClient = httpClient;
            _httpClient.DefaultRequestHeaders.Add("__RequestVerificationToken", httpAccessor.HttpContext.Request.Cookies["__RequestVerificationToken"]);
            _httpClient.BaseAddress = new Uri("https://localhost:44326/");
        }

        public async Task<IEnumerable<AlunoPortalResponse>> Get()
        {
            var response = await _httpClient.GetAsync("aluno");

            response.EnsureSuccessStatusCode();

            using var responseStream = await response.Content.ReadAsStreamAsync();
            return await JsonSerializer.DeserializeAsync
                <IEnumerable<AlunoPortalResponse>>(responseStream);
        }
    }
}
