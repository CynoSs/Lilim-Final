const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Llilim esta lista!");
});
    
 client.on("message", (message) => {
   if(message.content.startsWith("wenas")) {
     message.channel.send("(≧◡≦) que tenga buen dia!");
   }
 
 });

 client.on("message", (message) => {
  if(message.content.startsWith("hola")) {
    message.channel.send("Lilim lo acompañara para que no se sienta solo (ɔ◔‿◔)ɔ :hearts:!");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Buenos dias")) {
    message.channel.send("capitan, dejeme dormir un poco mas (￣。￣)");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("-lilim me quieres?")) {
    message.channel.send("nani,(・∀・ )");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Buenas noches")) {
    message.channel.send("descanse lo estare esperando mañana (	´ ▽ ` )ﾉ");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("F")) {
    message.channel.send("Que descanse en paz, lo extrañare   (n˘v˘•)¬");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("ya me voy cuidense")) {
    message.channel.send("no usted se queda,(; ・-・)―――――――C<-_-)");

}

});

client.on("message", (message) => {
  if(message.content.startsWith("-lilim eres puerca?")) {
    message.channel.send("nooooooooo,╭( ◕﹏◕ )╮");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("XD")) {
    message.channel.send("(─‿‿─)");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("xd")) {
    message.channel.send("le falto presionar el bloq mayuscula...hmmp ᕙ(⇀‸↼‶)ᕗ");
  }

});

client.on("message", message => {
  var Mensajes = ["(づ ᴖ ɜ ᴖ)づ", "chu♥(人´3｀)⌒♡", "(ง︡'-'︠)ง", "(╹◡╹)凸"];
  var aleatorio = Math.floor(Math.random()*(Mensajes.length));
  if(message.content.startsWith("-kisu?")){
    message.channel.send(Mensajes[aleatorio]);
}

});

client.on("message", message => {
  var Mensajes = ["(╯°□°)╯︵ ┻━┻", "(ㆆ_ㆆ)", "(ง︡'-'︠)ง"];
  var aleatorio = Math.floor(Math.random()*(Mensajes.length));
  if(message.content.startsWith("-lilim kisu?")){
    message.channel.send(Mensajes[aleatorio]);
}

});

client.on("message", (message) => {
  var Mensajes = ["Seria mejor que no te contestara（￣へ￣）" , "Alo? FBI", "Lo pensare ,aunque puede ser que me olvide (─‿‿─)"];
  var aleatorio = Math.floor(Math.random()*(Mensajes.length));
  if(message.content.startsWith("-lilim me amas?")){
    message.channel.send(Mensajes[aleatorio]);
  }

});

client.on("message", message => {
  var Mensajes = ["vamos a dormir", "todavia es temprano ╮(─▽─)╭", "quieres dejarme sola  (´ヘ｀;)", "vamos a jugar   (~￣▽￣)~", "creo que deberias dormir ᕙ(⇀‸↼‶)ᕗ"];
  var aleatorio = Math.floor(Math.random()*(Mensajes.length));
  if(message.content.startsWith("-lilim deberia irme a dormir?")){
    message.channel.send(Mensajes[aleatorio]);
}

});

client.on("message", message => {
  var Mensajes = [" (✿◠‿◠)", "dime dime me llamaste?", "Para que soy util..... baka   (╹◡╹)凸 ", "Dejeme dormir o(≧o≦)o", "（￣へ￣）"];
  var aleatorio = Math.floor(Math.random()*(Mensajes.length));
  if(message.content.startsWith("lilim")){
    message.channel.send(Mensajes[aleatorio]);
}

});

client.on("message", message => {
  var Mensajes = ["lista para jugar contigo   (ᗒᗨᗕ)", "alguien se preocupa por mi ,(・о・)", "quiero un dulce (╥﹏╥)", "que te importa,(¬_¬) ( ", "bien, (~￣▽￣)~"];
  var aleatorio = Math.floor(Math.random()*(Mensajes.length));
  if(message.content.startsWith("-como estas lilim?")){
    message.channel.send(Mensajes[aleatorio]);
}

});

client.on("message", message => {
  var Mensajes = ["No tengo idea ", "no me importa ╮(─▽─)╭", "prefiero seguir jugando (ΘεΘ;)", "yo digo  que si (^▽^)", "no quiero opinar hmmp...ᕙ(⇀‸↼‶)ᕗ"];
  var aleatorio = Math.floor(Math.random()*(Mensajes.length));
  if(message.content.startsWith("-que te parece lilim?")){
    message.channel.send(Mensajes[aleatorio]);
}

if (command==="cry"){
  var cry=["https://media.giphy.com/media/yarJ7WfdKiAkE/giphy.gif","https://media.giphy.com/media/zQnzQCW8IhjkA/giphy.gif","https://media.giphy.com/media/11N961lfRaZWfu/giphy.gif"]
  var pic=Math.floor((Math.random() * kill.length))
  let xuser=message.mentions.users.first()
  if(!xuser) return message.channel.send(message.author.username+"testing...")
  const xembed= new Discord.RichEmbed()
  .setDescription(message.author.username+"se puso a llorar")
  .setImage(cry[pic])
  message.channel.send(xembed)
}

});
 client.login("NzQ5ODAzNjczMDA1MDY0MjEy.X0xTFg.NPcMDJlmHUJmuSwpXnQmyjEwLys");
