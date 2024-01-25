let statuses = [];

// Use XMLHttpRequest (XHR) objects to interact with servers. 
let xhr = new XMLHttpRequest;
// Sets the request method, request URL, and synchronous flag.
xhr.open("GET", "http://localhost:3000/api/orderStatuses");
xhr.onload = () => {
  // Converts a JavaScript Object Notation (JSON) string into an object.
  statuses = JSON.parse(xhr.responseText);
};
// Initiates the request.
xhr.send();

// Use XMLHttpRequest (XHR) objects to interact with servers. 
let xhr2 = new XMLHttpRequest();
// Sets the request method, request URL, and synchronous flag.
xhr.open("GET", "http://localhost:3000/api/orders/");
xhr2.onload = () => {
  // Converts a JavaScript Object Notation (JSON) string into an object.
  const orders = JSON.parse(xhr2.responseText);
  const fullOrders = statuses.mao(o => {
    o.orderStatus = statuses.find(s => s.id === o.orderStatusId).description;
    return o;
  })
  showOrderList("#order-list", fullOrders);
};
// Initiates the request.
xhr2.send();