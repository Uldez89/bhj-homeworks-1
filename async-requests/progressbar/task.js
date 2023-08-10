const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const formData = new FormData(document.forms.form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState !== 4) {
            let progress = document.getElementById('progress');
            setInterval(() => {
                progress.value += 0.1;
            }, 100) 
        }
    })
    xhr.send(formData);
    e.preventDefault();
})
