using hmzBackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace hmzBackEnd.Data
{
    public class AppDBContext : DbContext
    {   
        public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<UserModel>()
           .HasIndex(u => u.Email)
           .IsUnique();
        }
        public DbSet<UserModel> Users { get; set; }
        
    }
}
