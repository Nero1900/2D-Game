const Level1 = new Level(
    [
        new BigChicken(),
        new BigChicken(),
        new BigChicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],

    [new Cloud()],

    [
        new BackgroundObjects('img/5.Fondo/Capas/5.cielo_1920-1080px.png',-719),
        new BackgroundObjects('img/5.Fondo/Capas/3.Fondo3/1.png',-719),
        new BackgroundObjects('img/5.Fondo/Capas/2.Fondo2/1.png',-719),
        new BackgroundObjects('img/5.Fondo/Capas/1.suelo-fondo1/1.png',-719),
        new BackgroundObjects('img/5.Fondo/Capas/5.cielo_1920-1080px.png',0),
        new BackgroundObjects('img/5.Fondo/Capas/3.Fondo3/2.png',0),
        new BackgroundObjects('img/5.Fondo/Capas/2.Fondo2/2.png',0),
        new BackgroundObjects('img/5.Fondo/Capas/1.suelo-fondo1/2.png',0),
    
        new BackgroundObjects('img/5.Fondo/Capas/5.cielo_1920-1080px.png',719),
        new BackgroundObjects('img/5.Fondo/Capas/3.Fondo3/1.png',719),
        new BackgroundObjects('img/5.Fondo/Capas/2.Fondo2/1.png',719),
        new BackgroundObjects('img/5.Fondo/Capas/1.suelo-fondo1/1.png',719),
        new BackgroundObjects('img/5.Fondo/Capas/5.cielo_1920-1080px.png',2*719),
        new BackgroundObjects('img/5.Fondo/Capas/3.Fondo3/2.png',2*719),
        new BackgroundObjects('img/5.Fondo/Capas/2.Fondo2/2.png',2*719),
        new BackgroundObjects('img/5.Fondo/Capas/1.suelo-fondo1/2.png',2*719),
    
        new BackgroundObjects('img/5.Fondo/Capas/5.cielo_1920-1080px.png',3*719),
        new BackgroundObjects('img/5.Fondo/Capas/3.Fondo3/1.png',3*719),
        new BackgroundObjects('img/5.Fondo/Capas/2.Fondo2/1.png',3*719),
        new BackgroundObjects('img/5.Fondo/Capas/1.suelo-fondo1/1.png',3*719),
        new BackgroundObjects('img/5.Fondo/Capas/5.cielo_1920-1080px.png',4*719),
        new BackgroundObjects('img/5.Fondo/Capas/3.Fondo3/2.png',4*719),
        new BackgroundObjects('img/5.Fondo/Capas/2.Fondo2/2.png',4*719),
        new BackgroundObjects('img/5.Fondo/Capas/1.suelo-fondo1/2.png',4*719),
    
    ],

    [
        new Coin(100,300),
        new Coin(300,300),
        new Coin(500,300),
        new Coin(700,300),
        new Coin(900,300)
    ],

    [
        new BottleCollectable(200,350),
        new BottleCollectable(400,350),
        new BottleCollectable(600,350),
        new BottleCollectable(800,350),
        new BottleCollectable(1000,350)
    ]


  
);

