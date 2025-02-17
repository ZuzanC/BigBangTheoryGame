const fs = require("fs");
const http = require("http");

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);

  switch (url.pathname) {
    case "/":
      if (request.method == "GET") {
        const name = url.searchParams.get("name");
        console.log(name);
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("index.html").pipe(response);
        break;
      } else if (request.method == "POST") {
        handlePostResponse(request, response);
        break;
      }
    default:
      response.writeHead(404, { "Content-type": "text/html" });
      fs.createReadStream("404.html").pipe(response);
      break;
  }
});

server.listen(4001, () => {
  console.log(server.address().port);
});

function handlePostResponse(request, response) {
  request.setEncoding("utf8");

  let body = "";
  request.on("data", function (chunk) {
    body += chunk;
  });

  request.on("end", function () {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomChoice = choices[Math.floor(Math.random() * 5)];

    const choice = body;

    let message;
    let winner;

    const tied = `We tied! I also chose ${randomChoice}.`;
    const victory = `Ugh, you won! I chose ${randomChoice}.`;
    const defeat = `Ha ha! You lost. I chose ${randomChoice}.`;

    if (choice === randomChoice) {
      message = tied;
    } else if (
      (choice === "rock" && randomChoice === "paper") ||
      (choice === "paper" && randomChoice === "scissors") ||
      (choice === "scissors" && randomChoice === "rock") ||
      (choice === "lizard" && randomChoice === "rock") ||
      (choice === "spock" && randomChoice === "lizard") ||
      (choice === "scissors" && randomChoice === "spock") ||
      (choice === "lizard" && randomChoice === "scissors") ||
      (choice === "paper" && randomChoice === "lizard") ||
      (choice === "spock" && randomChoice === "paper") ||
      (choice === "rock" && randomChoice === "spock")
    ) {
      message = defeat;
      winner = "PC";
    } else {
      message = victory;
      winner = "user";
    }
    response.writeHead(200, { "Content-Type": "application/json" });

    const responseData = {
      message: message,
      winner: winner,
    };

    response.end(JSON.stringify(responseData));
  });
}
