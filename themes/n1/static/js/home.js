	
function showcat(){
	var cat = document.getElementById('cat');
	var element = document.querySelector('.catbar');
	var dis = element.style.display;
	
	if (dis == 'none') {
		
		cat.style.display = 'flex';

	}else if (dis == 'flex'){
		cat.style.display = 'none';
	}else{
		cat.style.display = 'flex';
	}
		
	
}
