// let canvas = document.getElementById("snake");
// let context = canvas.getContext("2d");
// let box = 32;
// let snake = [];
// snake[0] = {
//     x: 8 * box,
//     y: 8 * box
// }
// let direction = "right";
// let food = {
//     x: Math.floor(Math.random() * 15 + 1) * box,
//     y: Math.floor(Math.random() * 15 + 1) * box
// }

// let score = 0;
// let targetX = 0  
// let targetY = 0

// function criarBG() {
//     context.fillStyle = "lightgreen";
//     context.fillRect(0, 0, 16 * box, 16 * box);
// }

// function criarCobrinha() {
//     for (i = 0; i < snake.length; i++) {
//         context.fillStyle = "green";
//         context.fillRect(snake[i].x, snake[i].y, box, box);
//     }
// }

// function drawFood() {
//     context.fillStyle = "red";
//     context.fillRect(food.x, food.y, box, box);
// }


// document.addEventListener('keydown', update);

// function update(event) {
//     if (event.keyCode == 37 && direction != "right") direction = "left";
//     if (event.keyCode == 38 && direction != "down") direction = "up";
//     if (event.keyCode == 39 && direction != "left") direction = "right";
//     if (event.keyCode == 40 && direction != "up") direction = "down";
// }

// function iniciarJogo() {
//     // if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
//     // if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box; 7
//     // if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
//     // if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

//     // for (i = 1; i < snake.length; i++) {
//     //     if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
//     //         clearInterval(jogo);
//     //         alert('Game Over. Pontuação: ' + score);
//     //     }
//     // }
//     if (
//         (snake[0].x > 15 * box && direction == "right") ||
//         (snake[0].x < 0 && direction == "left") ||
//         (snake[0].y > 15 * box && direction == "down") ||
//         (snake[0].y < 0 && direction == "up") ||
//         (snake[0].x === targetX && snake[0].y === targetY)
//     ) {
//         clearInterval(jogo);
//         alert('Game Over. Pontuação: ' + score);
//     }

//     for (let i = 1; i < snake.length; i++) {
//         if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
//             clearInterval(jogo);
//             alert('Game Over. Pontuação: ' + score);
//         }
//     }
//     criarBG();
//     criarCobrinha();
//     drawFood();



//     let snakeX = snake[0].x;
//     let snakeY = snake[0].y;


//     if (direction == "right") snakeX += box;
//     if (direction == "left") snakeX -= box;
//     if (direction == "up") snakeY -= box;
//     if (direction == "down") snakeY += box;

//     if (snakeX != food.x || snakeY != food.y) {
//         snake.pop();
//     } else {
//         food.x = Math.floor(Math.random() * 15 + 1) * box;
//         food.y = Math.floor(Math.random() * 15 + 1) * box;

//     }

//     let newHead = {
//         x: snakeX,
//         y: snakeY
//     }

//     snake.unshift(newHead);

//     context.fillStyle = "black";
//     context.font = "20px Arial";
//     context.fillText("Pontuação: " + score, box, box);
// }

// let jogo = setInterval(iniciarJogo, 160);

    let canvas = document.getElementById("snake");
    let context = canvas.getContext("2d");
    let box = 32;
    let snake = [];
    snake[0] = {
        x: 8 * box,
        y: 8 * box
    }
    let direction = "right";
    let food = {
        x: Math.floor(Math.random() * 15 + 1) * box,
        y: Math.floor(Math.random() * 15 + 1) * box
    }

    let score = 0;
    let jogo;

    document.addEventListener('keydown', update);

    function update(event) {
        if (event.keyCode == 37 && direction != "right") direction = "left";
        if (event.keyCode == 38 && direction != "down") direction = "up";
        if (event.keyCode == 39 && direction != "left") direction = "right";
        if (event.keyCode == 40 && direction != "up") direction = "down";
    }

    function criarBG() {
        context.fillStyle = "lightgreen";
        context.fillRect(0, 0, 16 * box, 16 * box);
    }

    function criarCobrinha() {
        for (let i = 0; i < snake.length; i++) {
            context.fillStyle = "green";
            context.fillRect(snake[i].x, snake[i].y, box, box);
        }
    }

    function drawFood() {
        context.fillStyle = "red";
        context.fillRect(food.x, food.y, box, box);
    }

    function iniciarJogo() {
        jogo = setInterval(() => {
            if (
                (snake[0].x > 15 * box && direction == "right") ||
                (snake[0].x < 0 && direction == "left") ||
                (snake[0].y > 15 * box && direction == "down") ||
                (snake[0].y < 0 && direction == "up")
            ) {
                clearInterval(jogo);
                alert('Game Over. Pontuação: ' + score);
            }

            for (let i = 1; i < snake.length; i++) {
                if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
                    clearInterval(jogo);
                    alert('Game Over. Pontuação: ' + score);
                }
            }

            criarBG();
            criarCobrinha();
            drawFood();

            let snakeX = snake[0].x;
            let snakeY = snake[0].y;

            if (direction == "right") snakeX += box;
            if (direction == "left") snakeX -= box;
            if (direction == "up") snakeY -= box;
            if (direction == "down") snakeY += box;

            if (snakeX != food.x || snakeY != food.y) {
                snake.pop();
            } else {
                food.x = Math.floor(Math.random() * 15 + 1) * box;
                food.y = Math.floor(Math.random() * 15 + 1) * box;
                score++;
            }

            let newHead = {
                x: snakeX,
                y: snakeY
            }

            snake.unshift(newHead);

            context.fillStyle = "black";
            context.font = "20px Arial";
            context.fillText("Pontuação: " + score, box, box);
        }, 160);
    }

    document.getElementById("startButton").addEventListener("click", () => {
        clearInterval(jogo);
        snake = [];
        snake[0] = {
            x: 8 * box,
            y: 8 * box
        };
        direction = "right";
        score = 0;
        iniciarJogo();
    });
