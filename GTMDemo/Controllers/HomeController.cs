using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using GTMDemo.Models;

namespace GTMDemo.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [HttpPost]
    public IActionResult SubscribeNewsletter(NewsletterSubscription model)
    {
        if (ModelState.IsValid)
        {
            _logger.LogInformation($"Newsletter subscription received: {model.Name}, {model.Email}");
            TempData["SubscriptionMessage"] = $"ขอบคุณ {model.Name} สำหรับการสมัครรับข่าวสาร";
            return RedirectToAction(nameof(Index));
        }
        
        return View("Index", model);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
