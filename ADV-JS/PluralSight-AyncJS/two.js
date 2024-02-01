// nested calls
let statuses = [];
let xhr = new XMLHttpRequest();

xhr.open("GET", "url");
xhr.onload = () => {
  statuses = JSON.parse(xhr.responseText);

  let xhr2 = new XMLHttpRequest();
  xhr.open("GET","url");
  xhr.onload = () => {
    const orders = JSON.parse(xhr2.responseText);
    const fullOrders = statuses.mao(o => {
      o.orderStatus = statuses.find(s => s.id === o.orderStatusId).description;
      return o;
    })
    showOrderList("#order-list", fullOrders);
  };
  xhr2.send();
}
xhr.send();