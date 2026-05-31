let isLoggedIn= true;
let UserRole= "Monitor";

if (isLoggedIn)

    {
        if(UserRole=="Admin")
{
    console.log("You have logged in as an admin user");
}

else if (UserRole=="Editor")
{
    console.log("You have logged in as an editor");
}

else
{
    console.log("you are a viewer");
}
    }