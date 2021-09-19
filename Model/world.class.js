class World{
character = new Character();
endboss = new Endboss();
level = Level1;
statusBar = new StatusBar();
statusBar_Endboss = new StatusBar_Endboss();
throwableObjects = []





keyboard; // IS this imported from World(canvas, keyboard)?????????
ctx;
canvas; //in order to call it for the requestAnimationFrame()
Camera_X = 0; // to Move the Camera in the x-Direction // See Character


constructor(canvas, keyboard){
    this.canvas = canvas;  
    this.keyboard = keyboard; 
    this.ctx = canvas.getContext('2d');
    this.draw();
    this.Run(); 
    this.SetWorld();}

draw(){

    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)//in order to clear the Canvas for redrawing
    this.ctx.translate(this.Camera_X,0); // To move the Camera Forward
    this.AddObjectsToMap(this.level.backgroundobject);// Must be first to be behind the other Elements      
    this.AddObjectToMap(this.character);
    
    this.ctx.translate(-this.Camera_X,0);
    this.AddObjectToMap(this.statusBar);
    this.ctx.translate(this.Camera_X,0);
    this.AddObjectToMap(this.statusBar_Endboss);
    this.AddObjectsToMap(this.level.enemies);
    this.AddObjectsToMap(this.throwableObjects);
    this.AddObjectsToMap(this.level.bottleCollectable);   
    this.AddObjectsToMap(this.level.coins);
     
    this.AddObjectsToMap(this.level.clouds);
    this.ctx.translate(-this.Camera_X,0); // To move the Camera Back

// in order to repeat the function draw();
    let self = this;
    requestAnimationFrame(function(){
        self.draw();
    })  
}

AddObjectToMap(Object){

    if (Object.OtherDirection) {
        this.FlipImage(Object)}
    
    Object.DrawObject(this.ctx);
    Object.DrawFrame(this.ctx);

    if (Object.OtherDirection) {
        this.FlipImageBack(Object)}  
}


AddObjectsToMap(Objects){
    Objects.forEach(Object => {
        this.AddObjectToMap(Object);   
        });
    }

    SetWorld(){ // In order to have the World in the Character becouse the Keybord is in the world so now i can catch the keyboard from the character like this character.world.keyboard.RIGHT;
        this.character.world = this; // WHY ONLY this????? this.charachter.world = this.world works Logically but without areason it just works with this and not this.world
    }

    FlipImage(Object){
        this.ctx.save();
        this.ctx.translate(Object.w,0);
        this.ctx.scale(-1,1);
        Object.x = Object.x * -1;
    }

    FlipImageBack(Object){
        Object.x = Object.x * -1;
        this.ctx.restore();
    }

    Run(){
        setInterval(()=>{
            this.CollisionWithCharachter();
        },200)
    }



    CollisionWithCharachter(){
        this.level.enemies.forEach(enemy => {
            if(this.character.IsColliding(enemy)){
                this.character.Hit();
                this.statusBar.setPercentage(this.character.Energy)
                console.log(this.character.Energy)
            } 
         });
        
    }


}


