//Write a “person” class to hold all the details.

class Person
{
  constructor(Name,Age,Gender,City,Mobileno)
  {
    this.Name=Name;
    this.Age=Age;
    this.Gender=Gender;
    this.City=City;
    this.Mobileno=Mobileno;
  }
  getname()
  {
    return "Name:"+this.Name;
  }
  getage()
  {
    return "Age:"+this.Age;
  }
   getgender()
  {
    return "Gender:"+this.Gender;
  }
  getcity()
  {
    return "City:"+this.City;
  }
   getmobileno()
  {
    return "Mobile-no:"+this.Mobileno;
  }
  
}
var a=new Person("Divya",20,"Female","Chennai",999999999);
var b=new Person("lav",23,"Female","Chennai",8888888888);
var c=new Person("jeo",30,"Male","Madurai",1111111111);
console.log(a.getname()+" "+a.getage()+" "+a.getgender()+" "+a.getcity()+" "+a.getmobileno());
console.log(b.getname()+" "+b.getage()+" "+b.getgender()+" "+b.getcity()+" "+b.getmobileno());
console.log(c.getname()+" "+c.getage()+" "+c.getgender()+" "+c.getcity()+" "+c.getmobileno());
