using Microsoft.AspNetCore.Mvc;
using CryptoDashboard.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class CryptoAssetsController : ControllerBase
{
    private readonly CryptoPortfolioContext _context;

    public CryptoAssetsController(CryptoPortfolioContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<CryptoAsset>>> GetCryptoAssets()
    {
        return await _context.CryptoAssets.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<CryptoAsset>> PostCryptoAsset(CryptoAsset asset)
    {
        _context.CryptoAssets.Add(asset);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetCryptoAssets), new { id = asset.Id }, asset);
    }
}
