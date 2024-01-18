let Botón = document.getElementById("Botón");

Botón.onclick = function()
{
    document.body.style.backgroundColor = create_random_color();
}
function create_random_color()
{
    let arrayOfColors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

    let color_string = "";

    for(let i = 0; i < 6; i++)
    {
        color_string += arrayOfColors[Math.floor(Math.random()* 15)];
    }
    return `#${color_string}`;
}
