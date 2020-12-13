	
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

const kdrama = "https://creator.n1channel.org/drama/search.php/?s=KDrama";
const ad = "https://creator.n1channel.org/ad/read.php";



getapi(kdrama);
getapiad(ad); 



async function getapi(url) { 
  
  // Storing response 
  const response = await fetch(url); 
  
  // Storing data in form of JSON 
  var data = await response.json(); 
  console.log(data); 
  if (response) { 
     
  } 
  showKdrama(data); 
} 
async function getapiad(url) { 
  
  // Storing response 
  const response = await fetch(url); 
  
  // Storing data in form of JSON 
  var ad = await response.json(); 
  
  if (response) { 
     
  } 
  showAd(ad); 
} 
function showAd(ad){

for( let r of ad.records){
if (r.ad_placement == 1) {
document.getElementById("hpad1").src = r.url; 	
}
if (r.ad_placement == 2) {
document.getElementById("hpad2").src = r.url; 	
}	
}	
}
function showKdrama(data){
var i = 0;
let drama = ``;

for (let r of data.drama) { 
i ++;
drama += `
<div class="serie" onclick="location.href='/kdrama/?id=${r.drama_id}'">
			<img class="serithumb" src="${r.drama_cover}">
			<label class="title">${r.drama_title}</label>
		</div>

`;
if (i == 6 ) {
break; 	
}

}

document.getElementById("K-Drama").innerHTML = drama; 

}
