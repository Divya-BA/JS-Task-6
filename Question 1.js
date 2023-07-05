a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
answer:
class Movie
{
  constructor(title,studio,rating)
  {
    this.title=title;
    this.studio=studio;
    this.rating=rating;
  }
}
var a=new Movie("Fast & Furious", "Universal Pictures", "R");
var b=new Movie("Minions", "Universal Pictures", "PG");

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
answer:


class Movie
{
  constructor(title,studio,rating="PG")
  {
    this.title=title;
    this.studio=studio;
    this.rating=rating;
  }
}
var a=new Movie("Fast & Furious", "Universal Pictures", "R");
var b=new Movie("Minions", "Universal Pictures", "PG");
var c=new Movie("The Matrix", " Village Roadshow Pictures");

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
answer:

class Movie
{
  constructor(title,studio,rating="PG")
  {
    this.title=title;
    this.studio=studio;
    this.rating=rating;
  }
  
  getPG(movie)
  {
    var result=movie.filter((element)=>element.rating=="PG");
    var res=result.map((element)=>element.title);
    return "The movie title which have PG rating are"+" "+res;
  }
  
  
}
var a=new Movie("Fast & Furious", "Universal Pictures", "R");
var b=new Movie("Minions", "Universal Pictures", "PG");
var c=new Movie("The Matrix", " Village Roadshow Pictures");
var d=new Movie("Casino Royale","Eon Productions","PG13");
var movie=[a,b,c,d];
console.log(b.getPG(movie));

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
answer:

class Movie
{
  constructor(title,studio,rating="PG")
  {
    this.title=title;
    this.studio=studio;
    this.rating=rating;
  }
}
var d=new Movie("Casino Royale","Eon Productions","PG13");
