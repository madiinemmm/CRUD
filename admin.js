const tbody = document.getElementById('tbody');

function createRowTable(phone) {
   return`
              <tr>
                <td>1</td>
                <td>Iphone</td>
                <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                <td>1</td>
                <td>Active</td>
                <td>
                    <i class="bi bi-archive text-danger"></i>
                    <i class="bi bi-pen text-success"></i>
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
        
        
    }
   })
   .catch(err => {
    console.log(err);
   });
});