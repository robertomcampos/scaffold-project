using System;

namespace Portal.Domain.DTO 
{ 
    public class TurmaRequest
    {
        public string Name { get; set; }
        public Guid EscolaId { get; set; }
    }
}
