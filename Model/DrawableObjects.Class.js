class DrawableObjects{
    x = 20;
    y = 80;
    h = 150;
    w = 75;
    img;
    ImageCache = {};

    LoadImage(path){
        this.img = new Image();
        this.img.src = path;
        }

        LoadImages(ArrayofImages){ // JSONARRAY in this Case is = IMAGEWALKING   
        
            ArrayofImages.forEach(path => {   //paths from the Array IMAGEWALKING
            let img = new Image();
            img.src = path;  
            this.ImageCache[path]=img; // Adding the img with the path from IMAGEWALKING to the JSON ImageCache  
            });  
        }

        DrawObject(ctx){
           
            ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
         }

         DrawFrame(ctx){
            if(this instanceof Character || this instanceof Chicken || this instanceof ThrowableObjects || this instanceof Endboss){
        ctx.beginPath();
        ctx.lineWidth = "6";
        ctx.strokeStyle = "red";
        ctx.rect(this.x,this.y,this.w,this.h);
        ctx.stroke();}}
    
}