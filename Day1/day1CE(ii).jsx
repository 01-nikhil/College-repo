function Word(){
let myobj={name:"Madras"}
let obj=myobj;
myobj.name="Chennai";

let array=["a","e","i","o"];
let objarr=array;
array.push("u");
alert("Check the console output")
console.log(obj)
console.log(myobj)
console.log(objarr)
console.log(array)
}
function Print()
{
    return(
        <div>
            <button onClick={Word}>Check</button>
        </div>
    )
}
export default Print;
