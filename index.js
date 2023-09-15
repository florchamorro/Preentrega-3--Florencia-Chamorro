function deleteItem(event) {
    event.target.parentElement.remove();
    calcularPrecioTotal();

}


function calcularPrecioTotal() {
    const precioTotalElement = this.document.querySelector("#precioTotal");
    const listDeCarrito = document.querySelectorAll(".bEliminar");
    let precioTotal = 0;
    if (listDeCarrito.length > 0) {
        listDeCarrito.forEach(element => {
            precioTotal += parseInt(element.dataset.precio);
        });
    }

    precioTotalElement.innerHTML = precioTotal;

}

window.addEventListener('load', function () {
    console.log('All assets are loaded')





    function addToList(nombre, precio) {
        const listContainer = this.document.querySelector("#listContainer");
        const child = document.createElement("li");
        child.dataset.precio = precio;
        child.classList.add("bEliminar");
        const contentChild = `
        <p>${nombre}</p> 
        <button onclick="deleteItem(event)" >eliminar producto</button>
        `;
        child.innerHTML = contentChild;
        listContainer.appendChild(child);

        calcularPrecioTotal();
    }

    const botonAngel = document.querySelector('#botonAngel');
    botonAngel.addEventListener('click', () => addToList("Angel y demonio", 50000));

    const botonCher = document.querySelector('#botonCher');
    botonCher.addEventListener('click', () => addToList("Cher", 35500));

    const botonIrresistible = document.querySelector('#botonIrresistible');
    botonIrresistible.addEventListener('click', () => addToList("Irresistible", 15500));

    const botonMiss = document.querySelector('#botonMiss');
    botonMiss.addEventListener('click', () => addToList("Miss Dior", 27000));

    const botonJadore = document.querySelector('#botonJadore');
    botonJadore.addEventListener('click', () => addToList("Jadore", 40000));



})