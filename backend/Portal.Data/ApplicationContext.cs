using Microsoft.EntityFrameworkCore;
using Portal.Entities;

namespace Portal.Data
{ 
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
        }

        public DbSet<Escola> Escolas { get; set; }
        public DbSet<Turma> Turmas { get; set; }
    }
}
