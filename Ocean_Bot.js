const regex = /[a-zA-Z0-9]/g;
const str = ``;
let m;
const ocean_msg = "OCEAN MAN 🌊 😍 Take me by the hand ✋ lead me to the land that you understand 🙌 🌊 OCEAN MAN 🌊 😍 The voyage 🚲 to the corner of the 🌎 globe is a real trip 👌 🌊 OCEAN MAN 🌊 😍 The crust of a tan man 👳 imbibed by the sand 👍 Soaking up the 💦 thirst of the land 💯";
const Eris = require("eris");
var bot = new Eris("MzY3MTU0Mzk2NzU4NDA5MjI3.DL3SxQ.HJXpj-B7yFsko9j4lMRNhAVp8_s");
var counter = 0;

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.on("messageCreate", (msg) => {
    counter++;
    console.log(counter);
    if(counter === 5){
    	bot.createMessage(msg.channel.id, ocean_msg);
    	counter = 0;
    }
});

bot.connect(); // Get the bot to connect to Discord

