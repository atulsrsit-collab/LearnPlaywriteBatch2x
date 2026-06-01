let isLoggedIn= false;
let UserRole= "Admin";

if (isLoggedIn)

    {
        if(UserRole==="Admin")
{
    console.log("You have logged in as an admin user");
}

else if (UserRole==="Editor")
{
    console.log("You have logged in as an editor");
}

else
{
    console.log("you are a viewer");
}
    }

    else

        {
            console.log("you are not logged in");
        }