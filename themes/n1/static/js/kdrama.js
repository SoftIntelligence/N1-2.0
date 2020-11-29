const queryString = window.location.search;
  console.log(queryString);
  // ?product=shirt&color=blue&newuser&size=m
  const urlParams = new URLSearchParams(queryString);
  const key = urlParams.get('s');
  if (key !== null) {showone()}else{showall()}

 function showone(){
 	let drama=``;

 	drama += `
 	<article>   <div id="drama-details" class="block wrapper">   <figure class="drama-thumbnail"><img width="220" height="320" style="height: auto; /* Make sure images are scaled correctly. */
	max-width: 100%;"  class="lazy wp-post-image " alt="" src="https://n1channel.b-cdn.net/images/alice.jpg" style=""></a>
					</figure> <!-- post- thumbnail-->				
		<div class="drama-details wrapper">
			<header class="entry-header"><h1>Alice (2020)</h1><div class="entry-meta">
					Posted on November 22, 2020				</div>
			</header>
						<div class="synopsis">
				<span>Synopsis:</span>
				<p></p>
<p></p><p>Alice 2020 SBS ကနေ အသစ်ထွက်ရှိလာတဲ့ Alice 2020 ဆိုတဲ့ ဇာတ်လမ်းသစ်လေးနဲ့ မိတ်ဆက်ပေးချင်ပါတယ်… ဒီကားလေးကတော့ Time-Travel,Mystery, Sci-fi , Fantasy , Melodrama အမျိုးအစားလေးဖြစ်တာကြောင့် သိပ္ပံနည်းဆန်တဲ့ ဖြစ်ရပ်ဆန်းဇာတ်လမ်းမျိုးတွေကို သဘောကျတတ်တဲ့ သူတွေ အကြိုက်တွေ့မယ့် ကားမျိုးလေးပါပဲ..
ဇာတ်လမ်းအကျဉ်းလေးကို ပြောပြရမယ်ဆိုရင်တော့… ဇာတ်လိုက်မင်းသား Park Jin Gyeom ဟာ Time-Travelling နဲ့ ပက်သတ်လို့ လေ့လာစုံစမ်းနေတဲ့ စုံထောက်တစ်ယောက်ဖြစ်ပြီး…” Alice " ဆိုတဲ့ time travelling device ကနေတစ်ဆင့် အနာဂတ်ကနေ ရောက်ရှိလာသူတစ်ဦးဖြစ်ပါတယ်… Alice ဆိုတဲ့ device နဲ့ ပတ်သတ်လို့ စုံစမ်းနေရင်းနဲ့ Yoon Taeyi ဆိုတဲ့ အမျိူးသမီးနဲ့ တွေ့ဆုံဖို့ အကြောင်းဖန်လာပြီးတော့ အဲဒီအမျိုးသမီးဟာ ဟိုးအရင်တည်းက သေဆုံးပြီးသား လူတစ်ယောက်ဖြစ်နေတာကို သိလာရတဲ့နောက်… ဘာတွေ ဆက်ဖြစ်ကြမလဲဆိုတာကို ဖန်သားပြင်ပေါ်မှာ ဆက်လက် ရှုစားကြရမှာပါ… ဇာတ်ဆောင် မင်းသားရော မင်းသမီးရောက Kdrama မြန်မာပရိတ်သတ်နဲ့ ရင်းနှီးပြီးသားဖြစ်တဲ့ ဝါရင့်သရုပ်ဆောင်တွေဖြစ်တာမို့…. အထူးတလည်တောင် မိတ်ဆက်ပေးနေစရာ လိုတော့မယ် မထင်ပါဘူး… ဒီဇာတ်ကားမှာ အပိုင်း ၁၆ ပိုင်း ပါရှိမှာ ဖြစ်ပြီး အပတ်စဉ် သောကြာနေ့နဲ့ စနေနေ့တွေမှာ SBS ကနေ ထုတ်လွှင့်သွားမှာ ဖြစ်ပါတယ်</p>
<p></p>
<p><span>Director:</span>  Baek Soo-Chan [강민구]</p>

			</div>
			<p class="country">
				<span>Country: </span> Korean		</p>
			<p class="status">
								<span>Status: </span>Ongoing
							</p>
			<p class="release-year">
				<strong>Release Year: </strong>2020		</p>
						
</article>
<img class="bannerad" id="hpad"  src="https://via.placeholder.com/1024x120.jpg">
<div>
<label class="Episodes">All Episodes</label>
<a href="/watch/?s=alice?ep=1">Alice 2020 |           Episode 1</a>
</div>
`;



 document.getElementById("drama").innerHTML = drama;			

 } 	
 function showall(){
let drama =``;

drama += `
 	<label class="catelbl">K-Drama Series</label>
	<hr>
	<img class="bannerad" id="hpad"  src="https://via.placeholder.com/1024x120.jpg">
	<div class="allseries">
		<div class="serie" onclick="location.href='/kdrama/?s=alice'">
			<img class="serithumb" src="https://n1channel.b-cdn.net/images/alice.jpg">
			<label class="title">Alice</label>
		</div>
		<div class="serie">
			<img class="serithumb" src="https://n1channel.b-cdn.net/images/alice.jpg">
			<label class="title">Alice</label>
		</div>
		<div class="serie">
			<img class="serithumb" src="https://n1channel.b-cdn.net/images/alice.jpg">
			<label class="title">Alice</label>
		</div>
		<div class="serie">
			<img class="serithumb" src="https://n1channel.b-cdn.net/images/alice.jpg">
			<label class="title">Alice</label>
		</div>
		<div class="serie">
			<img class="serithumb" src="https://n1channel.b-cdn.net/images/alice.jpg">
			<label class="title">Alice</label>
		</div>

	</div>

`
document.getElementById("drama").innerHTML = drama;			

 } 