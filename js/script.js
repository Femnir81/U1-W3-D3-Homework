const annoNascita = Number(prompt('Inserisci il tuo anno di nascita!'))
const annoAttuale = 2022

function calcoloAge() {
    return annoAttuale - annoNascita
}

let age = calcoloAge()

console.log(age)

if (age < 6) {
    document.getElementById('consigli').innerHTML = "Sei ancora un poppante, vai all'asilo!"
}

else if (age >= 6 && age <= 10) {
    document.getElementById('consigli').innerHTML = "Stai crescendo, puoi iscriverti alle elementari!"
}

else if (age >= 11 && age <= 13) {
    document.getElementById('consigli').innerHTML = "Sei pronto per le scuole medie!"
}

else if (age >= 14 && age <= 18) {
    document.getElementById('consigli').innerHTML = "Sei diventato un ragazzo, andrai alle superiori"
}

else {
    document.getElementById('consigli').innerHTML = "Ora sei un uomo adulto e vaccinato!"
}