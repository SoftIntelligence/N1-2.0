	
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


const ad = "https://creator.n1channel.org/ad/read.php";
getapiad(ad); 
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



const Kdrama = "https://creator.n1channel.org/drama/search.php/?s=Kdrama";
getapi(Kdrama);
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

function showKdrama(data){
var i = 0;
let drama = ``;
let jdrama = ``;
let cdrama = ``;
let anime = ``;


for (let r of data.drama) { 
i ++;
drama += `
<div class="serie" onclick="location.href='/kdrama/?id=${r.drama_id}'">
			<img class="serithumb" src="${r.drama_cover}">
			<label class="title">${r.drama_title}</label>
		</div>

`;
if (i == 6 ) {
i = 0;	
break; 	
}

}

	

document.getElementById("K-Drama").innerHTML = drama;


}
const Jdrama = "https://creator.n1channel.org/drama/search.php/?s=japanesedrama";
getapij(Jdrama);
async function getapij(url) { 
  
  // Storing response 
  const response = await fetch(url); 
  
  
  // Storing data in form of JSON 
  var data = await response.json();
  
  console.log(data); 
  if (response) { 
     
  } 
  showJdrama(data); 
} 

function showJdrama(data){
var i = 0;
let drama = ``;



for (let r of data.drama) { 
i ++;
drama += `
<div class="serie" onclick="location.href='/japanesedrama/?id=${r.drama_id}'">
			<img class="serithumb" src="${r.drama_cover}">
			<label class="title">${r.drama_title}</label>
		</div>

`;
if (i == 6 ) {
i = 0;	
break; 	
}

}

	

document.getElementById("J-Drama").innerHTML = drama;


}
const Anime = "https://creator.n1channel.org/drama/search.php/?s=anime";
getapia(Anime);
async function getapia(url) { 
  
  // Storing response 
  const response = await fetch(url); 
  
  
  // Storing data in form of JSON 
  var data = await response.json();
  
  console.log(data); 
  if (response) { 
     
  } 
  showAnime(data); 
} 

function showAnime(data){
var i = 0;
let drama = ``;



for (let r of data.drama) { 
i ++;
drama += `
<div class="serie" onclick="location.href='/anime/?id=${r.drama_id}'">
			<img class="serithumb" src="${r.drama_cover}">
			<label class="title">${r.drama_title}</label>
		</div>

`;
if (i == 6 ) {
i = 0;	
break; 	
}

}

	

document.getElementById("Anime").innerHTML = drama;


}
const Cdrama = "https://creator.n1channel.org/drama/search.php/?s=ChineseDrama";
getapic(Cdrama);
async function getapic(url) { 
  
  // Storing response 
  const response = await fetch(url); 
  
  
  // Storing data in form of JSON 
  var data = await response.json();
  
  console.log(data); 
  if (response) { 
     
  } 
  showCdrama(data); 
} 

function showCdrama(data){
var i = 0;
let drama = ``;



for (let r of data.drama) { 
i ++;
drama += `
<div class="serie" onclick="location.href='/chinesedrama/?id=${r.drama_id}'">
			<img class="serithumb" src="${r.drama_cover}">
			<label class="title">${r.drama_title}</label>
		</div>

`;
if (i == 6 ) {
i = 0;	
break; 	
}

}

	

document.getElementById("Chinese-Drama").innerHTML = drama;


}


