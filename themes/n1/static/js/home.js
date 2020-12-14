	
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

const Kdrama = "https://creator.n1channel.org/drama/search.php/?s=KDrama";
const Jdrama = "https://creator.n1channel.org/drama/search.php/?s=JapaneseDrama";
const ChineseDrama = "https://creator.n1channel.org/drama/search.php/?s=ChineseDrama";
const Anime = "https://creator.n1channel.org/drama/search.php/?s=Anime";

const ad = "https://creator.n1channel.org/ad/read.php";



getapi(Kdrama,Jdrama,ChineseDrama,Anime);
getapiad(ad); 



async function getapi(url,url2,url3,url4) { 
  
  // Storing response 
  const response = await fetch(url); 
  const response2 = await fetch(url2);
  const response3= await fetch(url3);
  const response4 = await fetch(url4);   
  
  // Storing data in form of JSON 
  var data = await response.json();
  var data2 = await response2.json(); 
  var data3 = await response3.json();
  var data4 = await response4.json();
  console.log(data); 
  if (response) { 
     
  } 
  showKdrama(data,data2.data3,data4); 
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
function showKdrama(data,data2,data3,data4){
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
if (! data2==null) {
	for (let r of data2.drama) { 
i ++;
jdrama += `
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
}
if (! data3==null) {
	for (let r of data3.drama) { 
i ++;
cdrama += `
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
}
if (! data4==null) {
	for (let r of data4.drama) { 
i ++;
anime += `
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
}

document.getElementById("K-Drama").innerHTML = drama;
document.getElementById("J-Drama").innerHTML = jdrama;
document.getElementById("Chinese-Drama").innerHTML = cdrama; 
document.getElementById("hai-Drama").innerHTML = anime;

}
