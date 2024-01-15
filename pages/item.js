const row = document.getElementById('row');

function createHtml(data) {
    return`
    <h3 class ="txt">${data.name}</h3>
    <h3 class ="txt">${data.price}</h3>
    <p class ="txt">${data.description}</p>
    <p class ="txt">${data.category_id}</p>
    `;
}


document.addEventListener('DOMContentLoaded', function() {
    let elId = window.location.href.substring(window.location.href.search('id=') + 3);
    if (elId && elId.length == 36) {
        fetch(`https://auth-rg69.onrender.com/api/products/${elId}`)
        .then(res => res.json())
        .then(data => {
            let block = createHtml(data);
            row.innerHTML = block;
        })
        .catch(err => {
            console.log(err);
        })
    } else {
        window.location.assign("http://127.0.0.1:5500/index.html");
    }
});