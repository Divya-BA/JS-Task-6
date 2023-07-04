//write a class to calculate the uber price.

class Uber
{
  constructor(km)
  {
    this.km=km;
  }
  getprice()
  {
    return "Price for"+" "+this.km+"km is"+" "+this.km*24;//1km price=24
  }
}
var a =new Uber(200);
console.log(a.getprice());
