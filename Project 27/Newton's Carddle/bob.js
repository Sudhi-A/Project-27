class Bob{
    constructor(x,y,radius){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body=Bodies.ellipse(x,y,5)
    this.radius=5
}
}