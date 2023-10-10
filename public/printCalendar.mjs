import createCalendar from '../node_modules/calendar/calendar.js';

document.addEventListener('DOMContentLoaded', () => {
    const monthSelect = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const generateButton = document.getElementById('generate-calendar');

    generateButton.addEventListener('click', () => {
        const processCalendar = document.getElementById('process-calendar');
        processCalendar.innerHTML = createCalendar(monthSelect.value, yearInput.value);
    });
});
