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
   
  getapi(oneDrama , Episodes );
  async function getapi(oneDrama , Episodes ) { 
  
  // Storing response 
    console.log(oneDrama); 
  const responsedrama = await fetch(oneDrama); 
   const responseep = await fetch(Episodes); 
  
  // Storing data in form of JSON 
  var dramadata = await responsedrama.json();
  var episode = await responseep.json(); 


  if (responsedrama) { 
     
  } 
  showOneKdrama(dramadata,episode); 
}  	
function showOneKdrama(dramadata , episode ){

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
