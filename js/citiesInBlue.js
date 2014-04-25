jQuery(document).ready(
	function(){
		var $ = jQuery;

		var aWWidth;
		var aSWidth;
		var aCWidth;

		var isMoving = false;

		var cityCalled;

		var cityObj = 	[
							{
								"name":"Chicago", 
								"x":324, 
								"y":335,
								"over": "http://cities-in-blue.hifi.ca/images/over_chicago.png", 
								"oX": 295,
								"oY": 333,  
								"data":[{
									city:  "Chicago",
									video: "<iframe width='350' height='197' src='//www.youtube.com/embed/ZVU2L0ytwyQ' frameborder='0' allowfullscreen></iframe>",
									desc:  "Mississippi Blues rode the rails to the City of Big Shoulders in the great migration. When it arrived, it plugged in, and got louder and more muscular. Characterized by electric guitars and harmonicas, Chicago Blues is perhaps the most iconic sound of the genre.",
									artist: [{	image: "http://cities-in-blue.hifi.ca/images/artist-chicago-broonzy.png",
												name: "Big Bill Broonzy",
												date: "1893-1959", 
												writeUp: "Big Bill Broonzy began performing country blues in the 1920s, transitioning to a more urban sound in the ‘30s and ‘40s, until returning to his musical roots during the American folk revival." 
											},
											{	image: "http://cities-in-blue.hifi.ca/images/artist-chicago-muddyWaters.png",
												name: "Muddy Waters",
												date: "1913-1983", 
												writeUp: "Muddy Waters is the “father of modern Chicago blues”. An influencer of various genres, Waters is noted for being an early adopter of the electric guitar for live performances." 
											},
											{	image: "http://cities-in-blue.hifi.ca/images/artist-chicago-littleWalter.png",
												name: "Little Walter",
												date: "1913-1983", 
												writeUp: "Little Walter used amplification to revolutionize the sound of blues harmonica, establishing a whole new vocabulary for aspiring harmonica players." 
											}],
									icon	: "http://cities-in-blue.hifi.ca/images/icon-Chicago.png", 
									locations: [{ 	
													bar: "Blue Chicago", 
													url:"http://www.bluechicago.com/",
													desc: "536 N. Clark,</br>Chicago, IL"
												},
												{
													bar: "Buddy Guy’s Legends", 
													url:"http://www.buddyguy.com/",
													desc: "700 S. Wabash,</br>Chicago, IL"
												},
												{
													bar: "City Winery", 
													url:"http://www.citywinery.com/",
													desc: "1200 W. Randolph St.,</br>Chicago, IL"
												},
												{
													bar: "Kingston Mines", 
													url:"http://kingstonmines.com/",
													desc: "2548 N Halsted St,</br>Chicago, IL"
												},
												{
													bar: "House of Blues Back Porch Stage", 
													url:"http://www.houseofblues.com/venues/clubvenues/chicago/promo/backporchstage/",
													desc: "329 N. Dearborn,</br>Chicago, IL"
												},
												{
													bar: "Hugo's Frog Bar", 
													url:"http://www.hugosfrogbar.com/",
													desc: "1024 N. Rush Street,</br>Chicago, IL"
												},
												{
													bar: "Katerina’s", 
													url:"http://www.katerinas.com/",
													desc: "1920 W. Irving Park,</br>Chicago, IL"
												}],
								}]
							}, 
							{
								"name":"New_Orleans", 
								"x":326, 
								"y":582,
								"over": "http://cities-in-blue.hifi.ca/images/over_newOrleans.png", 
								"oX": 209,
								"oY": 542,  
								"data":[{
									city:"New Orleans",
									video: "<iframe width='350' height='197' src='//www.youtube.com/embed/Il12GVmsn5c' frameborder='0' allowfullscreen></iframe>",
									desc:"This port town brought visitors from Latin America and Acadia, and their sounds influenced the musicians in the brothels and bars. This musical gumbo is heavy on piano and horns.",
									artist: [{	image: "http://cities-in-blue.hifi.ca/images/artist-newOrleans-cosimoMatassa.png",
												name: "Cosimo Matassa",
												date: "1926-1959", 
												writeUp: "Matassa is responsible for opening the historic J&M Recording Studio, where several blues, soul and R&B hits were recorded and the New Orleans Sound established." 
											},
											{	image: "http://cities-in-blue.hifi.ca/images/artist-newOrleans-fats.png",
												name: "Fats Domino",
												date: "1928-present", 
												writeUp: "With five gold records and 35 Top 40 hits, rock ‘n’ roll pianist Fats Domino embraced a sound inspired by traditional rhythm and blues ensembles." 
											},
											{	image: "http://cities-in-blue.hifi.ca/images/artist-newOrleans-guitarSlim.png",
												name: "Guitar Slim",
												date: "1928-present", 
												writeUp: "Born Eddie Jones, Guitar Slim experimented with distorted tones on the electric guitar, a sound that influenced such musicians as Frank Zappa and Jimi Hendrix." 
											}],
									icon	: "http://cities-in-blue.hifi.ca/images/icon-NewOrleans.png", 
									locations: [{ 	
													bar: "The Apple Barrel", 
													url:"http://www.neworleansonline.com/directory/location.php?locationID=1170",
													desc: "609 Frenchmen St.,</br>New Orleans, LA"
												},
												{
													bar: "Bourbon Street Blues Company", 
													url:"http://www.bourbonstbluesco.com",
													desc: "441 Bourbon St.,</br>New Orleans, LA"
												},
												{
													bar: "Funky Pirate", 
													url:"http://www.tropicalisle.com",
													desc: "727 Bourbon St.,</br>New Orleans, LA"
												},
												{
													bar: "The Spotted Cat", 
													url:"http://www.spottedcatmusicclub.com",
													desc: "623 Frenchmen St.,</br>New Orleans, LA"
												}
											], 
								}]
							}, 
							{
								"name":"Memphis", 
								"x":325, 
								"y":471,
								"over": "http://cities-in-blue.hifi.ca/images/over_memphis.png", 
								"oX": 329,
								"oY": 437,  
								"data":[{
									city:  "Memphis",
									video: "<iframe width='350' height='197' src='//www.youtube.com/embed/3FdxxC-7028' frameborder='0' allowfullscreen></iframe>",
									desc:  "The blues in Memphis burst out of an educated African American community with proper music training. This created a sophisticated sound played by highly skilled musicians. You had to be good – really good – to make it in Memphis with its full bands with big horn sections. W. C. Handy created the first blues sheet music here, allowing the genre to migrate around the country on the printed page.",
									artist: [{	image: "http://cities-in-blue.hifi.ca/images/artist-memphis-bobbyBland.png",
												name: "Bobby Bland",
												date: "1925-present", 
												writeUp: "Bobby Bland mixed gospel with blues and R&B to create his unique sound, making him one of the “the great storytellers of blues and soul music”." 
											},
											{	image: "http://cities-in-blue.hifi.ca/images/artist-memphis-BBKing.png",
												name: "B.B. King",
												date: "1925-present", 
												writeUp: "Known as “The King of Blues”, B.B. King is one of the hardest working performers of all time, continuing to tour well into his late ‘80’s. King’s style has become a definitive part of the rock guitarists’ vocabulary." 
											}],
									icon	: "http://cities-in-blue.hifi.ca/images/icon-Memphis.png", 
									locations: [{ 	
													bar: "B.B. King's", 
													url:"http://www.bbkingclubs.com/index.php?page=memhome",
													desc: "143 Beale St.,</br>Memphis, TN"
												},
												{
													bar: "Black Diamond", 
													url:"",
													desc: "153 Beale St.,</br>Memphis, TN"
												},
												{
													bar: "Earnestine and Hazel’s", 
													url:"",
													desc: "531 S. Main St.,</br>Memphis, TN"
												},
												{
													bar: "Wild Bill's", 
													url:"",
													desc: "1580 Vollintine Ave.,</br>Memphis, TN"
												}],
								}]
							}, 
							{
								"name":"Kansas_City", 
								"x":233, 
								"y":411,
								"over": "http://cities-in-blue.hifi.ca/images/over_kansasCity.png", 
								"oX": 223,
								"oY": 380,  
								"data":[{
									city:  "Kansas City",
									video: "<iframe width='350' height='197' src='//www.youtube.com/embed/YtXbT5oZGOw' frameborder='0' allowfullscreen></iframe>",
									desc:  "Musical styles blended at this transportation hub in the middle of the United States. A democratic call and response jazz/blues fusion blossomed at 18th and Vine, the historic music district in Kansas City.",
									artist: [{	image: "http://cities-in-blue.hifi.ca/images/artist-kansas-bigJoeTurner.png",
												name: "Big Joe Turner",
												date: "1916-2006", 
												writeUp: "Known as The Boss of Blues, Big Joe Turner helped shape the evolution of popular music with his song “Shake, Rattle and Roll”." 
											},
											{	image: "http://cities-in-blue.hifi.ca/images/artist-kansas-jayMcshann.png",
												name: "Jay McShann",
												date: "1916-2006", 
												writeUp: "At the forefront of blues and jazz in the 1940s, Jay McShann’s musical style became known as “the Kansas City sound”." 
											}],
									icon	: "http://cities-in-blue.hifi.ca/images/icon-Kansas.png", 
									locations: [{ 	
													bar: "The Blue Room", 
													url:"",
													desc: "1600 E 18th St.,</br>Kansas City, MO "
												},
												{
													bar: "Fat Fish Blue", 
													url:"http://www.fatfishbluekc.com/",
													desc: "7260 NW 87th St.,</br>Kansas City, MO"
												},
												{
													bar: "Knuckleheads Saloon", 
													url:"http://www.knuckleheadshonkytonk.com/",
													desc: "2715 Rochester St.,</br>Kansas City, MO"
												}],
								}]
							}, 
							{
								"name":"Piedmont", 
								"x":410, 
								"y":483,
								"over": "http://cities-in-blue.hifi.ca/images/over_piedmont.png", 
								"oX": 411,
								"oY": 477,  
								"data":[{
									city:  "Piedmont",
									video: "<iframe width='350' height='197' src='//www.youtube.com/embed/pyhzhKxaNow' frameborder='0' allowfullscreen></iframe>",
									desc:  "Country blues at its best came out of the south east region of the United States from Richmond, VA to Atlanta, GA. This lighter and happier blues is characterized by its ragtime rhythms, and the sound of finger picking on the guitar and banjo.",
									artist: [{	image: "http://cities-in-blue.hifi.ca/images/artist-piedmont-elizabethCotton.png",
												name: "Elizabeth Cotten",
												date: "1893-1987", 
												writeUp: "Elizabeth Cotten developed her own finger picking technique, “Cotten Picking”, which resulted from her playing right-handed guitars upside down to suit the fact that she was left-handed." 
											},
											{	image: "http://cities-in-blue.hifi.ca/images/artist-piedmont-brownieMcghee.png",
												name: "Brownie McGhee",
												date: "1915-1996", 
												writeUp: "Brownie McGhee was a blues singer and self-taught guitarist, well-known for his collaborations with Sonny Terry. The two musicians had performed as a duo for over 22 years." 
											},
											{	image: "http://cities-in-blue.hifi.ca/images/artist-piedmont-sonnyTerry.png",
												name: "Sonny Terry",
												date: "1911-1986", 
												writeUp: "Sonny Terry was well-known for his energetic performance of the harmonica, which would include vocal whoops and hollers, and imitations of trains and fox hunts." 
											},
											
											{	image: "http://cities-in-blue.hifi.ca/images/artist-piedmont-blindBoyfuller.png",
												name: "Blind Boy Fuller",
												date: "1907-1941", 
												writeUp: "Born Fulton Allen, Blind Boy Fuller was noted for his honest, and sometimes explicit, lyrical content, drawing from his own experiences as an underprivileged, blind African-American." 
											}],
									icon	: "http://cities-in-blue.hifi.ca/images/icon-Piedmont.png", 
									locations: [{ 	
													bar: "Blind Willie’s", 
													url:"http://www.blindwilliesblues.com/",
													desc: "828 North Highland Ave NE,</br>Atlanta, GA"
												},
												{
													bar: "Fat Matt’s Rib Shack", 
													url:"http://www.fatmattsribshack.com/",
													desc: "821 Piedmont Ave NE,</br>Atlanta, GA"
												},
												{
													bar: "Northside Tavern", 
													url:"http://www.northsidetavern.com/",
													desc: "1058 Howell Mill Rd NW,</br>Atlanta, GA"
												}],
								}]
							}, 
							{
								"name":"Mississippi", 
								"x":319, 
								"y":528,
								"over": "http://cities-in-blue.hifi.ca/images/over_mississippi.png", 
								"oX": 289,
								"oY": 493,  
								"data":[{
									city:  "Mississippi",
									video: "<iframe width='350' height='197' src='//www.youtube.com/embed/oaghAxgGPfc' frameborder='0' allowfullscreen></iframe>",
									desc:  "It started with field hollerers belting out their troubles while they worked. Later, they were accompanied by the diddley bow, a single string guitar made out of bailing wire, two screws and a board. A glass bottle would slide across the string, bending the notes and creating the elemental blues sound. This is the most basic, pure form of the blues.",
									artist: [{	image: "http://cities-in-blue.hifi.ca/images/artist-mississippi-sonHouse.png",
												name: "Son House",
												date: "1902-1988", 
												writeUp: "A former preacher and pastor Eddie James “Son” House, Jr. wasn’t a blues fan until he heard a friend playing bottleneck guitar. House then combined his own vocal intensity with the same guitar sound." 
											},
											{	image: "http://cities-in-blue.hifi.ca/images/artist-mississippi-robertJohnson.png",
												name: "Robert Johnson",
												date: "1911-1936", 
												writeUp: "Often praised as a master of the blues, Robert Johnson has influenced many of today’s artists. Poor documentation about his life led to the myth that Johnson sold his soul at a crossroads to gain success." 
											},
											{	image: "http://cities-in-blue.hifi.ca/images/artist-mississippi-johnHurt.png",
												name: "Mississippi John Hurt",
												date: "1893-1966", 
												writeUp: "After his recordings were deemed a commercial failure, John Smith Hurt became a farmer only to be tracked down 35 years later by folk musicologist Tom Hoskins to return to music and performing." 
											},
											{	image: "http://cities-in-blue.hifi.ca/images/artist-mississippi-sonnyBoyWilliams.png",
												name: "Sonny Boy Williamson II",
												date: "1912-1965", 
												writeUp: "Alex Miller, who went by the stage name Sonny Boy Williamson, was noted for his extremely charismatic and entertaining blues harmonica playing, as well as his knack for creative songwriting." 
											},
											{	image: "http://cities-in-blue.hifi.ca/images/artist-mississippi-charlie.png",
												name: "Charley Patton",
												date: "1891-1934", 
												writeUp: "Charley Patton is the “Father of Delta Blues”, an early style that originated in the Mississippi Delta. Charley gained a lot of notoriety for his onstage showmanship." 
											}],
									icon	: "http://cities-in-blue.hifi.ca/images/icon-Mississippi.png", 
									locations: [{ 	
													bar: "100 Men Hall", 
													url:"http://www.100menhall.org/",
													desc: "303 Union Street,</br>Bay Saint Louis, MS"
												},
												{
													bar: "The Blue Biscuit", 
													url:"http://www.thebluebiscuit.com/BlueBiscuit/Home.html",
													desc: "501 Second St.,</br>Indianola, MS"
												},
												{
													bar: "F. Jones Corner", 
													url:"http://www.fjonescorner.com/",
													desc: "303 North Farish St.,</br>Jackson, , MS"
												},
												{
													bar: "Rick's Cafe' Americain", 
													url:"http://www.rickscafe.net/",
													desc: "319B Highway 82 East,</br>Starkville, MS"
												},
												{
													bar: "The Shed BBQ and Blues Joint", 
													url:"http://theshedbbq.com/",
													desc: "7501 Hwy 57,</br>Ocean Springs, MS"
												}],
								}]
							}, 
							{	
								"name":"Texas", 
								"x":220, 
								"y":598,
								"over": "http://cities-in-blue.hifi.ca/images/over_texas.png", 
								"oX": 28,
								"oY": 476,  
								"data":[{
									city:  "Texas",
									video: "<iframe width='350' height='197' src='//www.youtube.com/embed/3XW4Rr6KH0Q' frameborder='0' allowfullscreen></iframe>",
									desc:  "The image of a bluesman and his guitar emerged in Texas in the 1920s and evolved into Stevie Ray Vaughn in the 1980s. Texas blues is guitar driven with a slight Spanish flavour.",
									artist: [{	image: "http://cities-in-blue.hifi.ca/images/artist-texas-blindLemon.png",
												name: "Blind Lemon Jefferson",
												date: "1893-1929", 
												writeUp: "The “Father of the Texas Blues”, Blind Lemon Jefferson was one of the most iconic blues musicians of the 1920s. He is known for his fast and intricate guitar playing and high-pitched voice." 
											},
											{	image: "http://cities-in-blue.hifi.ca/images/artist-texas-tboneWalker.png",
												name: "T-Bone Walker",
												date: "1910-1975", 
												writeUp: "A pioneer of the jump blues and electric blues sound, T-Bone Walker has been cited as an inspiration for many.  In fact, B.B. King cites Walker as the reason he bought an electric guitar in the first place." 
											}],
									icon	: "http://cities-in-blue.hifi.ca/images/icon-Texas.png", 
									locations: [{ 	
													bar: "Antone's", 
													url:"http://www.antonesnightclub.com/",
													desc: "13 W 5th St,</br>Austin, TX"
												},
												{
													bar: "Blue Moon Bar and Grill", 
													url:"",
													desc: "78704 S. Congress Ave.,</br>Austin, TX"
												},
												{
													bar: "Saxon Pub", 
													url:"http://thesaxonpub.com/",
													desc: "1320 South Lamar Boulevard,</br>Austin, TX"
												}],
								}]
							}, 
							{
								"name":"New_York_City", 
								"x":559, 
								"y":290,
								"over": "http://cities-in-blue.hifi.ca/images/over_newYork.png", 
								"oX": 476,
								"oY": 225,  
								"data":[{
									city:  "New York City",
									video: "<iframe width='350' height='197' src='//www.youtube.com/embed/-k8dOVamp7U' frameborder='0' allowfullscreen></iframe>",
									desc:  "The city with two names has two distinct flavours of blues. Urban jazz was incubated in the Cotton Club and the Apollo Theatre, while defiant acoustic blues was played in Greenwich Village, influencing the protest folk music movement of the 1960s.",
									artist: [{	image: "http://cities-in-blue.hifi.ca/images/artist-newYork-cabColloway.png",
												name: "Cab Calloway",
												date: "1907-1994", 
												writeUp: "A master scat singer and leader of one of the US’ most popular big bands, Cab Calloway and his orchestra became the co-house band at the Cotton Club in Harlem, NY." 
											},
											{	image: "http://cities-in-blue.hifi.ca/images/artist-newYork-joshWhite.png",
												name: "Josh White",
												date: "1914-1969", 
												writeUp: "A revolutionary musician, White broke the boundaries of segregation in music by being the first African-American to give a White House Command Performance, and lead a solo tour across the U.S." 
											}],
									icon	: "http://cities-in-blue.hifi.ca/images/icon-NewYork.png", 
									locations: [{ 	
													bar: "Apollo Theater", 
													url:"http://www.apollotheater.org/",
													desc: "253 W 125th St,</br>New York City, NY"
												},
												{
													bar: "Cotton Club", 
													url:"http://cottonclub-newyork.com/",
													desc: "656 W 125th St,</br>New York City, NY"
												},
												{
													bar: "B.B. King Blues Club & Grill", 
													url:"http://www.bbkingblues.com/",
													desc: "237 W 42 St,</br>New York City, NY"
												},
												{
													bar: "Terra blues", 
													url:"http://www.terrablues.com/index2.html",
													desc: "149 Bleecker St,</br>New York City, NY"
												},
												{
													bar: "55 Bar", 
													url:"http://www.55bar.com/",
													desc: "55 Christopher St,</br>New York City, NY"
												}],
								}]
							}
						]
					;

		for(i=0;i<cityObj.length; i++){
			var city = new CityScene(cityObj[i]);
		}

		function CityScene(cDetails){

			var identifier = "#"+cDetails.name;
			var posX = cDetails.x;
			var posY = cDetails.y;
			var cContainer = "<div id='"+cDetails.name+"' class='bluesCity'></div>";
			this.name = identifier;

			$("#cContainer").append($(cContainer));

			$(identifier).css({
				left: posX,
				top: posY 
			});
			
			this.top = $(identifier).css("top");
			this.left = $(identifier).css("left");

			$(identifier).on('click', doClick);
			$(identifier).on('mouseenter', doHover);
			$(identifier).on('mouseleave', doLeave);
		}

		function doHover( evt ){
			evt.preventDefault();
			evt.stopPropagation();

			for(i=0; i<cityObj.length; i++){
				if($(evt.target).attr('id') == cityObj[i].name){
					var overIcon = cityObj[i].over;

					var xPos = cityObj[i].oX;
					var yPos = cityObj[i].oY;
					break;
				}
			}
			var oState = "<div class='cOver'><img src='"+overIcon+"'/></div>";

			$("#cContainer").append($(oState));
			$(".cOver").css({
				left: xPos,
				top: yPos
			})
		}

		function doLeave( evt ){
			if($(".cOver")){
				$(".cOver").remove();
			}
		}

		function doClick( evt ){
			evt.preventDefault();

			cityCalled = $(evt.target).attr('id');

			for(i=0; i<cityObj.length; i++){
				if($(evt.target).attr('id') == cityObj[i].name){
					var sCity = cityObj[i].data;
					break;
				}
			}


			var template = '<div class="outter-popup">'+
							'<div class="mfp-close"></div>'+
							'<div class="lightBlueShell top">'+
								'<div class="topContainer clearfix">'+
									'<div class="cityDesc">'+
										'<h2 class="mfp-city"></h2>'+
										'<p class="mfp-desc"></p>'+
									'</div>'+
									'<div class="mfp-video"></div>'+
								'</div>'+
							'</div>'+
							'<div class="blueDevider"></div>'+
							'<div class="darkBlueShell clearfix">'+
								'<div class="artistHeader">KEY ARTISTS</div>'+
								'<div id="leftArrow" class="dArrows"></div>'+
								'<div class="artistWindow">'+
									'<div class="artistContainer">'+
										'<ul id="artistUL" class="clearfix"></ul>'+
									'</div>'+
								'</div>'+
								'<div id="rightArrow" class="dArrows"></div>'+
							'</div>'+
							'<div class="blueDevider"></div>'+
							'<div class="lightBlueShell bottom clearfix">'+
								'<div class="venueHeader"></div>'+
								'<div class="cIcon"></div>'+
								'<div class="barList">'+
									'<ul id="venueUL"></ul>'+
								'</div>'+
							'</div>'+
						'</div>';


			

				$.magnificPopup.open({
					key: 'my-popup', 
					items: sCity,
					type: 'inline',
					inline: {
						markup: template
					},
					gallery: {
						enabled: true 
					},
					callbacks: {
						markupParse: function(template, values, item) {
						},

						open: function() {
 							console.log("we want to see: "+cityCalled);

							if( sCity[0].artist != undefined ){

								var aList = artistGenerator( sCity[0].artist );

								$("#artistUL").append(aList);

								if(sCity[0].artist.length < 3){
									$('.dArrows').css('visibility', 'hidden');
								} else {
									$('.dArrows').css('visibility', 'visible');
									$('#leftArrow').css('opacity', '.3');
									$('#rightArrow').css('opacity', '1');
								}
							}

							if( sCity[0].icon != undefined ){
								var cityIcon = '<img id="iconImage" src="'+sCity[0].icon+'" />';
								$(".cIcon").append(cityIcon);
							}

							if( sCity[0].locations != undefined ){
								var vList = venueGenerator(sCity[0].locations);
								$("#venueUL").append(vList);
							} else {
								var vList = "No venues here!";
							}

							var cityName = sCity[0].city.toUpperCase();+' BLUES VENUES';
							var cityVenueTitle = '<h4 class="bVenue">'+cityName+' BLUES VENUES'+'</h4>';
							$(".venueHeader").append(cityVenueTitle);

							var lWidth = $(".artistShell").length * $(".artistShell").width();

							var setW = (($(".artistShell").length * $(".artistShell").width())+(($(".artistShell").length-1)*parseInt($(".artistShell").eq(1).css("margin-left"))));
							$(".artistContainer").width(setW);
							$("#artistUL").width(setW);


							$(".dArrows").on("click", moveArtists);
						},

						close: function(){
							aWWidth = 0;

							aCWidth = 0;

							$(".artistContainer").css("left", "0px");

							$(".artistShell").remove();
							$(".barVenue").remove();
							$("#iconImage").remove();
							$(".bVenue").remove();
						}

					}
				});

		}

		function moveArtists( evt ){
			if( !isMoving ){
				isMoving = true;
				var mL = parseInt($(".artistShell").eq(1).css("margin-left"));
	
				var aW = $(evt.target).siblings(".artistWindow");
	
				var aC = $(aW).find(".artistContainer");
	
				aWWidth = $(aW).width();
				aSWidth = $(".artistShell").width();
				aCWidth = $(aC).width();
	
				var cp = $(".artistContainer").position();
	
				switch($(evt.target).attr("id")){
					case "leftArrow":
	
						if( cp.left<0 ){
							$("#rightArrow").css('opacity', '1');
	
							if( (cp.left + aWWidth) < 0){
	
								$(".artistContainer").animate({"left": "+="+(aWWidth+mL)}, "slow", moveComplete);
							} else {
								$("#leftArrow").css('opacity', '.3');
								$("#rightArrow").css('opacity', '1');
	
								var r = Math.abs(cp.left);
								$(".artistContainer").animate({"left": "+="+r}, "slow", moveComplete);
							}
						}
						break;
	
					case "rightArrow":
						
						if( aCWidth > aWWidth)
						{
							if((aCWidth+cp.left)>(aWWidth*2)){
								$("#leftArrow").css('opacity', '1');
								$(".artistContainer").animate({"left": "-="+(aWWidth+mL)}, "slow", moveComplete);
							} else {
								$("#rightArrow").css('opacity', '.3');
								$("#leftArrow").css('opacity', '1');
	
								var r = aCWidth - (Math.abs(cp.left)+aWWidth);
	
								$(".artistContainer").animate({"left": "-="+r}, "slow", moveComplete);
							}
						}
						break;
				}
			}
		}

		function moveComplete(){
			isMoving = false;
		}

		function artistGenerator( val ){


			var lObj;
		
			for( i=0; i<val.length; i++){
				var fDir;
				if(i%2 == 0){
					fDir = "aIll fLeft";
				} else {
					fDir = "aIll fRight";
				}
				var single = 	'<li class="artistShell">'+
									'<div class="'+fDir+'">'+
										'<img src="'+val[i].image+'"/>'+
									'</div>'+
									'<div class="artist">'+
										'<div class="aName">'+val[i].name+'</div>'+
										'<div class="aDate">'+val[i].date+'</div>'+
										'<div class="aWriteUp">'+val[i].writeUp+'</div>'+
									'</div>'+
								'</li>';
				if( i == 0){
					lObj = single;
				} else {
					lObj += single;
				}
			}
			
			return lObj;
		}

		function venueGenerator( val ){

			var lObj;
			var linkedURL;

			for( i=0; i<val.length; i++){
				if(val[i].url){
					linkedURL = '<a href="'+val[i].url+'" target="_blank">'+'<span class="barName">'+val[i].bar+'</span>'+'</a>';
				} else {
					linkedURL = '<span class="barName">'+val[i].bar+'</span>';
				}

				var single = 	'<li class="barVenue">'+
									'<div class="singleBar">'+
										linkedURL+
										'<p>'+val[i].desc+'</p>'+
									'</div>'+
								'</li>';
				if( i == 0){
					lObj = single;
				} else {
					lObj += single;
				}
			}
			
			return lObj;
		}

		function fadeOut( evt ){
			evt.preventDefault();
		}

})