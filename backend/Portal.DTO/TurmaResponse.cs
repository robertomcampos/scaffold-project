using Portal.Entities;
using System;

namespace Portal.DTO
{
    public class TurmaResponse
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime CreatedDate { get; set; }
        public Escola Escola { get; set; }
    }
}
