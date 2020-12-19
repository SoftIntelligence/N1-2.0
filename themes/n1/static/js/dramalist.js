

   
   const ad = "https://creator.n1channel.org/ad/read.php";
  getapi(Dramalist  , ad);






async function getapi(url,ad) { 
  
  // Storing response 
  const response = await fetch(url); 
  const response2 = await fetch(ad); 
  
  // Storing data in form of JSON 
  var data = await response.json(); 
    var ad = await response2.json();
  console.log(data,ad); 
  if (response) { 
     
  } 
  showKdrama(data,ad); 
} 

function showKdrama(data,ad){
var i = 0;
let drama = `
	

	`;
for( let r of ad.records){
if (r.ad_placement == 3) {
 drama += `
<img class="bannerad" id="dramaad1"  src="${r.url}">`	
}

}	
drama += `
<div class="allseries">
<label class="Episodes">All Episodes</label>


`;


for (let r of data.drama) { 
i ++;
drama += `
<div class="serie" onclick="location.href='/drama/?id=${r.drama_id}'">
			<img class="serithumb" src="${r.drama_cover}">
			<label class="title">${r.drama_title}</label>
		</div>

`;



}
drama += `	</div>`
document.getElementById("drama").innerHTML = drama;	
} 	
function showall(){
   const ad = "https://creator.n1channel.org/ad/read.php";		
 const kdrama = "https://creator.n1channel.org/drama/search.php/?s=Kdrama";	
getapi(kdrama , ad); 

} 
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

