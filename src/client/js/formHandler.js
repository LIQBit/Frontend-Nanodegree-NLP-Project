function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    postText({txt:formText})
    console.log({txt:formText});
}

// post data function - send data to server
const postText = (data = {}) => {
    const response = fetch('http://localhost:8081/analysis', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url: url}),
    })
        .then(res => res.json())
        .then((data) => updateUI(data))
        .catch((error) => {
            console.log('error', error);
        });
            function updateUI(data) {
                console.log(data);
                //just console.log data for now

            }
    

}

export { handleSubmit }
