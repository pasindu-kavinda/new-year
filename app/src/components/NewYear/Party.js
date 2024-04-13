import party from "party-js";

var timer;

const getRandomTime = () => {
    return Math.floor(Math.random() * (6000 - 1000 + 1)) + 1000;
};

function enjoyParty() {
    confettiEffect();
    clearInterval(timer);
    timer = setInterval(enjoyParty, getRandomTime());
}

const confettiEffect = () => {
    party.confetti(document.querySelector(".party"), {
        count: party.variation.range(30, 60),
        size: party.variation.range(0.8, 1.2),
    });
}

const initializeParty = () => {
    timer = setInterval(enjoyParty, 1000);
};

export { initializeParty };