using Portal.Domain.Entities;
using System;

namespace Portal.Domain.DTO
{
    public class TurmaResponse
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime CreatedDate { get; set; }
        public Escola Escola { get; set; }
    }
}
