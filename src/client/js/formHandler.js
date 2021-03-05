function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/analysis')
    .then(res => res.json())
    .then(function(res) {
        console.log("response from /analysis",res);
        document.getElementById('results').innerHTML = res.message
    })
}

// post data function - send data to server


export { handleSubmit }
