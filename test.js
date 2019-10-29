const form = document.querySelector(".form-1");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const userList = document.querySelector(".list");
const msg = document.querySelector(".msg");

console.log(fname, lname);

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(fname.value ==='' || lname.value ==='') {
        msg.classList.add('error');
        msg.innerHTML = 'Täytä kaikki osat'

        setTimeout(() => msg.remove(), 3000)

        fname.value ==='';
        lname ==='';
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${fname.value}`, `${lname.value}`));
        li.innerHTML = `${fname.value} ${lname.value}`;
        
        userList.appendChild(li);
        fname.value ==='';
        lname.value ==='';
        
    }
    
}