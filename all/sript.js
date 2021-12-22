<script>
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
    document.images[0].src= document.images[a].src;
    document.images[img].classList.remove("border-img");
    document.images[a].classList.add("border-img");
    img=a;
}

</script>