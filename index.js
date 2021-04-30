// Create an alert that lists all users, with their ids, names and what city they're from

for (let i = 0; i < users.length; i++) {
    const user = users[i]      
    console.log(user.name, user.id, user.address)
    }

// the above doesn't give the city - just the whole address ❌

for (let i = 0; i < users.length; i++) {
    const user = users[i]     
    console.log("User Name: " + user.name, "User ID: " + user.id, "User Address: " + user.address)
    }

// the above with added strings doesn't even give the whole address any more - i have no idea why ? ❌

for (let i = 0; i < users.length; i++) {
    const user = users[i]      
    console.log(user.name, user.id, user.address.city)
    }

    //the above works - yes yes yes - booooomshakalaka ✅

for (let i = 0; i < users.length; i++) {
    const user = users[i]      
    console.log("User Name: " + user.name, "User ID: " + user.id, "User City: " + user.address.city)
    }

// the above works with strings attached ✅

for (let i = 0; i < users.length; i++) {
    const user = users[i]      
    alert(user.name, user.id, user.address.city)
    }

// the above doesn't work when alerting - its only bringing up the names not the subsequent info ❌

for (let i = 0; i < users.length; i++) {
    const user = users[i]      
    alert("User Name: " + user.name + " / User ID: " + user.id + " / User City: " + user.address.city)
    }

// the above now works but it brings up 10 individual alerts ? 😕  ❌ ✅



// - Prompt the user for a user id

const userid = prompt("Please enter your ID number")

// stored the users id in the variable userid ✅

// - Display an alert with the username and all the todos titles that belong to that user 
// - with the username (Step 2)

for (let i = 0; i < users.length; i++) {
    userid === users[i]      
    console.log(userid.name)
    }


// - all the todos title that belong to that user (Step 3)


// - Display an alert (Step 4)






    // >>>>>>>>>> Ricos code from our chat <<<<<<<<

    const user = {
        username: "rico",
        age: 29,
      }
      
      //  "rico"

      // gets the username from the object....
      
      console.log(user.username)

      
      
      // const users = ["rico", "nico"]
      
      const users = [
        {
          username: "rico",
          age: 29,
        },
        {
          username: "nico",
          age: 33,
        },
      ]
      
      //  "rico"
      
      // Step 1: Get an object from the array
      console.log(users[0])
      
      // Step 2: Get the property from the object
      console.log(users[0].username)
      
      for (let i = 0; i < users.length; i++) {
        // Step 1: Store a user object
        const user = users[i]
      
        console.log(user)
      
        // Step 2: Print the user's username
        console.log(user.username)
      }
      