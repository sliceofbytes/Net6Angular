using System.ComponentModel.DataAnnotations;

namespace WisconsinCE.Controllers
{
    public class Document
    {
        public int Id { get; set; }

        [Required]
        public IFormFile File { get; set; }

        [Required]
        public string Name { get; set; }
    }
}
