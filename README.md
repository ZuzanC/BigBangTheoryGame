# BingBangTheoryGame

Rock, Paper, Scissors, Lizard, Spock is an extended version of the classic "Rock, Paper, Scissors" game, made popular by **The Big Bang Theory**. 
In this version, two players (human vs. computer) choose one of five options: **Rock, Paper, Scissors, Lizard,** or **Spock**. The game compares the player's choice against the computer's random selection and determines the winner based on a set of rules. The objective is to outsmart the computer and win as many rounds as possible. The score is tracked, and the counters reset when the page is reloaded.

Game rules in diagram:

![image](https://github.com/user-attachments/assets/ece20bee-f6af-4e44-ab4d-27932af84bb8)

### 🚀 Technologies Used

- **Node.js**: The backend server is powered by **Node.js**, enabling efficient handling of HTTP requests and real-time game logic processing. With Node.js, the application can quickly respond to the player's choices, update game states, and send dynamic results.

- **HTML**: The frontend is built using **HTML** to structure the game interface, including buttons for each game choice (Rock, Paper, Scissors, Lizard, Spock) and a results display area.

- **Tailwind CSS**: For styling, **Tailwind CSS** is used to create a clean, responsive, and modern design. Tailwind's utility-first approach allows for rapid customization and flexibility in the layout and design of the game interface.

- **Session Management (Client-Side)**: **sessionStorage** is utilized to keep track of the user's score and the computer's score during the session. The counters reset whenever the user refreshes or closes the browser tab. 🔄
