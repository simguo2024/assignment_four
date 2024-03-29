const sentences = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "A dubious friend may be an enemy in camouflage.",
    "A faithful friend is a strong defense.",
    "A feather in the hand is better than a bird in the air. (2)",
    "A fresh start will put you on your way.",
    "A friend asks only for your time not your money.",
    "A friend is a present you give yourself.",
    "A gambler not only will lose what he has, but also will lose what he doesn’t have.",
    "A golden egg of opportunity falls into your lap this month.",
    "A good friendship is often more important than a passionate romance.",
    "A good time to finish up old tasks. (2)",
    "A hunch is creativity trying to tell you something."
];

const dishes = [
    "Caesar Salad",
    "Margherita Pizza",
    "Pad Thai",
    "Sushi Rolls",
    "Vegetable Stir Fry",
    "Quiche Lorraine",
    "Fish Tacos",
    "Lamb Biryani",
    "Peking Duck",
    "Ratatouille",
    "Paella",
    "Banh Mi Sandwich",
    "Falafel Wrap",
    "Tom Yum Soup",
    "Pulled Pork Burger",
    "Tofu Teriyaki",
];

const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];


module.exports = {
    getCompliment: (req, res) => {
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        let randomIndex = Math.floor(Math.random() * sentences.length);
        let randomSentence = sentences[randomIndex];
        res.status(200).send(randomSentence);
    },

    getTime: (req, res) => {
        res.status(200).send({ time: new Date().toLocaleTimeString() });
    },


    getDish: (req, res) => {
        const randomDishes = getRandomElements(dishes, 2);
        res.status(200).send(randomDishes);
    },
    
    getMultipleFortunes: (req, res) => {
        const { name, count } = req.body;
        const defaultName = name || "User";
        const seleteced = [];
        for (let i = 0; i <= count; i++) {
            let res = sentences[Math.floor(Math.random() * sentences.length)];
            seleteced.push({ defaultName, fortune: res });
        }
        res.status(200).json(seleteced);
    }
}


function getRandomElements(arr, count) {
    let result = new Set();
    while (result.size < count) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        result.add(arr[randomIndex]);
    }
    return [...result];
}

