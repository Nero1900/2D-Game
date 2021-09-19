class Level {

    enemies;
    clouds;
    backgroundobject;
    Level_end_x = 4*720+200;
    coins;
    bottleCollectable;


    constructor(enemies, clouds, backgroundobject,coins,bottleCollectable){

        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundobject = backgroundobject;
        this.coins = coins;
        this.bottleCollectable = bottleCollectable;
    }
}