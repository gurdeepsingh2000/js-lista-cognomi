var all_surnames = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli']
var output = document.getElementById('surnames');


var n = all_surnames.push(prompt('Inserisci il tuo cognome'));
all_surnames.sort()

for(var x = 0; x < all_surnames.length ; x++) { 
    output.innerHTML += all_surnames[x] + '<br>' ;
}

output.innerHTML += all_surnames.indexOf(n) +'<br>' ;





