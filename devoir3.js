1)Creer un tableau

var tableau = [ "14", "7", "3", "4", "20", "6", "2", "18", "9", "10", "11", "19", "13", "1", "15", "16", "17", "8", "12", "5" ];

for ( let tableau = 1; tableau < 21 ; tableau += 2 )
{
    console.log( "nombre impairs =" + tableau );
}
for ( let tableau = 2; tableau < 21; tableau += 2 ){
    console.log( "nombre pairs =" + tableau );
}

AFFICHER LE MAXIMUM ET LE MINIMUM
const min = tableau => tableau.reduce((x, y) => Math.min(x, y));
const max = tableau => tableau.reduce((x, y) => Math.max(x, y));
 console.log("Min:", min(tableau));
console.log( "Max:", max( tableau ) );
                
ou
                        
console.log("Min:", Math.min.apply(null, tableau));
console.log( "Max:", Math.max.apply( null, tableau ) );

ou

console.log("Min:", Math.min(...arr));
console.log("Max:", Math.max(...arr));
 

trier par ordre croissant
tableau.sort(function (x, y) {
    return x - y;
});
 
 trier par ordre decroissant
tableau.sort(function (x, y) {
    return y - x;
});
 


2)Creer un objet cni avec informations personnelles

const person = {
    Nom: "Irakoze",
    Prenom: "Chany Bertilla",
    Pere: "Nzeyimana Joseph",
    Mere: "Ndikumana Marie Louise",
    Province: "Bujumbura",
    Commune: "Ntahangwa",
    Lieu_de_naissance: "Kigobe",
    Age: "23",
    Etat_civil:"Celibataire",
    Profession: "Etudiante",
        Nameage: function() {
    return this.Nom + " " + this.Age;
  }
};
console.log( person.Nameage() );

const person = {
    Nom: "Irakoze",
    Prenom: "Chany Bertilla",
    Pere: "Nzeyimana Joseph",
    Mere: "Ndikumana Marie Louise",
    Province: "Bujumbura",
    Commune: "Ntahangwa",
    Lieu_de_naissance: "Kigobe",
    Age: "23",
    Etat_civil:"Celibataire",
    Profession: "Etudiante",
        Nomparents: function() {
    return this.Pere + " , " + this.Mere;
  }
};
console.log( person.Nomparents() );





3)Difference entre for...in et for...Of
L'instruction for...in permet d'itérer sur les propriétés énumérables d'un objet qui ne sont pas des symboles. Pour chaque propriété obtenue, on exécute une instruction (ou plusieurs grâce à un bloc d'instructions).


L'instruction for...of permet de créer une boucle Array qui parcourt un objet itérable (ce qui inclut les objets Array, Map, Set, String, TypedArray, l'objet arguments, etc.) et qui permet d'exécuter une ou plusieurs instructions pour la valeur de chaque propriété.