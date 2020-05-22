using System;
using System.ComponentModel.DataAnnotations;

namespace Portal.Entities
{
    public class Turma
    {
        public Guid Id { get; set; }
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

