class MovableObject extends DrawableObjects {
   
    speed = 0.15;
    speedY = 0;
    Accerleration = 2.5;
    // a JSON array that should be fed with paths for Images
    OtherDirection = false; // To Mirror the Image by Moving left
    lastHit = 0;
    TimeOfDeath =0;
    GroundLevel = 500;
    
    
    MoveLeft(){
        this.x -= this.speed
        
    }

    PlayAnimation(IMAGES){
    let i = this.CurrentImage % IMAGES.length;  
    let path = IMAGES[i];
    this.img = this.ImageCache[path];
    this.CurrentImage++;
    }

  

 

    AppyGravity(){
        
            setInterval(()=>{
            if(this.IsAboveGround() || this.speedY > 0){    
            this.y -= this.speedY;
            this.speedY -= this.Accerleration;}}, 1000/25);}

            
IsAboveGround(){
    if(this instanceof ThrowableObjects){
        return true;
    }else{
               return this.y < 315}
            }

Jump(){
    this.speedY = 20;
}

MoveRight(){
    this.x += this.speed
this.OtherDirection = false;
}

IsColliding(mo){
    return this.x + this.w > mo.x &&
    this.y + this.h > mo.y &&
    this.x < mo.x &&
    this.y < mo.y + mo.h;}


    
    Hit(){
        this.Energy -= 1;
        if(this.Energy < 0){
            this.Energy = 0;
            this.TimeOfDeath = new Date().getTime();}
            else{
            this.lastHit = new Date().getTime();}
       
    }

    IsDead(){
        let TimePassedSinceDeath = new Date().getTime() - this.TimeOfDeath;
        TimePassedSinceDeath = TimePassedSinceDeath/1000;
        if(this.Energy == 0){
            return TimePassedSinceDeath < 3;
        }
    }

    IsHurt(){
        let timePassed =  new Date().getTime() - this.lastHit
        timePassed = timePassed/1000

        return timePassed < 1
    }

    kill() {
        this.energy = 0;
    }




}

