require('../node_modules/slick-carousel/slick/slick.css');
require('assets/style.scss'); // main css
require('script-loader!../node_modules/jquery/dist/jquery.min.js');
require('script-loader!../node_modules/slick-carousel/slick/slick.js');

require('assets/jquery_i18n/CLDRPluralRuleParser.js');
require('assets/jquery_i18n/jquery.i18n.js');
require('assets/jquery_i18n/jquery.i18n.messagestore.js');
require('assets/jquery_i18n/jquery.i18n.fallbacks.js');
require('assets/jquery_i18n/jquery.i18n.language.js');
require('assets/jquery_i18n/jquery.i18n.parser.js');
require('assets/jquery_i18n/jquery.i18n.emitter.js');
require('assets/jquery_i18n/jquery.i18n.emitter.bidi.js');

require('assets/images/favicon.png');


/**
 * If window scoll is more than 500 from top adds show class on scroll-to-top
 */
$(window).scroll(function(){
    const heightToShowScollButton = 500;
    const $scrollButton = $('#scroll-to-top');
    const winTop = $(window).scrollTop();

    // Used to show the scoll button
    if(winTop > heightToShowScollButton){
        if($scrollButton.hasClass('hide')){
            $scrollButton.addClass('show').removeClass('hide');
        }
    } else {
        if($scrollButton.hasClass('show')){
            $scrollButton.addClass('hide').removeClass('show');
        }
    }

    // Used for sticky header
    if (winTop >= 60) {
        $("body").addClass("sticky-header");
    } else {
        $("body").removeClass("sticky-header");
    }

})

/**
 * On scroll-to-top press animate to 0 in 1000 ms
 */
$('#scroll-to-top').click(function(event){ 
    event.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 1000);

    return false;
});

/**
 * Testimonials carousel
 */
$('.testimonialeHolder').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear'
  });
    

//
// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top - 50;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});
// burger menu
var navButton = document.querySelector('button[aria-expanded]');

function toggleNav() {
    var expanded = eval(navButton.getAttribute('aria-expanded'));
    navButton.setAttribute('aria-expanded', !expanded);
}
navButton.addEventListener('click', toggleNav);



// video script
// var vid = document.getElementById('vid');
// var vid01 = document.getElementById('vid01');
// $('#vid')[0].play();

// modal script
var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");

var closeButton = document.querySelector("#close-button");
var openButton = document.querySelector("#open-button");

closeButton.addEventListener("click", function () {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
    vid01.pause();
    vid01.currentTime = 0;
});

openButton.addEventListener("click", function () {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");

    vid01.play();
});

// video loop on hover script
var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}


/**
 * Coming soon
 */

// COUNTDOWN
function makeTimer(){
    
	var endTime = new Date("April 3, 2018 10:00:00");			
	endTime = (Date.parse(endTime) / 1000);

	var now = new Date();
	now = (Date.parse(now) / 1000);

	var timeLeft = endTime - now;

	var days = Math.floor(timeLeft / 86400); 
	var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
	var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
	var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

	$("#countdowndays").html(days + $.i18n( 'zile' ));
	$("#countdownhours").html(hours + $.i18n( 'ore' ));
	$("#countdownmins").html(minutes + $.i18n( 'minute' ));
}
// update every second
setInterval(function() { makeTimer(); }, 1000);




$.i18n().load({
    "ro": {

        "menu": "Meniu",
        "title": "România 1918. Oameni, momente și imagini",
        "m1": "Acasă",
        "m2": "Testimoniale",
        "m3": "Cuprins",
        "m4": "Demo",
        "m5": "Funcționalități",
        "m6": "Creatori",
        "m7": "Parteneri",

        "h1": "România 1918",
        "h2": "Oameni, momente și imagini",
        "h3": "Enciclopedia “România 1918. Oameni, momente și imagini” este o producție ",
        "h4": "SIVECO România,",
        "h5": " în parteneriat cu instituții prestigioase de cultură și personalități ale societății românești. ",
        "h6": "Anul 1918 a fost, pentru națiunea română, un miracol împlinit.",
        "h7": "Enciclopedia este oferită românilor de pretutindeni, ca un memento al celui mai important proiect național: întregirea neamului.",
       
        "soon":"Lansarea Enciclopediei digitale România 1918 va avea loc în Amfiteatrul Albastru al Camerei de Comerț și Industrie a României pe data de 3 Aprilie la ora 10:00.",
        "download":"Descarcă aplicația",
        "windows":"windows",
        "android":"android",        

        "t1": "„Enciclopedia 'România 1918. Oameni, momente și imagini' este dedicată miilor de românce și de români, femei, bărbați și copii, profesori și preoți, avocați și inventatori, țărănci și prințese, soldați și generali,  oameni simpli sau erudiți inventatori care s-au sacrificat pentru ca România să fie cea întreagă de astăzi. ",
        "t2": "Enciclopedia este creată prin voluntariat și generozitate și este oferită școlii românești și societății românești, pentru o continuă reamintire a celor care au creat România de astăzi.”",
        "t3": "Prof. Radu Jugureanu,",
        "t4": " coordonatorul proiectului",
        "t5": "„Sunt profesor de istorie și întotdeauna le povestesc elevilor mei, atunci când ajungem la acest capitol, că anul 1918 este un an miraculos. Început în cele mai grele condiții, cu mai mult de jumătate de țară sub ocupația inamicului, anul 1918 s-a încheiat cu o Românie învingătoare, întregită prin voința românilor din teritoriile aflate până atunci sub stăpânire străină. O Românie în care totul trebuia reconstruit, dar care își vedea pe deplin îndeplinite năzuințele naționale. Am încercat să redau această credință în paginile Enciclopediei.”",
        "t7": "Magda Stan,",
        "t8": " profesor de istorie, creatoarea scenariului prezentei Enciclopedii",
        "t9": "„Veți fi pentru o clipă contemporani cu acele modele reale, autentice, care prin generozitate, toleranță, sacrificiu și simplitate ne-au oferit nouă, astăzi, o Românie frumoasă.",
        "t10": "SIVECO Romania",
        "t11": "Veți afla în această Enciclopedie poveștile unor oameni ce nu apar în manualele din care învățăm la școală, dar sunt mult mai prețioși prin caracterul lor decât mulți dintre cei ce au notorietate.” ",
        "t12": "„Răsfoind filele acestui document am conștientizat mai mult decât oricând faptul că istoria neamului meu se racordează la un șir de fapte importante, că ”parohia” mea spirituală mă legitimează și mă ancorează temeinic într-un spațiu și un timp remarcabil - într-o țară cu o istorie puternică, într-un popor real și într-o familie vrednică de neuitare.",
        "t13": "Cuvine-se cu adevărat să fim locuiți în adâncul firii noastre de emoție, iar din cronica acelor momente de răscruce să facem diferența specifică dintre povești individuale și experiența unei deveniri - să trecem de la contemplarea pasivă a unor legende, la desăvârșirea monumentului recunoștinței noastre.”",
        "t14": "Dr. Simona Tănăsescu,",
        "t15":"Consiliul Științific", 


        "c11": "I. Primul Război Mondial ",
        "c12": "Marele Război",
        "c13": "Harta lumii în 1914 și alianțele politico-militare. Dinamica fronturilor de luptă, evenimentele memorabile derulate pe parcursul fiecărui an de război. Harta lumii în 1918-1920",
        "c14": "Războiul în cifre și imagini",
        "c15": "Armate, arme și echipamente militare. Pierderi umane și materiale. Mărturii și imagini de pe front și din spatele frontului.",

        "c21": "II. România sub arme",
        "c22": "De la neutralitate la beligeranță",
        "c23": "Filmul evenimentelor din perioada 1914-1916. Momentul intrării României în război",
        "c24": "Arme și câmpuri de bătălie: aliați și inamici. Echipamente militare utilizate pe front. Mărturiile soldaților și ale comandanților lor",
        "c25": "De la vlădică la opincă: oameni și fapte",
        "c26": "Marii eroi:",
        "c27": "Regele Ferdinand I, Regina Maria, Alexandru Averescu, Ecaterina Teodoroiu, Nadejda Știrbey, comandanți militari, soldați, preoți, medici etc.",
        "c28": "Copiii eroi:",
        "c29": "Măriuca Zaharia, Alexandru Daia, Ioan Guțe",

        "c31": "III. Frontul de acasă",
        "c32": "Familia",
        "c33": "Femeile și copiii în spatele frontului. Imagini și mărturii ale epocii",
        "c34": "Viața cotidiană",
        "c35": "Viața sub ocupația inamicului între 1916-1918. Viața în zona liberă (Moldova, orașul Iași între 1916-1918 etc.)",

        "c41": "IV. România întregită",
        "c42": "Anul Marii Uniri",
        "c43": "Principalele momente ale anului 1918. Harta României între 1914-1918",
        "c44": "Oamenii care au făcut Marea Unire",
        "c45": "Oameni politici din Basarabia, Bucovina, Transilvania și Banat, din Regatul României, cunoscuți și mai puțin cunoscuți. Încoronarea Regelui Ferdinand și a Reginei Maria la Alba Iulia (1922)",
        "c46": "La masa tratativelor",
        "c47": "Tratativele privind România întregită la Conferința de Pace de la Paris (1919-1920)",

        "c51": "V. Locuri ale memoriei",
        "c52": "Prin obiectivul aparatului de fotografiat",
        "c53": "Fotografi care au luptat sau doar au realizat fotografii ce s-au păstrat până azi. Resurse istorice rare sau unice",
        "c54": "Traseele memoriei",
        "c55": "Harta cimitirelor și monumentelor dedicate românilor care au luptat în Primul Război Mondial, în țară și în străinătate.",
        "c56": "Marele Război în știință, literatură, arte plastice și muzică: Imagini, fragmente de opere literare, muzică militară",

        "f1": "Funcționalități",
        "f2": "Versiuni de limbă",
        "f3": "Enciclopedia este disponibilă în trei versiuni de limbă: română, engleză și (în curând) franceză.",
        "f4": "Imagini",
        "f5": "Peste 300 de fotografii rare, din colecții particulare sau muzeale (din care 12 sunt animate)",
        "f6": "Video",
        "f7": "8 scurte mărturii filmate",
        "f8": "12 obiecte 3D, monumente-simbol ale Primului Război Mondial și Marii Unirii, care pot fi explorate din toate unghiurile",
        "f9": "Hărți interactive",
        "f10": "24 hărți interactive, în care se poate urmări progresul evenimentelor și implicarea tuturor actorilor din teatrul de război",
        "f11": "Accesibilitate",
        "f12": "Fontul poate fi mărit sau micșorat",
        "f13": "Adaptabilitate",
        "f14": "Enciclopedia este adaptată oricărui tip de echipament și poate fi vizualizată pe PC, laptop, tabletă sau smartphone",
        "f15": "Joc 3D",
        "f16": "Joc 3D care simulează bătălia de la Villers-Bretonneux",        

        "cr1": "Creatori",
        "cr2": "Enciclopedia “România 1918. Oameni, momente și imagini” este o producție SIVECO Romania, în parteneriat cu instituții prestigioase de cultură și personalități ale societății românești.",
        "cs1": "Consiliul științific",
        "cs2": "General Prof. Univ. Dr. Mihail E. Ionescu",
        "cs3": "Prof. Univ. Dr. Corneliu Mihail Lungu",
        "cs4": "Istoric Neculai Moghior",
        "cs5": "Prof. Univ. Dr. Ioan Opriș",
        "cs6": "Lt. Gen. (ret.) Dr. Dumitru Dorin Prunariu",
        "cs7": "Prof. Univ. Dr. Gheorghe Sbârnă",
        "cs8": "Prof. Univ. Dr. Ioan Scurtu",
        "cs9": "Dr. Simona Tănăsescu",
        "csp1": "Consiliul Științific Pedagogic",
        "csp2": "Dr. Doru Dumitrescu",
        "csp3": "Prof. Dr. Gabriel Leahu",
        "csp4": "Prof. Simona Tănase",

        "cop1": "Coordonator proiect:",
        "cop2": "Autor și scenarist:",
        "cop3": "Prof. Magda Stan",
        "cop4" :"Prof. Radu Jugureanu",

        "cont1": "Contributori, autori articole ",
        "cont2": "Prof. Univ. Dr. Alin Ciupală –",
        "cont3": "„Bătălia lor. Femeile din România în Primul Război Mondial”, Editura Polirom ",
        "cont4": "Cercet. Dr. Adrian-Silvan Ionescu -",
        "cont5": "”Serviciul Fotografic al Armatei şi contribuţia sa la iconografia Războiului cel Mare”, Muzeul Național, nr. XXV, 2013",
        "cont6": "Prof. Univ. Dr. Corneliu Mihail Lungu -",
        "cont7": "Conținut științific Cap. IV",
        "cont8": "Istoric Neculai Moghior -",
        "cont9": "Conținut științific Cap. II",
        "cont10": "Prof. Adrian Mihai Olaru -",
        "cont11": "Conținut științific Capitolele IV, V ",
        "cont12": "Prof. Univ. Dr. Ioan Opriș -",
        "cont13": "Conținut științific Cap. IV",
        "cont14": "Cercet. Dr. Claudiu Porumbăcean -",
        "cont15": "Conținut științific Cap. IV ",
        "cont16": "Prof. Univ. Dr. Gheorghe Sbârnă -",
        "cont17": "Conținut științific Cap. IV ",
        "cont18": "Prof. Univ. Dr. Ioan Scurtu -",
        "cont19": "Conținut științific Cap. IV ",
        "cont20": "Prof. Corneliu Stoica -",
        "cont21": "Conținut științific Cap. V",
        "cont22": "Cercet. Dr. Horia Șerbănescu -",
        "cont23": "Conținut științific Cap. II",

        "conl1": "Colecționari contributori ",
        "conl2": "Prof. Univ. Dr. A. Atanasiu",
        "conl3": "Prof. Dr. Carol Căpiță",
        "conl4": "Alexandra Crăciunoiu (Colecția Cristian Crăciunoiu)",
        "conl5": "Mihaela Kloos-Ilea, autor blog",
        "conl6": "Povestiri Săsești",
        "conl7": "Alin Dimăncescu, autor blog",
        "conl8": "Frații Alin Dimăncescu",
        "conl9": "Prof. Adrian Mihai Olaru",
        "conl10": "Prof. Corneliu Stoica",
        "conl11": "Dr. Simona Tănăsescu",

        "cd1": "Creație digitală",
        "cd2": "Coordonator:",
        "cd3": " Traducere:",
        "cd4": " Dezvoltatori:",
        "cd5": " Grafică, design, animație, film:",
        "cd6": " Testare:",
        "cd7": " Coordonator parteneri:",
        "cd8": " Marketing și comunicare:",
        "cd10": " (coordonator)",

        "p1": " Parteneri",

        "close":"Închide",
        "info0":"Povestea imaginii din fundal",        
        "info1":"360.728",
        "info2":" Acesta este numărul orfanilor de război în Primul Război Mondial, din care o treime proveneau din București.",
        "info3":"Pentru ei, au fost înființate orfelinate pe tot cuprinsul țării, din donații particulare și ajutoare oferite de armată, de familia regală sau de membri ai înaltei societăți.",
        "info4":"Organizarea orfelinatelor se făcea adesea pe principii militare.",
        "info5":"Copiii peste 12 ani lucrau în ateliere pentru a învăţa o meserie, cei între 8 şi 12 ani erau trimişi la şcolile din zonă, iar cei sub 7 ani rămâneau permanent în orfelinat unde se jucau, învăţau să citească şi să scrie sub supravegherea unor educatoare.",        

        "zile":" zile",
        "ore":" ore",
        "minute":" minute",

    },
    "en": {

        "menu": "Menu",
        "title": "Romania 1918. People, moments and images",        
        "m1": "Home",
        "m2": "Testimonials",
        "m3": "Chapters",
        "m4": "Demo",
        "m5": "Features",
        "m6": "Contributors",
        "m7": "Partners",

        "soon":"The launch of the Digital Encyclopedia Romania 1918 will take place in the Blue Amphitheater of the Chamber of Commerce and Industry of Romania on April 3 at 10:00.",
        "download":"Download",
        "windows":"windows",
        "android":"android",

        "h1": "Romania 1918",
        "h2": "People, moments and images",
        "h3": " „Romania 1918. People, moments and images” is a digital product created by ",
        "h4": "SIVECO Romania, ",
        "h5": " in partnership with prestigious cultural institutions and personalities of Romanian society.",
        "h6": "In Romanian history, 1918 is the year of a miracle becoming reality.  ",
        "h7": "The Encyclopedia is offered to Romanians everywhere, as a reminder of the most important national project:the national union.",

        "t1": "„The „Romania 1918. People, moments and images” Encyclopedia is dedicated to the thousands of Romanians, women, men and children, teachers and priests, lawyers and inventors, peasants and princesses, soldiers and generals, simple people or erudite inventors who sacrificed themselves for Romania to be the united nation of today.",
        "t2": "Built by volunteering and generosity, the Encyclopedia is offered to Romanian school and society, as a constant reminder of those who created contemporary Romania.”",
        "t3": "Prof. Radu Jugureanu,",
        "t4": " project coordinator",
        "t5": "„I am a history teacher and I always tell my students, when we come to this chapter, that 1918 is a miraculous year. While it began in the toughest conditions, with more than half a country under the enemy's occupation, 1918 has ended with a victorious Romania, completed by the will of the Romanians in the territories that were previously under foreign rule. A Romania in which everything had to be rebuilt, but who fully understood their national aspirations. I tried to bring this faith into the pages of the Encyclopedia.”",
        "t7": "Magda Stan,",
        "t8": " author of the Encyclopedia",
        "t9": "„For a moment, you will be contemporaries to those real, authentic models that, through generosity, tolerance, sacrifice and simplicity, have offered us, today, a beautiful Romania.",
        // "t10": "SIVECO Romania",
        "t11": "You will find in this Encyclopedia the stories of people who do not appear in the schoolbooks we learn, but who are more precious in their character than many of those who have notoriety.”",
        "t12": "„Looking through these pages, I became more aware than ever that the history of my people is connected to a series of important facts, that my 'spiritual parish' legitimizes me and anchors me in a remarkable space and time - in a country with a strong history, with real people, and a family worthy not to be forgotten.",
        "t13": "It is truly right to live in the depths of our emotional nature, and from the chronicle of those moments of crossroads to make the distinction between individual stories and the experience of becoming - let's pass from the passive contemplation of legends to the completion of our monument of gratitude.”",
        "t14": "Simona Tănăsescu, PhD. -",
        "t15":"Member of the Scientific Council", 
        

        "c11": "I. First World War ",
        "c12": "The Great War",
        "c13": "World map in 1914 and political-military alliances. Dynamics of the battle fronts; memorable events during each year of war. Map of the world in 1918-1920",
        "c14": "The War in numbers and images",
        "c15": "Armies, Weapons and Military Equipment. Human and material losses. Testimonies and pictures on the front and behind the front",

        "c21": "II. Romania under arms",
        "c22": "From neutrality to belligerence",
        "c23": "The events from 1914-1916. Romania enters the war",
        "c24": "Weapons and battlefields: Allies and enemies Military equipment used on the front. Testimonies of the soldiers and commanders",
        "c25": "From noblemen to peasants: people and deeds",
        "c26": "The big heroes:",
        "c27": "King Ferdinand I, Queen Maria, Alexander Averescu, Ecaterina Teodoroiu, Nadejda Ştirbey, military commanders, soldiers, priests, doctors, etc. The little heroes: Măriuca Zaharia, Alexandru Daia, Ioan Guţe",
        "c28": "The little heroes",
        "c29": "Măriuca Zaharia, Alexandru Daia, Ioan Guțe",

        "c31": "III. Homefront",
        "c32": "The family",
        "c33": "Women and children behind the front. Images and testimonies of the time",
        "c34": "Everyday life",
        "c35": "Life under the enemy occupation between 1916-1918. Life in the Free Zone (Moldova, Iasi between 1916-1918, etc.)",

        "c41": "IV. Romania united",
        "c42": "The year of the Great Union",
        "c43": "The film of the main moments of 1918. The map of Romania between 1914-1918",
        "c44": "The people who made the Great Union possible",
        "c45": "Political people from Bessarabia, Bucovina, Transylvania and Banat, from the Kingdom of Romania, either famous or less well-known. The Coronation of King Ferdinand and Queen Mary in Alba Iulia (1922)",
        "c46": "At the treaty table",
        "c47": "The Treaties on Romania Completed at the Peace Conference in Paris (1919-1920)",

        "c51": "Memory places",
        "c52": "Through the camera lens",
        "c53": "The photographers that have fought or just made photos that have been preserved until today. Rare or unique historical resources",
        "c54": "Memory paths",
        "c55": "The map of cemeteries and monuments dedicated to Romanians who fought in World War I in the country and abroad.",
        "c56": "The Great War in Science, Literature, Fine Arts and Music: Images, fragments of literary works, military music",

        "f1": "Features",
        "f2": "Language versions",
        "f3": "The Encyclopedia is available in three languages: Romanian, English and (very soon) French",
        "f4": "Images",
        "f5": "Over 300 rare photographs, from private collections or museums (12 were animated)",
        "f6": "Video",
        "f7": "8 short filmed testimonies",
        "f8": "12 3D objects, symbolic monuments of World War I and the Great Union, which can be explored from all angles",
        "f9": "Interactive maps",
        "f10": "24 interactive maps to track the progress of events and actors in the theater of war",
        "f11": "Visibility",
        "f12": "The font can be enlarged or reduced",
        "f13": "Accessibility",
        "f14": "The Encyclopedia is tailored to any type of device and can be viewed on your PC, laptop, tablet, or smartphone",
        "f15": "3D Game",
        "f16": "3D game simulating the Battle of Villers-Bretonneux",

        "cr1": "Contributors",
        "cr2": "The digital Encyclopedia “Romania 1918. People, moments and images” is a SIVECO Romania production, developed in partnership with prestigious cultural institutions and personalities of Romanian society.",
        "cs1": "The Scientific Council",
        "cs2": "Gen. Prof. Mihail E. Ionescu, PhD.",
        "cs3": "Prof. Corneliu Mihail Lungu, PhD.",
        "cs4": "Historian Neculai Moghior",
        "cs5": "Prof. Ioan Opriș, PhD.",
        "cs6": "Lt-Gen.(ret.). Dumitru Dorin Prunariu, PhD.",
        "cs7": "Prof. Gheorghe Sbârnă, PhD.",
        "cs8": "Prof. Ioan Scurtu, PhD.",
        "cs9": "Simona Tănăsescu, PhD",
        "csp1": "The Scientific Pedagogical Council",
        "csp2": "Doru Dumitrescu, PhD.",
        "csp3": "Prof. Gabriel Leahu, PhD.",
        "csp4": "Prof. Simona Tănase",

        "cop1": "Project Coordinator:",
        "cop2": "Instructional Designer and Author:",
        "cop3": "Prof. Magda Stan",
        "cop4" :"Prof. Radu Jugureanu",        

        "cont1": "Contributing authors ",
        "cont2": "Prof. Alin Ciupală, PhD –",
        "cont3": "„Their battle. The Romanian women during the First World War”, Polirom Publishing House ",
        "cont4": "Researcher Prof. Adrian-Silvan Ionescu, PhD -",
        "cont5": "„The Army's Photographic Service and its Contribution to the Great War iconography„ the National Museum, nr. XXV, 2013",
        "cont6": "Prof. Corneliu Mihail Lungu, PhD -",
        "cont7": "Scientific content Chap. IV",
        "cont8": "Hist. Neculai Moghior -",
        "cont9": "Scientific content Chap. II",
        "cont10": "Prof. Adrian Mihai Olaru -",
        "cont11": "Scientific content Chap. IV, V ",
        "cont12": "Prof. Dr. Ioan Opriș, PhD -",
        "cont13": "Scientific content Chap. IV",
        "cont14": "Researcher Claudiu Porumbăcean, PhD -",
        "cont15": "Scientific content Chap. IV ",
        "cont16": "Prof. Gheorghe Sbârnă, PhD -",
        "cont17": "Scientific content Chap. IV ",
        "cont18": "Prof. Ioan Scurtu, PhD -",
        "cont19": "Scientific content Chap. IV ",
        "cont20": "Prof. Corneliu Stoica -",
        "cont21": "Scientific content Chap. V",
        "cont22": "Researcher Horia Șerbănescu, PhD -",
        "cont23": "Scientific content Chap. II",

        "conl1": "Contributing collectors",
        "conl2": "Prof. A. Atanasiu, PhD",
        "conl3": "Prof. Carol Căpiță, PhD",
        "conl4": "Alexandra Crăciunoiu (Cristian Crăciunoiu collection)",
        "conl5": "Mihaela Kloos-Ilea, blog author of",
        "conl6": "Povestiri Săsești",
        "conl7": "Alin Dimăncescu, blog author of",
        "conl8": "Frații Alin Dimăncescu",
        "conl9": " Prof. Adrian Mihai Olaru",
        "conl10": "Prof. Corneliu Stoica",
        "conl11": "Simona Tănăsescu, PhD",

        "cd1": "Digital Creation:",
        "cd2": "Coordinator:",
        "cd3": " Translation:",
        "cd4": " Developers:",
        "cd5": " Graphics, design, animation, movie:",
        "cd6": " Testing:",
        "cd7": " Partners Coordinator:",
        "cd8": " Marketing and communication:",
        "cd10": " (coordinator),",

        "p1": " Partners",

        "close":"close",
        "info0":"The story of the background image",
        "info1":"360.728",
        "info2":"This is the number of orphans in World War I, one third of which came from Bucharest.",
        "info3":"For them, orphanages were established throughout the country, from private donations and aids provided by the army, the royal family or members of the high society.",
        "info4":" The organization of orphanages was often based on military principles.",
        "info5":" Children over 12 years of age were working in a workshop to learn a job; the 8 to 12 year olds were sent to local schools, and those under 7 were kept in the orphanage where they were playing, learning to read and write under the supervision of some educators.",

        "zile":" days",
        "ore":" hours",
        "minute":" minutes",
    },

    "fr": {
        "text1": "French",
    }
});

$('#lang_select').on('change', function () {
    $.i18n().locale = this.value;
    $('html').i18n();
    localStorage.setItem("language", this.value);
    $('html').attr('lang', this.value);
})

function languageSelector(){
    localLanguage = localStorage.getItem("language");

    if(!localLanguage){
        localStorage.setItem("language", $('html').attr('lang'))
    } else {
        $('html').attr('lang', localLanguage)
        $.i18n().locale = localLanguage;
        $('html').i18n();
        $('#lang_select option[value=' + localLanguage +']').attr('selected','selected');
    }
}

languageSelector()