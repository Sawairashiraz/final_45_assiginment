let current_users: string[] = ['sana','waniya','ferwa','zara','admin'];
let new_users:string [] = ['shaz','ali','umer', 'admin','danish'];

new_users.forEach((newUser) =>{
   if (
    current_users.some(
        (currentuser) =>currentuser.toLowerCase () === newUser.toLowerCase()
        )
    ){
        console.log( `${newUser} will need to enter a new username.`);
    }  else{
        console.log(`${newUser} is available`);
    }
});
