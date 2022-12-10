const url = "http://localhost:3000/add"

const botonSend = document.getElementById("botonSend");

botonSend.addEventListener("click", function() {
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    const dataBody = {
        name: name,
        email: email,
    }

    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*"
        },
        body: JSON.stringify(dataBody)
    }

    fetch(url, options)
    alert("Gracias por registrarte <3")
})
