function submitForm(event){
    event.preventDefault();
    let form = document.querySelector('form').elements;
    console.log(form);
    fetch('/save-form2', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            "input-0" : form[0].value,
            "input-1" : form[1].value,
        })
    })
        .then(res => res.text())
        .then(res => console.log(res));
}


document.querySelector('form').addEventListener('submit', submitForm);