document.addEventListener('DOMContentLoaded', () => {
    // Inicializar el gráfico
    const ctx = document.getElementById('statusChart').getContext('2d');
    const statusChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
            datasets: [{
                label: 'Seguimiento de Procesos',
                data: [10, 20, 15, 25, 30],
                backgroundColor: 'rgba(0, 123, 255, 0.5)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Inicializar el calendario
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        editable: true,
        events: [], // Aquí puedes cargar eventos desde una API si es necesario
        eventClick: function(info) {
            // Aquí puedes redirigir o mostrar detalles del evento
            alert('Evento: ' + info.event.title);
        }
    });
    calendar.render();
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('expanded');
    const mainContent = document.querySelector('.main-content');
    mainContent.style.marginLeft = sidebar.classList.contains('expanded') ? '250px' : '60px';
}

function validateDocumentNumber() {
    const docNumber = document.getElementById('docNumber').value;
    if (docNumber.length < 5) {
        document.getElementById('docNumber').setCustomValidity('Número de documento debe tener al menos 5 caracteres.');
    } else {
        document.getElementById('docNumber').setCustomValidity('');
    }
}

function validateDocumentName() {
    const docName = document.getElementById('docName').value;
    if (docName.length < 3) {
        document.getElementById('docName').setCustomValidity('Nombre del documento debe tener al menos 3 caracteres.');
    } else {
        document.getElementById('docName').setCustomValidity('');
    }
}

function searchDocument() {
    const docType = document.getElementById('docType').value;
    const docNumber = document.getElementById('docNumber').value;
    const docName = document.getElementById('docName').value;

    if (docNumber.length < 5 || docName.length < 3) {
        alert('Por favor, complete todos los campos correctamente.');
        return;
    }

    // Aquí puedes agregar la lógica para realizar la búsqueda y conectarte a la API
    alert(`Buscando ${docType} con número ${docNumber} y nombre ${docName}`);
}

function goToHome() {
    window.location.href = '#';
}

function openMessages() {
    alert('Abrir mensajes');
}

function openNotifications() {
    alert('Abrir notificaciones');
}
