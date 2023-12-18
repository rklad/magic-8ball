function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:');

    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!'
        document.getElementById('response-text').classList = 'text-danger' //changes HTML classes
        document.getElementById('response-image').src = "imgs/spongebob1.jpg"
    }

    if (!question.trim()) { //.trim cuts off any spaces after the last physical character and leaves you with an empty string which is a falsy
        alert('Please enter a valid question!')
        return //just like break on a switch
    } 


    const randomNumber = Math.floor(Math.random() * 8);

    let answer, image, color;

    switch(randomNumber) {
        case 0: 
        answer = "Yes";
        image = "imgs/checkmark.png" //change this
        color = "text-success"
        break;
        case 1:
        answer = "It is decidedly so"
        image = "imgs/checkmark.png"
        color = 'text-success'
        break;
        case 2:
        answer = "Reply hazy try again"
        image = "imgs/idk.jpg"
        color = "text-dark"
        break;
        case 3:
        answer = "Cannot predict now"
        image = "imgs/idk.jpg"
        color = "text-dark"
        break;
        case 4:
        answer = "Do not count on it"
        image = "imgs/wrong.webp"
        color = "text-danger"
        break;
        case 5:
        answer = "My sources say no"
        image = "imgs/wrong.webp"
        color = "text-danger"
        break;
        case 6:
        answer = "Outlook not so good"
        image = "imgs/wrong.webp"
        color = "text-danger"
        break;
        case 7:
        answer = "Signs point to yes"
        image = "imgs/checkmark.png"
        color = "text-succes"
        break;
    }

    console.log(answer)

    const responseText = document.getElementById('response-text')
    responseText.innerText = answer
    responseText.classList = `display-4 ${color}`
    document.getElementById('response-image').src = image

}