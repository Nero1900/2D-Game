class BigChicken extends MovableObject{


    
    h = 100;
    w = 50;
    y = 370;
    CurrentImage = 0;
    

    WALKING_IMAGES = [
    'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
    'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
    'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',
    
]  

constructor(){
    super().LoadImage('img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png')
    this.LoadImages(this.WALKING_IMAGES);
    this.speed = 3 + Math.random()*2;
    this.animate();
    this.x = 100 + Math.random()*500;
}

animate(){

    setInterval(()=>{  
        this.PlayAnimation(this.WALKING_IMAGES);},100)
        setInterval(() => {
            this.MoveLeft();}, 80)
    }

    
    }