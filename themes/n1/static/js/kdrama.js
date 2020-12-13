const queryString = window.location.search;
  console.log(queryString);
  // ?product=shirt&color=blue&newuser&size=m
  const urlParams = new URLSearchParams(queryString);
  const key = urlParams.get('id');
  if (key !== null) {showone()}else{showall()}

 function showone(){
  const oneDrama = "http://creator.n1channel.org/drama/read_one.php/?drama_id="+key;
   const Episodes = "http://creator.n1channel.org/drama/readEpisode.php/?drama_id="+key;
  getapi(oneDrama , Episodes);
  async function getapi(url1 , url2) { 
  
  // Storing response 
  const response = await fetch(url1); 
   const response2 = await fetch(url2); 
  // Storing data in form of JSON 
  var data = await response.json();
  var episode = await response2.json(); 
  console.log(data); 
  if (response) { 
     
  } 
  showOneKdrama(data,episode); 
}  	
function showOneKdrama(data , episode){

let drama=``;

 	drama += `
 	<article>   <div id="drama-details" class="block wrapper">   <figure class="drama-thumbnail"><img width="220" height="320" style="height: auto; /* Make sure images are scaled correctly. */
	max-width: 100%;"  class="lazy wp-post-image " alt="" src="${data.drama_cover}" style=""></a>
					</figure> <!-- post- thumbnail-->				
		<div class="drama-details wrapper">
			<header class="entry-header"><h1>${data.drama_title}</h1><div class="entry-meta">
					Posted on November 22, 2020				</div>
			</header>
						<div class="synopsis">
				<span>Synopsis:</span>
				<p></p>
<p></p><p>${data.drama_summary}</p>
<p></p>

			<p class="status">
								<span>Status: </span>${data.status}
							</p>
			<p class="release-year">
				<strong>Release Date: </strong> ${data.release_date}	</p>
						
</article>

`;
drama += `
<img class="bannerad" id="hpad"  src="https://via.placeholder.com/1024x120.jpg">
<div>
<label class="Episodes">All Episodes</label>


`;
for (let r of episode.episodes) { 
drama += `
<a style="display:block;" href="/watch/?s=${r.ep_id}&d=${data.drama_id}" >${r.ep_title}</a>
`;

}
drama += `
</div>
`;


 document.getElementById("drama").innerHTML = drama;	

}
 			

 }








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
let drama = `<label class="catelbl">K-Drama Series</label>
	<hr>
	<img class="bannerad" id="hpad"  src="https://via.placeholder.com/1024x120.jpg">
<div class="allseries">
	`;

for (let r of data.drama) { 
i ++;
drama += `
<div class="serie" onclick="location.href='/kdrama/?id=${r.drama_id}'">
			<img class="serithumb" src="${r.drama_cover}">
			<label class="title">${r.drama_title}</label>
		</div>

`;



}
drama += `	</div>`
document.getElementById("drama").innerHTML = drama;	
} 	
function showall(){
getapi(kdrama); 

} 