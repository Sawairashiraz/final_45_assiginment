let users :string [] =['sana','zara','waniya','ferwa','admin'];
for(let user of users){

    if(user === "admin"){
        console.log("Hello admin,would you like to see a status report?");
    }

else{
    console.log(`Hello ${user},'thank u for logging in again.'`)
}
}