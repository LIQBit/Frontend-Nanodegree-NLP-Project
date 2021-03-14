function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    postText({url:formText})
    console.log({url:formText});
}

// post data function - send data to server
export const postText = (data = {}) => {
    const response = fetch('http://localhost:8081/analysis', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then((data) => updateUI(data))
        .catch((error) => {
            console.log('error', error);
        });
        
}

function updateUI(data) {
    console.log(data)
    document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`;
    document.getElementById('subjectivity').innerHTML = `Subjectivity ${data.subjectivity}`;
    document.getElementById('irony').innerHTML = `Irony ${data.irony}`;
    document.getElementById('score').innerHTML = `Score Tag: ${data.score_tag}`;
}

export { handleSubmit }
