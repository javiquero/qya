// Funcionalidad del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.querySelector('.submit-button');
    
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