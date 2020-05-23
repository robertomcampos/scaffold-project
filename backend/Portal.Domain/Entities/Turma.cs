using System;
using System.ComponentModel.DataAnnotations;

namespace Portal.Domain.Entities
{
    public class Turma: BaseEntity
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public Guid EscolaId { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        public Escola Escola { get; set; }
        public Turma()
        {
            CreatedDate = DateTime.UtcNow;
        }
    }
}

