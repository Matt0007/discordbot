const Discord = require('discord.js');
const ytdl = require ("ytdl-core");

const client = new Discord.Client();



const prefix = "/";

var Dw1 = 0;
var Dw2 = 0;
var Dw3 = 0;
var Dw4 = 0;
var DwTot1 = 0;
var DwTot2 = 0;
var DwTot3 = 0;
var DwTot4 = 0;
client.on("ready", () =>{
 console.log("bot opérationel"); 

} );

client.on("message", message => {




    function Deepwork1 (){
        Dw1++
        message.channel.send("Début Deepwork n°" + Dw1)

        setTimeout(function(){
        message.channel.send("Fin du Deepwork n°" + Dw1 )

        },2700000   );

    }

    function Deepwork2 (){
        Dw2++
        message.channel.send("Début Deepwork n°" + Dw2)

        setTimeout(function(){
        message.channel.send("Fin du Deepwork n°" + Dw2 )

        },2700000   );

    }

    function Deepwork3 (){
        Dw3++
        message.channel.send("Début Deepwork n°" + Dw3)

        setTimeout(function(){
        message.channel.send("Fin du Deepwork n°" + Dw3 )

        },2700000   );

    }

    function Deepwork4 (){
        Dw4++
        message.channel.send("Début Deepwork n°" + Dw4)

        setTimeout(function(){
        message.channel.send("Fin du Deepwork n°" + Dw4 )

        },2700000   );

    }

    function Pause1(){

        message.channel.send("Debut de la pause")
        setTimeout(function(){
            message.channel.send("Fin de la pause" )

            
        }, 900000);


    }


    // 


    if(message.author.bot) return;

    if(message.content == prefix +  "Help1"){
        message.delete();
        message.channel.send ("Bonjour, \r- /R1 Pour reset le nombre de DeepWork \r- /T1 Pour afficher votre nombre total de Deepworks\r- /P1 Pour lancer une Pause \r- /D1 Pour lancer un DeepWork \r- /D1_(le nombre de DP souhaité) Pour lancer automatiquement le nombre de Deepwork noté précédemment")

    }
    if(message.content == prefix +  "Help2"){
        message.delete();
        message.channel.send ("Bonjour, \r- /R2 Pour reset le nombre de DeepWork \r- /T2 Pour afficher votre nombre total de Deepworks\r- /P2 Pour lancer une Pause \r- /D2 Pour lancer un DeepWork \r- /D2_(le nombre de DP souhaité) Pour lancer automatiquement le nombre de Deepwork noté précédemment")

    }
    if(message.content == prefix +  "Help1"){
        message.delete();
        message.channel.send ("Bonjour, \r- /R3 Pour reset le nombre de DeepWork \r- /T3 Pour afficher votre nombre total de Deepworks\r- /P3 Pour lancer une Pause \r- /D3 Pour lancer un DeepWork \r- /D3_(le nombre de DP souhaité) Pour lancer automatiquement le nombre de Deepwork noté précédemment")

    }
    if(message.content == prefix +  "Help1"){
        message.delete();
        message.channel.send ("Bonjour, \r- /R4 Pour reset le nombre de DeepWork \r- /T4 Pour afficher votre nombre total de Deepworks\r- /P4 Pour lancer une Pause \r- /D4 Pour lancer un DeepWork \r- /D4_(le nombre de DP souhaité) Pour lancer automatiquement le nombre de Deepwork noté précédemment")

    }

    if(message.content == prefix + "T1"){
        message.delete();
        
        message.channel.send("Vous avez fait au total " + DwTot1 + " DeepWork")



    }
    if(message.content == prefix + "T2"){
        message.delete();
        
        message.channel.send("Vous avez fait au total " + DwTot2 + " DeepWork")



    }
    if(message.content == prefix + "T3"){
        message.delete();
        
        message.channel.send("Vous avez fait au total " + DwTot3 + " DeepWork")



    }
    if(message.content == prefix + "T4"){
        message.delete();
        
        message.channel.send("Vous avez fait au total " + DwTot4 + " DeepWork")



    }


    if(message.content == prefix + "R1"){
        message.delete();

        DwTot1 = DwTot1 + Dw1
        
        message.channel.send("Vous avez fait au total " + DwTot1 + " DeepWork")
        Dw1 = 0 ;


    }
    if(message.content == prefix + "R2"){
        message.delete();

        DwTot2 = DwTot2 + Dw2
        
        message.channel.send("Vous avez fait au total " + DwTot2 + " DeepWork")
        Dw2 = 0 ;


    }
    if(message.content == prefix + "R3"){
        message.delete();

        DwTot3 = DwTot3 + Dw3
        
        message.channel.send("Vous avez fait au total " + DwTot3 + " DeepWork")
        Dw3 = 0 ;


    }

    if(message.content == prefix + "R4"){
        message.delete();

        DwTot4 = DwTot4 + Dw4
        
        message.channel.send("Vous avez fait au total " + DwTot4 + " DeepWork")
        Dw4 = 0 ;


    }

    if (message.content == prefix + "P1"){
        message.delete();
        Pause1();
  
    }

    if (message.content == prefix + "P2"){
        message.delete();
        Pause1();
  
    }

    if (message.content == prefix + "P3"){
        message.delete();
        Pause1();
  
    }

    if (message.content == prefix + "P4"){
        message.delete();
        Pause1();
  
    }


    if(message.content == prefix + "D1_2"){
        message.delete();
        Deepwork1();
        Pause1();
        Deepwork1();      

    }
    if(message.content == prefix + "D2_2"){
        message.delete();
        Deepwork2();
        Pause1();
        Deepwork2();      

    }
    if(message.content == prefix + "D3_2"){
        message.delete();
        Deepwork3();
        Pause1();
        Deepwork3();      

    }
    if(message.content == prefix + "D4_2"){
        message.delete();
        Deepwork4();
        Pause1();
        Deepwork4();      

    }

    if(message.content == prefix + "D1_3"){
        message.delete();
        Deepwork1();
        Pause1();
        Deepwork1();
        Pause1();
        Deepwork1();

    }
    if(message.content == prefix + "D2_3"){
        message.delete();
        Deepwork2();
        Pause1();
        Deepwork2();
        Pause1();
        Deepwork2();

    }
    if(message.content == prefix + "D3_3"){
        message.delete();
        Deepwork3();
        Pause1();
        Deepwork3();
        Pause1();
        Deepwork3();

    }
    if(message.content == prefix + "D4_3"){
        message.delete();
        Deepwork4();
        Pause1();
        Deepwork4();
        Pause1();
        Deepwork4();

    }

    if(message.content == prefix + "D1_4"){
        message.delete();
        Deepwork1();
        Pause1();
        Deepwork1();
        Pause1();
        Deepwork1();
        Pause1();
        Deepwork1();

    }
    if(message.content == prefix + "D2_4"){
        message.delete();
        Deepwork2();
        Pause1();
        Deepwork2();
        Pause1();
        Deepwork2();
        Pause1();
        Deepwork2();

    }
    if(message.content == prefix + "D3_4"){
        message.delete();
        Deepwork3();
        Pause1();
        Deepwork3();
        Pause1();
        Deepwork3();
        Pause1();
        Deepwork3();

    }
    if(message.content == prefix + "D4_4"){
        message.delete();
        Deepwork4();
        Pause1();
        Deepwork4();
        Pause1();
        Deepwork4();
        Pause1();
        Deepwork4();

    }

    if(message.content == prefix + "D1"){ 
        message.delete();
        Deepwork1();
    
    }
    if(message.content == prefix + "D2"){ 
        message.delete();
        Deepwork2();
    
    }
    if(message.content == prefix + "D3"){ 
        message.delete();
        Deepwork3();
    
    }
    if(message.content == prefix + "D4"){ 
        message.delete();
        Deepwork4();
    
    }

})

client.login(process.env.TOKEN);


