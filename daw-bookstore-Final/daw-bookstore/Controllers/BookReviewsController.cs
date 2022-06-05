using Microsoft.AspNetCore.Mvc;
using HttpGetAttribute = Microsoft.AspNetCore.Mvc.HttpGetAttribute;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace daw_bookstore.Controllers
{
    //[ApiController]
    [Route("api/[controller]")]
    [Controller]
    public class BookReviewsController : ControllerBase
    {
        private static List<BookReview> reviews = new List<BookReview>
            {
                new BookReview {Id=1, Review = "Interesting" },
                new BookReview {Id = 2, Review = "Catchy"}
            };


        [HttpGet("")]

        public List<BookReview> Get()
        {
            return reviews;
        }

        [HttpPost("fromBody")]

        public IActionResult AddWithFromBody([FromBody] BookReview review)
        {
            reviews.Add(review);
            return Ok(reviews);
        }

        [HttpPut("")]

        public IActionResult Update([FromBody] BookReview review)
        {
            var reviewIndex = reviews.FindIndex((BookReview _review) => _review.Id.Equals(review.Id));
            reviews[reviewIndex] = review;

            return Ok(reviews);
        }

        [HttpDelete("")]

        public IActionResult Delete([FromBody] BookReview review)
        {
            var newReviews = reviews.Where((source, index) => source.Id != review.Id).ToArray();
            return Ok(newReviews);
        }

    }
}