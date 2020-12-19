  const queryString = window.location.search;
  console.log(queryString);
  // ?product=shirt&color=blue&newuser&size=m
  const urlParams = new URLSearchParams(queryString);
  const dramadd = urlParams.get('id');
  console.log(dramadd)
  showone(dramadd)
  	






			
 function showone(id){
  const oneDrama = "https://creator.n1channel.org/drama/read_one.php/?drama_id="+id;
   const Episodes = "https://creator.n1channel.org/drama/readEpisode.php/?drama_id="+id;
   const ad = "https://creator.n1channel.org/ad/read.php";
  getapi(oneDrama , Episodes , ad);
  async function getapi(oneDrama , Episodes , ad) { 
  
  // Storing response 
    console.log(oneDrama); 
  const responsedrama = await fetch(oneDrama); 
   const response2 = await fetch(Episodes); 
   const response3 = await fetch(ad); 
  // Storing data in form of JSON 
  var dramadata = await responsedrama.json();
  var episode = await response2.json(); 
   var ad = await response3.json(); 

  if (responsedrama) { 
     
  } 
  showOneKdrama(dramadata,episode,ad); 
}  	
function showOneKdrama(dramadata , episode , ad){

let drama=``;

 	drama += `
 	<article>   <div id="drama-details" class="block wrapper">   <figure class="drama-thumbnail"><img width="220" height="320" style="height: auto; /* Make sure images are scaled correctly. */
	max-width: 100%;"  class="lazy wp-post-image " alt="" src="${dramadata.drama_cover}" style=""></a>
					</figure> <!-- post- thumbnail-->				
		<div class="drama-details wrapper">
			<h1 class="entry-header"><h1>${dramadata.drama_title}</h1><div class="entry-meta">
					Posted on November 22, 2020				</div>
			</h1>
						<div class="synopsis">
				<span>Synopsis:</span>
				<p></p>
<p></p><p>${dramadata.drama_summary}</p>
<p></p>

			<p class="status">
								<span>Status: </span>${dramadata.status}
							</p>
			<p class="release-year">
				<strong>Release Date: </strong> ${dramadata.release_date}	</p>
						
</article>

`;
for( let r of ad.records){
if (r.ad_placement == 3) {
 drama += `
<img class="bannerad" id="dramaad1"  src="${r.url}">`	
}

}	
drama += `
<div class="eplist" >
<label class="Episodes">All Episodes</label>


`;
for (let r of episode.episodes) { 
drama += `
<a style="display:block;" href="/watch/?s=${r.ep_id}&d=${dramadata.drama_id}" >${r.ep_title}</a>
`;

}
drama += `
</div>
`;


 document.getElementById("drama").innerHTML = drama;	

}


 }
