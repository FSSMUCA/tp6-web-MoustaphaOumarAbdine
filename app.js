// Constantes pour les éléments du DOM
const form = document.getElementById('calculator-form');
const numAInput = document.getElementById('numA');
const numBInput = document.getElementById('numB');
const operationSelect = document.getElementById('operation');
const errorMessageDiv = document.getElementById('error-message');
const historyList = document.getElementById('history-list');

// Tableau de stockage de l'historique
const history = [];

// --- FONCTIONS DE GESTION DU DOM ET D'ERREURS ---

/**
 * Affiche ou masque la zone de message.
 * @param {string} message - Le message à afficher.
 * @param {boolean} isError - Vrai si c'est une erreur (style rouge), Faux pour succès/résultat (style vert).
 */
function displayMessage(message, isError = true) {
    errorMessageDiv.textContent = message;
    errorMessageDiv.style.display = 'block';

    // Applique le style approprié
    if (isError) {
        errorMessageDiv.style.backgroundColor = '#f8d7da'; // Rouge clair
        errorMessageDiv.style.color = '#721c24';
        errorMessageDiv.style.borderColor = '#0f0506ff';
    } else {
        errorMessageDiv.style.backgroundColor = '#d4edda'; // Vert clair
        errorMessageDiv.style.color = '#155724';
        errorMessageDiv.style.borderColor = '#c3e6cb';
    }
}

/**
 * Masque la zone de message.
 */
function clearMessage() {
    errorMessageDiv.style.display = 'none';
    errorMessageDiv.textContent = '';
}

/**
 * Met à jour dynamiquement la section Historique.
 */
function updateHistoryDOM() {
    historyList.innerHTML = ''; // Vider la liste

    if (history.length === 0) {
        const emptyLi = document.createElement('li');
        emptyLi.classList.add('empty-message');
        emptyLi.textContent = "Aucune opération effectuée.";
        historyList.appendChild(emptyLi);
        return;
    }

    // Créer un élément <li> pour chaque opération stockée
    history.forEach(op => {
        const li = document.createElement('li');
        li.textContent = op;
        historyList.appendChild(li);
    });
}

// --- LOGIQUE DE CALCUL ET DE VALIDATION ---

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    clearMessage(); // Réinitialiser avant chaque nouveau calcul

    // Récupération et conversion des valeurs
    const numA = parseFloat(numAInput.value);
    const numB = parseFloat(numBInput.value);
    const operation = operationSelect.value;
    
    // 1. Validation : Champs vides ou non numériques
    if (isNaN(numA) || isNaN(numB) || numAInput.value.trim() === "" || numBInput.value.trim() === "") {
        displayMessage("Veuillez saisir des nombres valides dans les deux champs.", true);
        return;
    }

    // 2. Validation : Division par zéro
    if (operation === '/' && numB === 0) {
        displayMessage("Erreur: La division par zéro n'est mathématique .", true);
        return;
    }

    // 3. Calcul
    let result;
    switch (operation) {
        case '+': result = numA + numB; break;
        case '-': result = numA - numB; break;
        case '*': result = numA * numB; break;
        case '/': result = numA / numB; break;
        default: return;
    }

    // Arrondir le résultat pour un affichage propre
    result = parseFloat(result.toFixed(4)); 
    
    // 4. Enregistrement et affichage
    const operationString = `${numA} ${operation} ${numB} = ${result}`;
    history.unshift(operationString); // Ajout à l'historique
    
    updateHistoryDOM(); // Mise à jour de l'affichage
    displayMessage(` Calcul réussi : ${operationString}`, false); // Afficher le résultat comme message de succès
});

// S'assurer que l'historique est vide au chargement initial
document.addEventListener('DOMContentLoaded', updateHistoryDOM);