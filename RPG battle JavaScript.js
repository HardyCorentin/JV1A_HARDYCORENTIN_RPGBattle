var mrolov = document.querySelector('.mrolov');
var kima = document.querySelector('.kima');
var lorkos = document.querySelector('.lorkos');
var goure = document.querySelector('.goure');
var attackbutton = document.getElementById(".attackbutton");
var defensebutton = document.getElementById(".defensebutton");
var specialbutton = document.getElementById(".specialbutton");
var pvmrolov = document.getElementById('.pvmrolov');
var pvlorkos = document.getElementById('.pvlorkos');
var pvgoure = document.getElementById('.goure');
var pvkima = document.getElementById('.kima');
var pvm1 = document.getElementById('pvmonstre1');
var pvm2 = document.getElementById('pvmonstre2');
var pvm3 = document.getElementById('pvmonstre3');
var damagem1 = 20;
var damagem2= 10;
var damagem3 = 7; 
var compteur = 0; /*Sera utilisé pour gérer les tours des personages. Mrolov agi quand le compteur = 0, Lorkos agi quand le compteur = 1, Goure agi quand le compteur = 2; Kima agi quand le compteur = 3 */
var damagemonstre
/*Gestion des tours*/
document.getElementsByClassName('playerinput').onclick = function(){
    /*Setup du bouton d'attaque et des dégats */
    document.getElementById('attackbutton').onclick = function() {
        if(compteur=0){
            pvm1.innerHTML = parseInt(pvm1.innerHTML) -40;
            if (parseInt(pvm1.innerHTML) <= 0){
                pvm2.innerHTML = parseInt(pvm2.innerHTML) -40;
                if(parseInt(pvm2.innerHTML)<=0){
                    pvm3.innerHTML = parseInt(pvm3.innerHTML) -40;
                    if(parseInt(pvm3.innerHTML)<=0) {
                        alert("You win.")

                    }

                }
            compteur = compteur + 1 ;
        }
        if(compteur=1){
            pvm2.innerHTML = parseInt(pvm2.innerHTML) -20;
            if (parseInt(pvm2.innerHTML) <= 0){
                pvm3.innerHTML = parseInt(pvm3.innerHTML) -20;
                if(parseInt(pvm3.innerHTML)<=0){
                    pvm1.innerHTML = parseInt(pvm1.innerHTML) -20;
                    if(parseInt(pvm1.innerHTML)<=0) {
                        alert("You win.")
        }
            if(compteur=1){
                pvm2.innerHTML = parseInt(pvm2.innerHTML) -20;
                if (parseInt(pvm2.innerHTML) <= 0){
                    pvm3.innerHTML = parseInt(pvm3.innerHTML) -20;
                    if(parseInt(pvm3.innerHTML)<=0){
                        pvm1.innerHTML = parseInt(pvm1.innerHTML) -20;
                        if(parseInt(pvm1.innerHTML)<=0) {
                            alert("You win.")
        }
        if(compteur=3){
            pvm3.innerHTML = parseInt(pvm3.innerHTML) -20;
            if (parseInt(pvm3.innerHTML) <= 0){
                pvm1.innerHTML = parseInt(pvm1.innerHTML) -20;
                if(parseInt(pvm2.innerHTML)<=0){
                    pvm2.innerHTML = parseInt(pvm2.innerHTML) -20;
                    if(parseInt(pvm1.innerHTML)<=0) {
                        alert("You win.")
        }
        if (compteur >=4){ 
        (damagemonstre)
    }
    /*Setup du bouton de defense*/
    document.getElementById('defensebutton').onclick = function(){
        if(compteur=0){
            damagem1 = damagem1-5;
            compteur++;
        }
        if(compteur=1){
           
            compteur++;
        }
    
        if(compteur=2){
            pvm1.innerHTML = parseInt(pvm1.innerHTML) -10
            compteur++;
        }
    
        if(compteur=3){
            pvm1.innerHTML = parseInt(pvm1.innerHTML) -10
            compteur++;
        }
    
    }


}

}
}
                    }
                }}}}}}}}