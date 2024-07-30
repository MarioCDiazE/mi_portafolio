document.addEventListener('DOMContentLoaded', () => {
    const contactoHTML = `
        <section id="contacto">
            <h2>Contacto</h2>
            <form id="contact-form" class="row g-3">
                <div class="col-md-6">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" id="nombre" class="form-control" required>
                </div>
                <div class="col-md-6">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" class="form-control" required>
                </div>
                <div class="col-12">
                    <label for="mensaje" class="form-label">Mensaje</label>
                    <textarea id="mensaje" class="form-control" rows="4" required></textarea>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </div>
            </form>
        </section>
    `;

    const contactButton = document.getElementById('contact-button');

    contactButton.addEventListener('click', () => {

        if (!document.querySelector('#contacto')) {
            const contactoSection = document.createElement('div');
            contactoSection.innerHTML = contactoHTML;

            const footer = document.querySelector('footer');
            footer.appendChild(contactoSection);

            contactButton.remove(); 
            contactoSection.scrollIntoView();

            const contactForm = document.getElementById('contact-form');
            contactForm.addEventListener('submit', (event) => {
                event.preventDefault();
                alert('Formulario enviado con éxito');
                location.reload();
            });
        }
    });
});