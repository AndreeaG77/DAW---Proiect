using Microsoft.AspNetCore.Mvc;
using HttpGetAttribute = Microsoft.AspNetCore.Mvc.HttpGetAttribute;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace daw_bookstore.Controllers
{
    //[ApiController]
    [Route("api/[controller]")]
    [Controller]
    public class ClientsController : ControllerBase
    {
        private static List<Client> clients = new List<Client>
            {
                new Client {Id=1, FirstName = "Alex", LastName = "Ionescu" },
                new Client {Id = 2, FirstName = "Andrei", LastName = "Popescu" }
            };


        [HttpGet("")]

        public List<Client> Get()
        {
            return clients;
        }

        [HttpPost("fromBody")]

        public IActionResult AddWithFromBody([FromBody] Client client)
        {
            clients.Add(client);
            return Ok(clients);
        }

        [HttpPut("")]

        public IActionResult Update([FromBody] Client client)
        {
            var clientIndex = clients.FindIndex((Client _client) => _client.Id.Equals(client.Id));
            clients[clientIndex] = client;

            return Ok(clients);
        }

        [HttpDelete("")]

        public IActionResult Delete([FromBody] Client client)
        {
            var newClients = clients.Where((source, index) => source.Id != client.Id).ToArray();
            return Ok(newClients);
        }
        
    }
}