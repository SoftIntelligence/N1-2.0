const queryString = window.location.search;
  console.log(queryString);
  // ?product=shirt&color=blue&newuser&size=m
  const urlParams = new URLSearchParams(queryString);
  const dwid = urlParams.get('id');
   console.log(dwid)
  downloadone(dwid);
	
 




			
 function downloadone(id){
  const dwfile = "https://creator.n1channel.org/drama/readoneEpisode.php/?ep_id="+id;
  getdwfile(dwfile);
  }
 async function getdwfile (dwfile){
   const response = await fetch(dwfile);
   var data = await response.json(); 
    if (response) { 
     
  } 
  showdwbtn(data);
 }
 
 function showdwbtn(data){
  let drama = ``;
  drama = `

  <a href="${data.vid_url}" target=”_blank” download>
  <img src="/download-button.png"  style="width: 400px; height: auto; justify-content: center; margin: auto;">
</a>

  `;
 document.getElementById("drama").innerHTML = drama;   
 }



const ad2 = "https://creator.n1channel.org/ad/read.php";
getapiad(ad2); 
async function getapiad(url) { 
  
  // Storing response 
  const response = await fetch(url); 
  
  // Storing data in form of JSON 
  var adpic = await response.json(); 
  
  if (response) { 
     
  } 
  showAd(adpic); 
} 
function showAd(ad){

for( let r of ad.records){
if (r.ad_placement == 3) {
document.getElementById("hpad3").src = r.url;   
}

} 
}



