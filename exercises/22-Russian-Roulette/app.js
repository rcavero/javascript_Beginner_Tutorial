const bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

// Remove the // below and complete the commented lines
//const fireGun = (chamberPosition) => {
function fireGun(chamberPosition){
    let resultado;
    if(chamberPosition==bulletPosition){
        resultado="You're dead!";
    }else{
        resultado="Keep playing!";
    }
    console.log(chamberPosition);
    return console.log(resultado);
};

fireGun(spinChamber());
