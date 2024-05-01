//create a function that takes input as an object and return the structure of the input object.

let user = {
    
    name: "Anirudha",       //created an object named user
    age : 20,
    graduated: true,

}

function UserDetails(user){                 //created a function 

    console.log("name: "+typeof(user.name));    //using type of operator to get the data type of the value.
    console.log("age: "+typeof(user.age));
    console.log("graduated: "+typeof(user.graduated));

    return UserDetails();
}
