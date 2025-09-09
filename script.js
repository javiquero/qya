// Funcionalidad del menú móvil
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    const menuToggle = document.querySelector('.menu-toggle');
    
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

// Funcionalidad del banner de cookies


// Funcionalidad del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    // Configurar menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Inicializar modales
    initModals();
    
    // Inicializar banner de cookies
    initCookieBanner();
});

// Modal functionality
function initModals() {
    // Create modals HTML
    createModalsHTML();
    
    // Add event listeners for modal links
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href="politica-cookies.html"]')) {
            e.preventDefault();
            openModal('politicaCookiesModal');
        }
        if (e.target.matches('.modal-close') || e.target.matches('.modal')) {
            if (e.target === e.currentTarget || e.target.matches('.modal-close')) {
                closeModal();
            }
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Función para inicializar el banner de cookies
function initCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');
    const rejectBtn = document.getElementById('rejectCookies');
    
    // Verificar si ya se han aceptado las cookies
    if (localStorage.getItem('cookiesAccepted')) {
        banner.style.display = 'none';
        return;
    }
    
    // Mostrar el banner
    banner.style.display = 'block';
    
    // Event listener para aceptar cookies
    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        banner.style.display = 'none';
    });
    
    // Event listener para rechazar cookies
    rejectBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'false');
        banner.style.display = 'none';
    });
}

function createModalsHTML() {
    const modalsHTML = `
        <!-- Modal Uso de Cookies -->
        <div id="uso-cookies" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>🍪 Uso de Cookies</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <h3>¿Qué son las cookies?</h3>
                    <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Nos ayudan a mejorar tu experiencia de navegación y a proporcionar funcionalidades esenciales.</p>
                    
                    <h3>¿Cómo utilizamos las cookies?</h3>
                    <p>En QYA Asesoría utilizamos cookies para:</p>
                    <ul>
                        <li><strong>Funcionalidad esencial:</strong> Para que el sitio web funcione correctamente</li>
                        <li><strong>Preferencias del usuario:</strong> Para recordar tus preferencias sobre cookies</li>
                        <li><strong>Seguridad:</strong> Para proteger tu sesión y datos</li>
                        <li><strong>Mejora del servicio:</strong> Para entender cómo interactúas con nuestro sitio</li>
                    </ul>
                    
                    <h3>Tipos de cookies que utilizamos</h3>
                    
                    <h4>Cookies técnicas (necesarias)</h4>
                    <p>Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar:</p>
                    <ul>
                        <li><strong>cookiesAccepted:</strong> Almacena tu preferencia sobre la aceptación de cookies</li>
                        <li><strong>sessionId:</strong> Mantiene tu sesión activa durante la visita</li>
                    </ul>
                    
                    <h4>Cookies de análisis (opcionales)</h4>
                    <p>Nos ayudan a entender cómo los visitantes interactúan con el sitio web:</p>
                    <ul>
                        <li>Actualmente no utilizamos cookies de análisis de terceros</li>
                        <li>Si en el futuro implementamos herramientas como Google Analytics, solicitaremos tu consentimiento</li>
                    </ul>
                    
                    <h3>Gestión de cookies</h3>
                    <p>Puedes gestionar tus preferencias de cookies de las siguientes maneras:</p>
                    
                    <h4>En nuestro sitio web</h4>
                    <p>Cuando visites nuestro sitio por primera vez, aparecerá un banner donde podrás:</p>
                    <ul>
                        <li>Aceptar todas las cookies</li>
                        <li>Rechazar cookies no esenciales</li>
                        <li>Configurar tus preferencias detalladamente</li>
                    </ul>
                    
                    <h4>En tu navegador</h4>
                    <p>También puedes gestionar las cookies directamente desde la configuración de tu navegador:</p>
                    <ul>
                        <li><strong>Chrome:</strong> Configuración > Privacidad y seguridad > Cookies y otros datos de sitios</li>
                        <li><strong>Firefox:</strong> Opciones > Privacidad y seguridad > Cookies y datos del sitio</li>
                        <li><strong>Safari:</strong> Preferencias > Privacidad > Gestionar datos de sitios web</li>
                        <li><strong>Edge:</strong> Configuración > Cookies y permisos de sitio</li>
                    </ul>
                    
                    <h3>Consecuencias de desactivar cookies</h3>
                    <p>Si decides desactivar las cookies:</p>
                    <ul>
                        <li>Algunas funcionalidades del sitio pueden no funcionar correctamente</li>
                        <li>Tu experiencia de navegación puede verse afectada</li>
                        <li>Tendrás que volver a configurar tus preferencias en cada visita</li>
                    </ul>
                    
                    <h3>Contacto</h3>
                    <p>Si tienes alguna pregunta sobre nuestro uso de cookies, puedes contactarnos:</p>
                    <ul>
                        <li><strong>Email:</strong> qyasesoria@gmail.com</li>
                        <li><strong>Teléfono:</strong> 602573825</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <!-- Política de Cookies Modal -->
        <div id="politicaCookiesModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Política de Cookies</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <h2>¿Qué son las cookies?</h2>
                    <p>En inglés, el término "cookie" significa galleta, pero en el ámbito de la navegación web, una "cookie" es algo completamente distinto. Cuando accede a nuestro Sitio Web, en el navegador de su dispositivo se almacena una pequeña cantidad de texto que se denomina "cookie". Este texto contiene información variada sobre su navegación, hábitos, preferencias, personalizaciones de contenidos, etc...</p>
                    
                    <h2>¿Para qué se utilizan las cookies en esta web?</h2>
                    <p>Las cookies son una parte esencial de cómo funciona el Sitio Web. El objetivo principal de nuestras cookies es mejorar su experiencia en la navegación. Por ejemplo, para recordar sus preferencias (idioma, país, etc.) durante la navegación y en futuras visitas.</p>
                    
                    <h2>¿Para qué NO se utilizan las cookies en esta web?</h2>
                    <p>En las cookies que utilizamos no se almacena información sensible de identificación personal como su nombre, dirección, tu contraseña, etc...</p>
                    
                    <h2>¿Quién utiliza la información almacenada en las cookies?</h2>
                    <p>La información almacenada en las cookies de nuestro Sitio Web es utilizada exclusivamente por nosotros, a excepción de aquellas identificadas más adelante como "cookie de terceros".</p>
                    
                    <h2>¿Cómo puede evitar el uso de cookies en este Sitio Web?</h2>
                    <p>Si prefiere evitar el uso de las cookies, puede RECHAZAR su uso o puede CONFIGURAR las que quiere evitar y las que permite utilizar.</p>
                    
                    <h2>¿Qué tipos de cookies se utilizan en esta página web?</h2>
                    
                    <h3>SEGÚN LA ENTIDAD QUE LO GESTIONA</h3>
                    <h4>Cookies propias:</h4>
                    <p>Son aquellas que se envían al equipo terminal del Usuario desde un equipo o dominio gestionado por el propio editor.</p>
                    
                    <h4>Cookies de terceros:</h4>
                    <p>Son aquellas que se envían al equipo terminal del Usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad.</p>
                    
                    <h3>SEGÚN SU FINALIDAD</h3>
                    <h4>Cookies técnicas:</h4>
                    <p>Son aquellas necesarias para la navegación y el buen funcionamiento de nuestro Sitio Web.</p>
                    
                    <h4>Cookies de análisis:</h4>
                    <p>Permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del Sitio Web.</p>
                    
                    <h2>Detalle de cookies utilizadas en esta web</h2>
                    
                    <h3>Cookies técnicas y funcionales</h3>
                    <ul>
                        <li><strong>cookiesAccepted:</strong> Cookie propia que almacena la preferencia del usuario sobre la aceptación o rechazo de cookies. Duración: 1 año.</li>
                        <li><strong>sessionId:</strong> Cookie de sesión que identifica la sesión del usuario durante su visita. Se elimina al cerrar el navegador.</li>
                    </ul>
                    
                    <h2>Contacto</h2>
                    <p>Si tiene alguna duda sobre esta Política de Cookies, puede contactarnos a través de:</p>
                    <ul>
                        <li>Email: qyasesoria@gmail.com</li>
                        <li>Teléfono: 602573825</li>
                    </ul>
                    
                    <p><strong>Última actualización:</strong> Enero 2024</p>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalsHTML);
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
    document.body.style.overflow = 'auto';
}

// Formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.querySelector('.submit-button');
    
    // Solo ejecutar si estamos en la página de contacto
    if (!contactForm || !submitButton) {
        return;
    }
    
    // Validación del formulario
    function validateForm() {
        const nombre = document.getElementById('nombre').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        
        // Validar campos requeridos
        if (!nombre || !apellidos || !email || !telefono) {
            alert('Por favor, completa todos los campos obligatorios marcados con *');
            return false;
        }
        
        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, introduce un email válido');
            return false;
        }
        
        // Validar formato de teléfono (números y espacios)
        const telefonoRegex = /^[0-9\s+()-]+$/;
        if (!telefonoRegex.test(telefono)) {
            alert('Por favor, introduce un número de teléfono válido');
            return false;
        }
        
        return true;
    }
    
    // Manejar envío del formulario
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // Cambiar texto del botón mientras se procesa
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            // Simular envío (en una implementación real, aquí harías la petición al servidor)
            setTimeout(() => {
                alert('¡Gracias por contactarnos! Te responderemos lo antes posible.');
                
                // Limpiar formulario
                contactForm.reset();
                
                // Restaurar botón
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        }
    });
    
    // Smooth scroll para los enlaces de "Contáctanos"
    const ctaButtons = document.querySelectorAll('a[href="#contact"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    // Efectos de hover para mejorar la interactividad
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
    
    // Animación de entrada para elementos cuando se hace scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Aplicar animación a las secciones principales
    const sections = document.querySelectorAll('.hero, .about, .services-individuals, .contact-form-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Funcionalidad adicional para mejorar la experiencia de usuario
    
    // Auto-formatear número de teléfono
    const telefonoInput = document.getElementById('telefono');
    telefonoInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 3) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
        }
        e.target.value = value;
    });
    
    // Contador de caracteres para el textarea
    const mensajeTextarea = document.getElementById('mensaje');
    const maxLength = 500;
    
    // Crear contador
    const counter = document.createElement('div');
    counter.style.textAlign = 'right';
    counter.style.fontSize = '0.8rem';
    counter.style.color = '#666';
    counter.style.marginTop = '5px';
    mensajeTextarea.parentElement.appendChild(counter);
    
    function updateCounter() {
        const remaining = maxLength - mensajeTextarea.value.length;
        counter.textContent = `${remaining} caracteres restantes`;
        
        if (remaining < 50) {
            counter.style.color = '#c41e3a';
        } else {
            counter.style.color = '#666';
        }
    }
    
    mensajeTextarea.setAttribute('maxlength', maxLength);
    mensajeTextarea.addEventListener('input', updateCounter);
    updateCounter(); // Inicializar contador
});

// Funcionalidad para el menú responsive (si se necesita en el futuro)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('mobile-active');
}

// Función para validar formularios en tiempo real
function setupRealTimeValidation() {
    const inputs = document.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.style.borderColor = '#c41e3a';
                this.style.boxShadow = '0 0 5px rgba(196, 30, 58, 0.3)';
            } else {
                this.style.borderColor = '#28a745';
                this.style.boxShadow = '0 0 5px rgba(40, 167, 69, 0.3)';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(196, 30, 58)' && this.value.trim() !== '') {
                this.style.borderColor = '#ddd';
                this.style.boxShadow = 'none';
            }
        });
    });
}

// Inicializar validación en tiempo real cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', setupRealTimeValidation);