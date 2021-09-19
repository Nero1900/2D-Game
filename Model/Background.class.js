class BackgroundObjects extends MovableObject{

    h = 480;
    w = 720;
    x = 0;
    y = 0;

    constructor(ImagePath, x){
        super().LoadImage(ImagePath);
        this.x =x;
       
        
        
    }



}