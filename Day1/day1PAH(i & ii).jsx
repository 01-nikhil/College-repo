//PAH i

function P1()
{
    return(
        <div className="App" >
            <p>This is a team functional component</p>
        </div>
    )
}export default P1;


//PAH ii

function Sam() {
    let age = 18;
    let name = "kiran";
    let setStatus = false;
    let userDefault = undefined;
    let responseValue = null;

    console.log("Initial Values:");
    console.log("Age:", age);
    console.log("Name:", name);
    console.log("Set Status:", setStatus);
    console.log("User Default:", userDefault);
    console.log("Response Value:", responseValue);

    age = 25;
    let oldage = age;

    setStatus = true;
    let status = setStatus;

    console.log("Updated Values:");
    console.log("New Age:", oldage);
    console.log("Set Status:", status);

    alert("Check the console output!");
    
}
function Button()
{
    return(
        <div>
            <button onClick={Sam}>JAVASCRIPT</button>
        </div>
    )
}
export default Button;