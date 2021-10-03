function getColor(){
	colorNumber = Math.floor(Math.random()*5);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(){
	for(let i=0;i<10;i++){
		console.log(getColor());
	}
}
getAllStudentColors();

