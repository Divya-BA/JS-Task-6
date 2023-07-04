//class circle
class Circle
{
  constructor(Radius,Color)
  {
    this.Radius=Radius;
    this.Color=Color;
  }
  getRadius()
  {
    return this.Radius;
  }
  setRadius(NewRadius)
  {
    this.Radius=NewRadius;
  }
  getColor()
  {
    return this.Color;
  }
  setColor(NewColor)
  {
    this.Color=NewColor;
  }
  toString()
  {
    return "Circle[Radius="+this.Radius+","+"Color="+this.Color+"]";
  }
  getArea()
  {
    return Math.PI * this.Radius *this.Radius;
  }
  getCircumference()
  {
    return 2 * Math.PI * this.Radius;
  }
}
var a=new Circle(1.0,"Red");
