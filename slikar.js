
window.addEventListener('DOMContentLoaded', (event) => {
    let parent = document.getElementsByTagName("body")[0];
    let table = document.createElement("table");
    let width = Math.round(window.innerWidth/10);
    let height = Math.round(window.innerHeight/10);

    let cR = 0, cG = 0, cB = 0;
    let color;
    let stop = 0;

    for(let i = 0; i < height; i++)
    {
        let tr = document.createElement("tr");
        for(let j = 0; j < width; j++)
        {
            let td = document.createElement("td");
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    parent.appendChild(table);



    document.getElementById("color-select").addEventListener("click", () => {
        let inputs = document.getElementsByTagName("input");
        for(let i = 0; i < inputs.length; i++)
        {
            updateColor(inputs[i].value, inputs[i].placeholder)
        }
        color = toHex();
        let colorDiv = document.getElementById("color-display");
        colorDiv.style.backgroundColor = color;
    });

    function toHex()
    {
        r = cR.toString(16);
        g = cG.toString(16);
        b = cB.toString(16);

        if (r.length == 1)
            r = "0" + r;
        if (g.length == 1)
            g = "0" + g;
        if (b.length == 1)
            b = "0" + b;
        return "#" + r + g + b;
    }

    function updateColor(value, placeholder)
    {
        console.log(value, placeholder);
        switch(placeholder)
        {
            case 'R': cR = parseInt(value); break;
            case 'G': cG = parseInt(value); break;
            case 'B': cB = parseInt(value); break;
        }
    }

    let td = document.getElementsByTagName("td");
    console.log(td);
    for(let i = 0; i < td.length; i++)
    {
        td[i].addEventListener("mouseenter", () => {
            if(!stop)
                td[i].style.backgroundColor = color;
        });
    }

    document.body.addEventListener("click", () => {
        if(stop)
            stop = 0;
        else
            stop = 1;
    });


});