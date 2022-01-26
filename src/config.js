require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "ODg3OTM4NTQ4NDk2NDgyMzA1.YULbNw.CKS5Vg7RK7IzDFYdUSyEF6y4HwM",  // your bot token
    prefix: process.env.PREFIX || "+", // bot prefix
    ownerID: process.env.OWNERID || "767755808008044574", //your discord id
    mongourl: "mongodb+srv://tgfukausik:kausik21@cluster0.jk1m5.mongodb.net/",
  embedColor: process.env.COlOR || "#00A4CCFF", // embed colour
    logs: process.env.LOGS || "918163587539824641", // channel id for guild create and delete logs 

   nodes: [
    {
      host: process.env.NODE_HOST || "fsn.core-02.blare.host",
      identifer: process.env.NODE_ID || "Atom's Music 1",
      port: parseInt(process.env.NODE_PORT || "30789"),
      password: process.env.NODE_PASSWORD || "lasagna",
      secure: parseBoolean(process.env.NODE_SECURE || "false"),

    },
    {
      host: process.env.NODE_HOST || "lavalink.eu",
      identifer: process.env.NODE_ID || "Atom's Music 1",
      port: parseInt(process.env.NODE_PORT || "2333"),
      password: process.env.NODE_PASSWORD || "Raccoon",
      secure: parseBoolean(process.env.NODE_SECURE || "false"),

    }
       
  ],

}

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
