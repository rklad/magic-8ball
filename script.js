function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:');

    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!'
        document.getElementById('response-text').classList = 'text-danger' //changes HTML classes
        document.getElementById('response-image').src = '#BAD/BROKENIMG'
    }

    if (!question.trim()) { //.trim cuts off any spaces after the last physical character and leaves you with an empty string which is a falsy
        alert('Please enter a valid question!')
        return //just like break on a switch
    } 

}