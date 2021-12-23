a=1;
img=1;
function Auto_start()
{
    TimerId = setInterval("Auto()", 2000);
}
function Auto_stop()
{
    clearTimeout(TimerId);
}
function Auto()
{
    smena(a);
    if (a == 3)
    {
        a = 0;   
    }
    a = a + 1;
        
}
function smena(a)
{
    document.getElementById("main_img").src= document.getElementById(a).src;
    document.getElementById(img).classList.remove("border-img");
    document.getElementById(a).classList.add("border-img");
    img=a;
}

let array=[];
let max=0;
function draw()
{
    max=parseInt(array[0].value,10);
    let Draw = document.getElementById("canvas");
    let g =Draw.getContext("2d");
    g.clearRect(0, 0, canvas.width, canvas.height)
    for (i=0;i<array.length;i++)
    {
        if (max<parseInt(array[i].value,10))
        {
            max=parseInt(array[i].value,10);
        }
    }
    for(i=0;i<array.length;i++)
    {
        g.fillStyle = "green";
        g.fillRect(15*(i+1), max, 7, -array[i].value);
        
    }
    console.log("max "+max);
}
function ceratuer()
{
    let number=(document.getElementById("num").value);
    for (i = 0; i<number;i++)
    {
        elem = document.createElement("input");
        elem.type="text"
        elem.className="elem";
        array.push(elem); 
        document.getElementById("TextFiled").appendChild(elem)
    }
}