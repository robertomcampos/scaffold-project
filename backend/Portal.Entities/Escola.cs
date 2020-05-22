using System;
using System.ComponentModel.DataAnnotations;

namespace Portal.Entities
{
    public class Escola
    {
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }

        public string Test { get; set; }

        public Escola()
        {
            CreatedDate = DateTime.UtcNow;
        }
    }
}
