using Microsoft.AspNetCore.Mvc;
using HttpGetAttribute = Microsoft.AspNetCore.Mvc.HttpGetAttribute;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace daw_bookstore.Controllers
{
    //[ApiController]
    [Route("api/[controller]")]
    [Controller]
    public class BooksController : ControllerBase
    {
        private static List<Book> books = new List<Book>
            {
                new Book {Id=1, Name = "Ion", Author = "Liviu Rebreanu" },
                new Book {Id = 2, Name = "Mara", Author = "Ioan Slavici" }
            };


        [HttpGet("")]

        public List<Book> Get()
        {
            return books;
        }

        [HttpPost("fromBody")]

        public IActionResult AddWithFromBody([FromBody] Book book)
        {
            books.Add(book);
            return Ok(books);
        }

        [HttpDelete("")]

        public IActionResult Delete([FromBody] Book book)
        {
            var newBooks = books.Where((source, index) => source.Id != book.Id).ToArray();
            return Ok(newBooks);
        }

    }
}
