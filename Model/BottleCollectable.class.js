class BottleCollectable extends MovableObject{
    w = 100;
    h = 100;
    CurrentImage =0;
    IMAGES = [
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada2.png'
    ];
    constructor(x, y) {
        
        super().LoadImage('img/6.botella/2.Botella_enterrada1.png');
        
        this.LoadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate() {
    setInterval(() => {
    let i = this.CurrentImage % this.IMAGES.length;  
    let path = this.IMAGES[i];
    this.img = this.ImageCache[path];
    this.CurrentImage++;
        }, 200);
    }
}