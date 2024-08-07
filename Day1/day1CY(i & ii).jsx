let directions=["North","South","West","East"]
function ADD()
{
    directions=directions.map(direction =>direction +" News")
    document.write(directions);

    <div>
        <button onClick={refresh}>Refresh</button>
    </div>
}
function refresh ()
{
    document.write(directions);
}
refresh();

function Sam()
{
    return(
        <div>
            <button onClick={ADD}>Add</button>
        </div>
    )
}
export default Sam;
