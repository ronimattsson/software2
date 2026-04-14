function add_vote() {
    for (let i = 0; i < candidate_amount; i++) {
        if (candidate === candidates[i].name) {
            candidates[i].votes += 1;
        }
    }
}

//Store candidates to list
candidate_amount = parseInt(prompt("How many candidates?"));
let candidates = [];
for (let i = 0; i < candidate_amount; i++) {
    let candidate = prompt(`Name for candidate ${i}`);
    candidates.push({name: candidate, votes: 0});
}

//Gather the votes
voter_amount = parseInt(prompt("How many voters?"));
for (let i = 0; i < voter_amount; i++) {
    candidate = prompt(`Who will voter ${i} vote for?`);
    add_vote()
}

candidates.sort((a, b) => {
    console.log(a, b);
    return a - b;
});

console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes - candidates[1].votes} votes.`)
console.log("results:")
for (let i = 0; i < candidate_amount; i++) {
    console.log(`${candidates[i].name}: ${candidates[i].votes} votes`)
}