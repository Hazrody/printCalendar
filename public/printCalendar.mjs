import createCalendar from '../node_modules/calendar/calendar.js';

/**
 * Listener pour le bouton générer calendrier
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Valeur mois selectionnée
     * @type {HTMLElement}
     */
    const monthSelect = document.getElementById('month');
    /**
     * Valeur année selectionné
     * @type {HTMLElement}
     */
    const yearInput = document.getElementById('year');

    /**
     * Le bouton
     * @type {HTMLElement}
     */
    const generateButton = document.getElementById('generate-calendar');

    /**
     * évènement déclanché à l'appuie du bouton
     */
    generateButton.addEventListener('click', () => {
        const processCalendar = document.getElementById('process-calendar');
        processCalendar.innerHTML = createCalendar(monthSelect.value, yearInput.value);
    });
});
