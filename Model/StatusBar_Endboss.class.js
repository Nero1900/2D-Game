class StatusBar_Endboss extends DrawableObjects {
    IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png'
    ];
    
    percentage = 100;

    constructor (){
        super();
        this.LoadImages(this.IMAGES); 
        this.x = 4*720 + 400;
        this.y = 30;
        this.h = 50;
        this.w = 175;
        this.setPercentage(100);
        
    }
    
    setPercentage(percentage){
        this.percentage = percentage
        let Path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.ImageCache[Path];
    
    }
    
    resolveImageIndex(){
    if(this.percentage == 100){return 5;}
    
    else if (this.percentage > 80){return 4;}
    
    else if (this.percentage > 60){return 3;}
    
    else if (this.percentage > 40){return 2;}
    
    else if (this.percentage > 20){return 1;}
    
    else {return 0;}
    
    }
    
    
}