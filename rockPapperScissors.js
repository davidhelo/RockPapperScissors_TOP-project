const computerPlay = function () {
    const options = ["Rock", "Papper", "Scissor"];
    console.log(Math.floor(Math.random() * 3));
    return options[Math.floor(Math.random() * 3)];
}