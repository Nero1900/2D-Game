class Character extends MovableObject{

    WALKING_IMAGES= ['img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png']  

    JUMPING_IMAGES = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png']

    DEAD_IMAGES = [
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png'
    ]    

    HURT_IMAGES = [
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png'   
    ]

    Endscreen = [
        'img/9.Intro _ Outro Image/Start Screen/Opción 1.png', 
        'img/9.Intro _ Outro Image/Start Screen/Opción 2.png'   
    ]
        
    



CurrentImage = 0;
world;
speed = 20;
Energy = 100;


constructor(){
    super().LoadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
    this.LoadImage(this.Endscreen);
    this.LoadImages(this.WALKING_IMAGES);
    this.LoadImages(this.JUMPING_IMAGES);
    this.LoadImages(this.DEAD_IMAGES);
    this.LoadImages(this.HURT_IMAGES);
    this.AppyGravity()
    this.animate();
}


animate(){
setInterval(()=>{

    
if (this.world.keyboard.RIGHT == true && this.x < this.world.level.Level_end_x) {  
    this.MoveRight();
    }

    if (this.world.keyboard.LEFT == true && this.x > -700) { 
        this.MoveLeft();
        this.OtherDirection = true;}

            //if (this.world.keyboard.DOWN == true) {  
                //this.x += this.speed}

                if (this.world.keyboard.SPACE == true && !this.IsAboveGround()) {  
                    this.Jump();}

                    if (this.world.keyboard.UP == true && !this.IsAboveGround()) {
                        this.Jump();}


                    this.world.Camera_X = -this.x + 100;
                        
},50)  
setInterval(()=>{ 
    if (this.IsAboveGround()) {
        this.PlayAnimation(this.JUMPING_IMAGES);
    }else if(this.IsDead()){
        this.PlayAnimation(this.DEAD_IMAGES);
        setTimeout(() => {
            this.PlayAnimation(this.Endscreen);
        }, 1000);
        
        
    }else if(this.IsHurt()){
        this.PlayAnimation(this.HURT_IMAGES);
    }
    else{
if (this.world.keyboard.RIGHT == true || this.world.keyboard.LEFT == true) { // Set Interval for Moving 
this.PlayAnimation(this.WALKING_IMAGES);}}},50)}
}