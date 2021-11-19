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
function buttonspirale(){

    var canvas = document.getElementById("canvas1").getContext("2d");

    for(let i =0; i<=150;i=i+10){
        ctx.fillStyle="black";
        ctx.filerect(i,0,10,10)
    }
    for(let i =0; i<=150;i=i+10){
        ctx.fillStyle="black";
        ctx.filerect(150,i,10,10)
    }
    for(let i =30; i<=150;i=i+10){
        ctx.fillStyle="black";
        ctx.filerect(i,150,10,10)
    }
    for(let i =150; i>=50;i=i-10){
        ctx.fillStyle="black";
        ctx.filerect(30,i,10,10)
    }
    for(let i =30; i<=100;i=i+10){
        ctx.fillStyle="black";
        ctx.filerect(i,50,10,10)
    }
    for(let i =50; i<=100;i=i+10){
        ctx.fillStyle="black";
        ctx.filerect(100,1,10,10)
    }
    

}

