function showValues() {

    (() => {
        'use strict'
        // Aplica para todos os campos do form a validação
        const forms = document.querySelectorAll('.needs-validation')

        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    event.preventDefault();
                    let User_Nome = document.querySelector("#name").value;
                    let User_Sobre_Nome = document.querySelector("#sobrenome").value;
                    let User_Email = document.querySelector("#email").value;
                    let saida = document.querySelector("#saida");
                    saida.innerHTML = `Seu nome é ${User_Nome} ${User_Sobre_Nome} e seu e-mail é ${User_Email}.`;
                }

                form.classList.add('was-validated')
            }, false)

        })
    })()

}
