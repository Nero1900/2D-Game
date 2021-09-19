class Cloud extends MovableObject{


    h = 300;
    w = 500;
   
    y = 20;


    constructor(){
        super().LoadImage('img/5.Fondo/Capas/4.nubes/1.png')

        this.x = Math.random()*500; // a Random number between 0 - 1 * 500

        this.MoveLeft();
      

       
        
    }

    animate(){
     this.MoveLeft();   
    }

   


    }