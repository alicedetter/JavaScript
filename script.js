document.addEventListener("DOMContentLoaded",function()
{
    const ruta1=document.getElementbyId("ruta1");
    const ruta2=document.getElementbyId("ruta2");
    ruta1.addEventListener('click',function()
    {
        ruta2.classList.add("första");
        ruta2.classList.remove("andra");
        ruta1.classList.remove("första");
        ruta1.classList.add("andra");

    });
});