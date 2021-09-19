class Coin extends MovableObject{
    w = 100;
    h = 100;
    CurrentImage =0;
    IMAGES = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ];
    constructor(x, y) {
        
        super().LoadImage('img/8.Coin/Moneda1.png');
        
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