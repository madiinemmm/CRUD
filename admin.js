const tbody = document.getElementById('tbody');
const name = document.getElementById('name');
const price = document.getElementById('price');
const category = document.getElementById('category');
const description = document.getElementById('description');
const button = document.getElementById('button');
const form = document.getElementById('form');
let bacDataLength = 0;


function createRowTable(phone, index) {
   return`
              <tr>
                <td>${index}.</td>
                <td>${phone.name}</td>
                <td>${phone.description}</td>
                <td>${phone.category_id}</td>
                <td>${phone.price}</td>
                <td>${phone.status}</td>
                <td data-id = '${phone.id}' class = 'd-flex gap-5'>
                    <i role="button" class="bi bi-archive text-danger"></i>
                    <i role="button" class="bi bi-pen text-success"></i>
                </td>
              </tr>
              
             
   ` 
}

document.addEventListener('DOMContentLoaded', function(){
   fetch("https://auth-rg69.onrender.com/api/products/all", {
    method: 'GET'
   })
   .then(res => res.json())
   .then(data => {
    if (data.length) {
      bacDataLength = data.length;
     data.forEach((phone, index) => {
      let tr = createRowTable(phone, index + 1);
      tbody.innerHTML += tr;
     });

  const deleteButtons = document.querySelectorAll('td i.bi-archive');
  deleteButtons.length && deleteButtons.forEach(del => {
del.addEventListener('click', function() {
let isDelete = confirm('Are you sure you want to delete?');
if (isDelete) {
  let deleteId = this.parentNode.getAttribute('data-id');
  if (deleteId) {
   fetch(`https://auth-rg69.onrender.com/api/products/${deleteId}`, {
    method: "DELETE" 
  })

  .then(res => res.json())
  .then(data => {
    if (data.message) {
      window.location.reload();
    }
  })
  .catch(err => {
    console.log(err);
  })
  }
}
})
  })

  const editButtons = document.querySelectorAll("td i.bi-pen")
   editButtons.length && editButtons.forEach(edit => {
    edit.addEventListener('click', function() {
   
        let editId = this.parentNode.getAttribute('data-id');
        if (edit) {
           window.location.assign(`http://127.0.0.1:5500/update.html?id=${editId}`);
        }
       
      
    })

  

   });
    }
   })
   .catch(err => {
    console.log(err);
   });
});

   

function validate() {
  if (!name.value) {
    alert('Name is empty');
    name.focus();
    return false;
  }

  if (!price.value) {
    alert('Price is empty');
    price.focus();
    return false;
  }


  return true;
}


button && button.addEventListener('click', function(e) {
   e.preventDefault();
   if (validate(name, price, category, description)) {
    let phone = {
      name: name.value,
      price: price.value,
      description: description.value,
      price: price.value,
      status: 'active',
      category_id: category.value,
    }
   fetch("https://auth-rg69.onrender.com/api/products", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },

   body: JSON.stringify(phone)
   })

   .then(res => res.json())
   .then(data => {
 if (data.id) {
    let tr = createRowTable(data, bacDataLength + 1);
    bacDataLength++;
    tbody.innerHTML += tr;
 }
    
    form.reset();

   })
   .catch(err => {
    console.log(err);
   })
   } else {
    console.log('Validatsiyadan otmadi');
   }
});   



