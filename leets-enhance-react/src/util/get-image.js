import gold from './../assets/gold.png'
import silver from './../assets/silver.png'
import bronze from './../assets/bronze.png'
import sword from './../assets/sword.png'
import trophy from './../assets/trophy.png'
import card from './../assets/card.png'
import letter from './../assets/letter.png'
import fire from './../assets/fire.png'
import bluefire from './../assets/bluefire.png'
import diamond from './../assets/diamond.png'
import dropwater from './../assets/dropwater.png'

export function getImage(imageName){
    switch(imageName){
        case 'gold' : return gold;
        case 'silver' : return silver;
        case 'bronze' : return bronze;
        case 'sword' : return sword;
        case 'trophy' : return trophy;
        case 'card' : return card;
        case 'letter' : return letter;
        case 'fire' : return fire;
        case 'bluefire' : return bluefire;
        case 'diamond' : return diamond;
        case 'dropwater' : return dropwater;

        default : return null;
    }
}