function initializeGame(atkOrDef) {
    let score = 0;
    for (let i = 0; i < 3; i++) {
        if (atkOrDef === 1) {
            let damage = Math.floor(Math.random() * 10) + 1;
            if (damage >= 5) {
                score =score+ 1;
            } else {
                score =score- 1;
            }
        } else {
            console.log("nothing happened");
        }
    }
    return {
        score: score,
        result: score > 0 ? "Winner" : "Loser"
    };
}

const gameResult = initializeGame(1);
console.log(gameResult);