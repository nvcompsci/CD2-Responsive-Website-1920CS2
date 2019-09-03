//const cannot be changed
// [] is an array {} is an object
// this format is called JSON
const items = [
    {
        "name":"t-shirt",
        "price":12.99,
        "supply":4,
        "shippingCost":2.99,
        "img":"tshirt.png"
    },
    {
        "name":"coffee mug",
        "price":4.99,
        "supply":0,
        "shippingCost":2.99,
        "img":"coffeeMug.jpg"
    },
]

function loadStore() {
    let container = document.createElement('div')
    container.innerHTML = items.map( item => `<div class="card">
<h3>${item.name}</h3>
${item.supply <= 0 ? "<h2>SOLD OUT!</h2>" : ''}
<p>$${item.price}</p>
<img class="item" src=${item.img}>
</div>` ).join('')
    document.querySelector('article').append(container)
    console.log(container.innerHTML)
}










