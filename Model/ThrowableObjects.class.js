class ThrowableObjects extends MovableObject{

    world;
    CurrentImage =0;

    IMAGE_ROTATION_BOTTLE = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];
   
    constructor (x, y){
     
     
     super().LoadImage('img/7.Marcadores/Icono/Botella.png');
     this.LoadImages(this.IMAGE_ROTATION_BOTTLE);
     this.x = x;
     this.y = y;
     this.h = 70;
     this.w = 50;
     this.ThrowBottle();
     this.animate();
    }


    

    ThrowBottle(){
        this.GroundLevel= 500;
        this.speedY = 30; 
       this.AppyGravity();
       setInterval(() => {
           this.x += 15;
       }, 25);

     
       
    }

    animate() {
        setInterval(() => {
        let i = this.CurrentImage % 4;  
        let path = this.IMAGE_ROTATION_BOTTLE[i];
        this.img = this.ImageCache[path];
        this.CurrentImage++;
            }, 10);
        }
    }






