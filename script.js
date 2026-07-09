const montant = document.getElementById("montant");
const resultat = document.getElementById("resultat");

montant.addEventListener("input", function () {

    let note = parseFloat(montant.value);

    if (!isNaN(note)) {
        let pourboire = note * 0.20;
        resultat.textContent = "Pourboire : " + pourboire.toFixed(2) + " DH";
    } else {
        resultat.textContent = "";
    }

});