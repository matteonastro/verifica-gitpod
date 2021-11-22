let i=0
let n=0;
let dimension=500
let v= ["green","yellow","blue","red","purple"];
function buttonfunction1(){
    
    i++;
    if(i==1){
        console.log ("ciao");
        document.getElementById("title").innerHTML="Prontone";
        document.getElementById("bottone").innerHTML="Disegna";
    }
    if (i==2){
        document.getElementById("title").innerHTML="Disegnone";
        document.getElementById("bottone").innerHTML="Ricomincia";
        var canvas = document.getElementById("canvas").getContext("2d");
        
        for (let i=0;i<250;i+=50){
            
            canvas.fillStyle = v[n];

            canvas.fillRect(0+i,0+i,dimension,dimension);
            n++;
            dimension -= 100;
            console.log (dimension)
        }
        

        
    }
    if (i==3){
        document.getElementById("title").innerHTML="Ciaone";
        document.getElementById("bottone").innerHTML="Premimi";
        i=0;
    }

    
}

    var stato = 0;

function buttonFunction() {
  var canvas = document.getElementById("canvas1");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "purple";
  ctx.fillRect(0, 0, 200, 200);
  ctx.fillStyle = "#33FFDD";


  let len = 190;
  let larg = 5;

  for (i = 0; i < len/(2*larg); i += 2) {
    
    //linee orizzontali metà sopra
    ctx.fillRect(i*larg, i*larg, len-i*2*larg, larg);
    //linee orizzontali metà sotto
    ctx.fillRect(i*larg+larg, len - i*larg, len-i*2*larg-larg, larg);

    //Linee verticali metà dx
    ctx.fillRect(len - i*larg, i*larg, larg , len-i*2*larg+larg);
    //Linee verticali metà sx
    ctx.fillRect(i*larg+larg, i*larg + 2*larg, larg , len-i*2*larg-2*larg);
  }
}

    



