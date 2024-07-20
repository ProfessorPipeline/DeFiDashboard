using Microsoft.EntityFrameworkCore;

namespace CryptoDashboard.Models
{
    public class CryptoPortfolioContext : DbContext
    {
        public CryptoPortfolioContext(DbContextOptions<CryptoPortfolioContext> options)
            : base(options)
        {
        }

        public DbSet<CryptoAsset> CryptoAssets { get; set; }
    }

    public class CryptoAsset
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Symbol { get; set; }
        public decimal Amount { get; set; }
    }
}
