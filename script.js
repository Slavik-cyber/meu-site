document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura os dados do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Exibe uma mensagem de confirmação
    alert(`Obrigado, ${name}! Entraremos em contato através do email: ${email}.`);
});
