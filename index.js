const row = document.getElementById('row');


function createCard(phone) {
    return`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${phone.name}</h5>
      <p class="card-text">${phone.description}</p>
      <p class="card-text">${phone.price}</p>
      <a href="#" class="btn btn-primary more-info" id = "element-${phone.id}">Go somewhere</a>
    </div>
  </div>

    `
}


document.addEventListener('DOMContentLoaded', function() { 
fetch("https://auth-rg69.onrender.com/api/products/all", {
    method: 'GET'
})

.then(res => res.json())
.then(data => {
    if (data.length) {
        data.forEach(phone => {
            let card = createCard(phone);
            row.innerHTML += card;
        });
        
        let moreButtons = document.querySelectorAll('a.more-info'); 
       moreButtons.length && moreButtons.forEach(button => {
        button.addEventListener('click', function(){
            let elId = this.getAttribute('id').substring(8);
            if (elId) {
                window.location.assign(`http://127.0.0.1:5500/pages/item.html?id=${elId} `)
            }
        })
       })
    }
})
.catch(err => {
console.log(err);
});

});