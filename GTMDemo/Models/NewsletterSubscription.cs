using System.ComponentModel.DataAnnotations;

namespace GTMDemo.Models;

public class NewsletterSubscription
{
    [Required(ErrorMessage = "กรุณาระบุชื่อ")]
    [Display(Name = "ชื่อ")]
    public string Name { get; set; } = string.Empty;
    
    [Required(ErrorMessage = "กรุณาระบุอีเมล")]
    [EmailAddress(ErrorMessage = "กรุณาระบุอีเมลที่ถูกต้อง")]
    [Display(Name = "อีเมล")]
    public string Email { get; set; } = string.Empty;
}