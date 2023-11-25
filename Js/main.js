// Dark BTN


const darkbtn = document.getElementById('darkbtn');
const body = document.body
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
if (isDarkMode){
    body.classList.add('dark-mode');
    darkbtn.checked = true;
}
darkbtn.addEventListener('change', () =>{
    if (darkbtn.checked){
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode' , 'enabled');
    }
    else{
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});
// footer

document.getElementById('year').innerHTML = new Date().getFullYear();
