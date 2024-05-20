const axios = require('axios');

// Functie om een gratis domein te registreren bij Freenom
async function registerFreeDomain(domain, email) {
    try {
        const response = await axios.post('https://www.freenom.com/includes/domains/fn_register.php', {
            domain: domain,
            email: email
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Fout bij het registreren van het domein:', error.response.data);
        throw new Error('Fout bij het registreren van het domein');
    }
}

// Functie om de DNS-instellingen van het domein naar GitHub Pages te verwijzen
async function setupGitHubPages(domain, githubPagesURL) {
    // Implementeer de logica om de DNS-instellingen te configureren naar de GitHub Pages-servers
    console.log(`DNS-instellingen voor ${domain} configureren naar ${githubPagesURL}`);
    // Hier zou je gebruik kunnen maken van een externe service of API om de DNS-instellingen automatisch in te stellen
}

// Voorbeeldgebruik
const domain = 'ricardo-inc.eu'; // Vervang dit door de gewenste domeinnaam
const email = 'rifoneud@gmail.com'; // Vervang dit door je e-mailadres
const githubPagesURL = 'ricardo-inc.netlify.app/'; // Vervang dit door je GitHub Pages-URL

registerFreeDomain(domain, email)
    .then(() => setupGitHubPages(domain, githubPagesURL))
    .then(() => console.log('Domeinregistratie en DNS-configuratie voltooid'))
    .catch(err => console.error('Er is een fout opgetreden:', err.message));
