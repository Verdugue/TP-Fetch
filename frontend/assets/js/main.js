const url = "http://localhost:3000/sneakers"
const btn = document.querySelector(".sneaker-btn");

btn.addEventListener("click", getSneakers);


function getSneakers  () {
    fetch(url)
        .then(response => {
        return response.json()
        })
        .then(data => {
        console.log(data)
        })
        .catch(error => {
        console.log("erreur : " + error);
    });
}