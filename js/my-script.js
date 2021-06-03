var all_surnames = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli']
var output = document.getElementById('surnames');

var surname_request = prompt('Inserisci il tuo cognome');
all_surnames.push(surname_request);
var rank = 0;

all_surnames.sort();

for(var x = 0; x < all_surnames.length ; x++) { 
    output.innerHTML += all_surnames[x] + '<br>' ;
    if(all_surnames[x] === surname_request){
        rank = x+1;
    }

}



output.innerHTML += 'La tua posizione nella lista è ' + rank +'<br>' ;