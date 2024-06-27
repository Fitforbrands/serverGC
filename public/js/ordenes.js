const listOrders = document.querySelector(".listOrdenes");
const total = document.querySelector(".total");

const url = "http://127.0.0.1:3000/api/orders";
let data;

let requestOptions = {
  method: "GET",
  redirect: "follow",
};

//  GET de list

fetch(url, requestOptions)
  .then((response) => response.text())
  .then((result) => buscaEnOrdenes(result))
  .catch((error) => console.log("error", error));

// busca los parametros indicados con un map

function buscaEnOrdenes(result) {
  const pedidos = JSON.parse(result);
  console.log(pedidos);
  const listado = pedidos.map((orderObj) => {
    const { id } = orderObj.order;
    const { name } = orderObj.order.client;
    return { id, name };
  });
  console.log(listado);
  presentaresultado(listado);
}

function presentaresultado(listado) {
  // Mostrar resultados en la pantalla
  const qty = listado.length;
  total.innerHTML = `La cantidad de pedidos actual es: ${qty}`;
  listado.forEach((order) => {
    const listItem = document.createElement("li");
    listItem.textContent = `ID: ${order.id}, Client Name: ${order.name}`;
    listOrders.appendChild(listItem);
  });
}
