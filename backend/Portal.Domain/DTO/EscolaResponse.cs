using System;

namespace Portal.Domain.DTO
{
    public class EscolaResponse
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
