class Rectangle {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ctx = document.getElementById("myCanvas").getContext('2d');
    }
    draw () {
        this.x = Math.floor(Math.random()*100);
        this.y = Math.floor(Math.random()*100);
        this.width = Math.floor(Math.random()*100);
        this.height = Math.floor(Math.random()*200);
        this.ctx.stroke() ;
    }
    calcu_S_and_P () {
        this.ctx.beginPath();
    }
}
