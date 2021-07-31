// Question1
var itemsArray = [
    {name:"juice",price:"50", quantity:"3"},
    {name:"cookie",price:"30", quantity:"9"},
    {name:"shirt",price:"880", quantity:"1"},
    {name:"pen",price:"100", quantity:"2"}];
    
var eachItemTotalPrice = [];

for (var i = 0;i < 4;i++)
{
    eachItemTotalPrice[i] = itemsArray[i].price * itemsArray[i].quantity;
}

var totalPrice = itemsArray[0].price + itemsArray[1].price + itemsArray[2].price + itemsArray[3].price; 

// Question2
var person1 = {
    firstName:"",
    lastName :"Harry",
    email : "harry123@gmail.com",
    password : "louis",
    age: "",
    gender : "male",
    city : "Florida",
    country : "USA"
}
if (person1.firstName == "")
{
    console.log("First Name is missing!");
}
if (person1.lastName == "")
{
    console.log("Last Name is missing!");
}
if(person1.age == "")
{
    console.log("Age is missing!");
}
if(person1.country == "")
{
    console.log("Country is missing!");
}

// Question3
function Human(name, ID, address, age, gender) {
     this.name = name;
     this.ID = ID;
     this.age = age;
     this.address = address;
     this.gender = gender;
     }


var human1 = new Human("Harry", 9876, "Florida USA", 51, "male" )

// Question4
function Civilian(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}
