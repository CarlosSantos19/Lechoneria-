var productImage; // Declarar la variable productImage aquí para que esté disponible globalmente

function showProductDetails(productId) {
    console.log("Mostrando detalles del producto:", productId);
    var productDetailsContainer = document.getElementById("product-details-container");
    productDetailsContainer.classList.remove("hidden");
    
    
    var productName = document.getElementById("product-name");
    productImage = document.getElementById("product-image"); // Asignar el valor de productImage aquí
    var sizeSelect = document.getElementById("size");
    
    if (productId === 'LECHONA' ) {
      productName.textContent = "LECHONA:Plato tradicional colombiano que contiene cerdo entero asado relleno de cebolla, guisantes, patatas, hierbas frescas y diversas especias acompañado de arepa y chicharrón";
      productImage.src = "Lechona.jfif";
      // Configurar opciones de tamaño específicas para la lechona
      sizeSelect.innerHTML = `
      <option value="cojin 15 platos"  data-price="170000">cojín 15 platos</option>
      <option value="cojin 25 platos" data-price="280000">cojín 25 platos</option>
      <option value="cojin 30 platos" data-price="330000">Cojín 30 platos</option>
      <option value="cojin 45 platos" data-price="370000">cojín 45 platos</option>
      <option value="cojin 50 platos" data-price="410000">cojín 50 platos</option>
      <option value="cojin 60 platos" data-price="450000">Cojín 60 platos</option>
      <option value="cojin 80 platos" data-price="520000">cojín 80 platos</option>
      <option value="cojin 100 platos" data-price="720000">cojín 100 platos</option>
      `;
    } else if (productId === 'CHORIZOS') {
      productName.textContent = "CHORIZOS: Delicioso chorizo acompañado de arepa";
      productImage.src = "Chorizos.jfif";
      sizeSelect.innerHTML = `
      <option value="papa salada" data-price="25000">Papa Salada</option>
      <option value="papa criolla" data-price="25000">Papa Criolla</option>
      `;
    } else if (productId === 'CODITOS') {
      productName.textContent = "CODITOS: Huesos codillos acompañado de papas saladas o criollas";
      productImage.src = "Coditos.jfif";
      sizeSelect.innerHTML = `
      <option value="papa salada" data-price="25000">Papa Salada</option>
      <option value="papa criolla" data-price="25000">Papa Criolla</option>
      `;
    } else if (productId === 'COSTILLAS') {
      productName.textContent = "COSTILLAS: Costillas de Cerdo acompañada con papas saladas o criollas";
      productImage.src = "Costilla.jfif";
      sizeSelect.innerHTML = `
      <option value="papa salada" data-price="25000">Papa Salada</option>
      <option value="papa criolla" data-price="25000">Papa Criolla</option>
      `;
    } else if (productId === 'PANCETA') {
      productName.textContent = "PANCETA: Deliciosa panceta acompañada con papas saladas o criollas";
      productImage.src = "Panzeta.jfif";
      sizeSelect.innerHTML = `
      <option value="papa salada" data-price="25000">Papa Salada</option>
      <option value="papa criolla" data-price="25000">Papa Criolla</option>
      `;
    } else if (productId === 'TAMALES') {
        productName.textContent = "TAMALES: Deliciosos Tamales tolimenses acompañado con arepa";
        productImage.src = "Tamales.jfif";
        sizeSelect.innerHTML = `
        <option value="tamal pequeño" data-price=6000>Tamal Pequeño</option>
        <option value="tamal grande" data-price=7000>Tamal Grande</option>
        `;
    } else {
      // Restablecer opciones de tamaño genéricas para otros productos
      sizeSelect.innerHTML = `
      <option value="cojin 15 platos"  data-price="170000">cojín 15 platos</option>
      <option value="cojin 25 platos" data-price="280000">cojín 25 platos</option>
      <option value="cojin 30 platos" data-price="330000">Cojín 30 platos</option>
      <option value="cojin 45 platos" data-price="370000">cojín 45 platos</option>
      <option value="cojin 50 platos" data-price="410000">cojín 50 platos</option>
      <option value="cojin 60 platos" data-price="450000">Cojín 60 platos</option>
      <option value="cojin 80 platos" data-price="520000">cojín 80 platos</option>
      <option value="cojin 100 platos" data-price="720000">cojín 100 platos</option>
      `;
    }
  }

function acceptProduct() {
    console.log("Producto aceptado");
  
    // Obtener los detalles del producto
    var productName = document.getElementById("product-name").textContent;
    
    var selectedOption = document.querySelector("#size option:checked").textContent;
    var productPrice = document.querySelector("#size option:checked").dataset.price;
   
    // Calcular el precio total sumando el precio del producto y el valor del select
    var totalPrice = parseInt(productPrice);
  
    // Crear una nueva fila en la tabla
    var summaryTableBody = document.getElementById("summary-table-body");
    var newRow = summaryTableBody.insertRow();
    newRow.innerHTML = `
   
      <td><button onclick="removeItem(this)">Eliminar</button></td>
    `;
    
    // Insertar celdas con los detalles del producto en la nueva fila
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
  
    cell1.innerHTML = `<img src="${productImage.src}" alt="${productName}" style="max-width: 50px;"> ${productName}`;
    cell2.textContent = selectedOption;
    cell3.textContent = "$" + totalPrice.toFixed(2);
  
    // Botones de añadir y cancelar
    var addButton = document.createElement("button");
    addButton.textContent = "Añadir";
    addButton.onclick = redirectToAdd; // Asignar la función redirectToAdd al evento onclick
    
    cell4.appendChild(addButton);

    var productDetails = {
      name: productName,
      option: selectedOption,
      price: parseFloat(productPrice) // Convertir el precio a un número flotante
    };

     // Agregar mensaje de depuración para verificar los detalles del pedido
     console.log("Detalles del pedido:", productDetails);
     
    // Mostrar la tabla de resumen o carrito de compras (si estaba oculta)
    var summaryTable = document.getElementById("summary-table");
    summaryTable.classList.remove("hidden");
  
    // Opcional: Actualizar el precio total del pedido
    updateTotalPrice(totalPrice);
    // Redirigir a la página de factura
    function redirectToAdd() {
        window.location.href = "facturados.html";
    }
    
    // Guardar detalles del producto en localStorage
    var productDetails = {
      name: productName,
      option: selectedOption,
      price: totalPrice
  };
  localStorage.setItem('lastProductDetails', JSON.stringify(productDetails));
  console.log("Detalles del pedido guardados en localStorage:", productDetails);

      // Redirigir al usuario a la página de pago
      window.location.href = "";

}
function updateTotalPrice(totalPrice) {
    // Aquí puedes implementar la lógica para actualizar el precio total del pedido en tu interfaz de usuario.
    // Por ejemplo, podrías actualizar el texto en un elemento HTML que muestra el precio total.
    var totalPriceElement = document.getElementById("total-price");
    totalPriceElement.textContent = "$" + totalPrice.toFixed(2);
     // Función para redirigir a la página de factura
     if (totalPriceElement) {
      totalPriceElement.textContent = "$" + totalPrice.toFixed(2);
    } else {
      console.error('No se encontró el elemento con el id "total-price".');
    }

         // Actualizar el precio total en la página de la factura
    var totalPriceInvoiceElement = document.getElementById("total-price-invoice");
    totalPriceInvoiceElement.textContent = "$" + totalPrice.toFixed(2);


    window.onload = function() {
      var totalPriceInvoiceElement = document.getElementById("total-price-invoice");
      if (totalPriceInvoiceElement) {
          totalPriceInvoiceElement.textContent = "$" + totalPrice.toFixed(2);
      } else {
          console.error('No se encontró el elemento con el ID "total-price-invoice".');
      }
  };
  
  
} 