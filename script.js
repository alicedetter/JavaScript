document.addEventListener("DOMContentLoaded",function()
{
    const ruta1=document.getElementById("ruta1");
    const ruta2=document.getElementById("ruta2");
    ruta1.addEventListener('click',function()
    {
        ruta2.classList.add("first");
        ruta2.classList.remove("andra");
        ruta1.classList.remove("first");
        ruta1.classList.add("andra");
    });
});