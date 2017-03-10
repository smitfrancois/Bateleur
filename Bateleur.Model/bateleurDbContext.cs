using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bateleur.Model.Domain;

namespace Bateleur.Model
{
    public class BateleurDbContext:DbContext
    {
        public BateleurDbContext() : base()
        {
            Database.SetInitializer<BateleurDbContext>(new DropCreateDatabaseIfModelChanges<BateleurDbContext>());
            Database.Initialize(true);
        }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new UserMap());
            //base.OnModelCreating(modelBuilder);
        }
    }
}
