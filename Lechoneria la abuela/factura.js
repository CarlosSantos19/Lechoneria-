window.onload = function() {
  // Obtener los detalles del pedido almacenados en localStorage
  var productDetails = JSON.parse(localStorage.getItem('lastProductDetails'));

  // Verificar si hay detalles de pedido almacenados
  if (productDetails) {
      // Mostrar los detalles del pedido en la página de pago
      document.getElementById("product-name").textContent = productDetails.name;
      document.getElementById("product-option").textContent = productDetails.option;
      document.getElementById("product-price").textContent = "$" + productDetails.price.toFixed(2);
  } else {
     // Si no hay detalles de pedido, mostrar un mensaje de error
     console.error('No se encontraron detalles del pedido en localStorage.');
      
  }
  function confirmPayment() {
    // Aquí puedes agregar cualquier lógica adicional antes de redirigir, si es necesario
    window.location.href = "https://transacciones.nequi.com/bdigital/login.jsp";
  }
  
  document.getElementById("confirm-button").addEventListener("click", confirmPayment);

  function finalizarPayment() {
    // Aquí puedes agregar cualquier lógica adicional antes de redirigir, si es necesario
    window.location.href = "index.html";
  }
  
  document.getElementById("finalizar-button").addEventListener("click", finalizarPayment);
  
}
