using Microsoft.AspNetCore.Http;
using Portal.Data.Integration.DTO;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace Portal.Data.Integration.Stores
{
    public class AlunoGetStore : IAlunoGetStore
    {
        private readonly HttpClient _httpClient;

        public AlunoGetStore(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<IEnumerable<AlunoPortalResponse>> Get()
        {
            var response = await _httpClient.PostAsync("aluno", null);

            response.EnsureSuccessStatusCode();

            using var responseStream = await response.Content.ReadAsStreamAsync();
            return await JsonSerializer.DeserializeAsync
                <IEnumerable<AlunoPortalResponse>>(responseStream);
        }
    }
}
