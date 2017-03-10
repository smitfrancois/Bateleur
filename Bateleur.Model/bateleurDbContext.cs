using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bateleur.Model
{
    public class BateleurDbContext:DbContext
    {
        public BateleurDbContext() : base()
        {
            Database.SetInitializer<BateleurDbContext>(new DropCreateDatabaseIfModelChanges<BateleurDbContext>());
            Database.Initialize(true);
        }
    }
}
