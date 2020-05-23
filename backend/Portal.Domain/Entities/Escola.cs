using System;
using System.ComponentModel.DataAnnotations;

namespace Portal.Domain.Entities
{
    public class Escola: BaseEntity
    {
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
