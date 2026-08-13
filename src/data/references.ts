export type ReferenceSection = {
  title: string;
  paragraphs: string[];
};

export type ReferenceStory = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  location: string;
  summary: string;
  video: string;
  poster: string;
  facts: Array<{ label: string; value: string }>;
  gallery: Array<{ src: string; alt: string }>;
  introduction: string[];
  sections: ReferenceSection[];
};

export const referenceStories: ReferenceStory[] = [
  {
    slug: "gunduliceva-33",
    name: "Gundulićeva 33",
    eyebrow: "Završena referenca · Podbara",
    headline: "Savremen stambeno-poslovni objekat nadomak centra.",
    location: "Gundulićeva 33, Novi Sad",
    summary:
      "Moderan objekat koji spaja funkcionalnost savremenog stanovanja, kvalitet izvođenja i praktičnost svakodnevnog života u gradu.",
    video: "/reference-media/gunduliceva-33/hero.mp4",
    poster: "/reference-media/gunduliceva-33/02.webp",
    facts: [
      { label: "Stanovi", value: "23" },
      { label: "Parking mesta", value: "23" },
      { label: "Garažna mesta", value: "17" },
      { label: "Lokacija", value: "Podbara" },
    ],
    gallery: [
      { src: "/reference-media/gunduliceva-33/01.webp", alt: "Bočni pogled na završeni objekat Gundulićeva 33" },
      { src: "/reference-media/gunduliceva-33/05.webp", alt: "Frontalni pogled na fasadu objekta Gundulićeva 33" },
      { src: "/reference-media/gunduliceva-33/03.webp", alt: "Objekat Gundulićeva 33 i uređeno dvorište iz vazduha" },
      { src: "/reference-media/gunduliceva-33/04.webp", alt: "Širi pogled na fasadu objekta Gundulićeva 33" },
    ],
    introduction: [
      "U Gundulićevoj ulici 33 u Novom Sadu, na području Podbare, realizovan je moderan stambeno-poslovni objekat projektovan tako da spoji funkcionalnost savremenog stanovanja, kvalitet izvođenja i praktičnost svakodnevnog života u gradu. Objekat je smešten na izuzetno dobroj gradskoj lokaciji, u delu Novog Sada koji omogućava brz pristup centru, važnim saobraćajnicama i svim sadržajima potrebnim za udoban život.",
      "Projekat Gundulićeva 33 obuhvata ukupno 23 stana, poslovni prostor, parking kapacitete i podzemnu garažu. Posebna pažnja tokom projektovanja i izvođenja radova posvećena je kvalitetu instalacija, bezbednosti, jednostavnom održavanju objekta i komforu njegovih budućih korisnika.",
      "Savremena arhitektura, jasno definisane linije fasade i pažljivo obrađeni zajednički prostori daju objektu moderan, ali nenametljiv izgled koji se prirodno uklapa u urbano okruženje Podbare.",
    ],
    sections: [
      {
        title: "Stambeno-poslovni objekat sa 23 stana",
        paragraphs: [
          "Gundulićeva 33 projektovana je kao stambeno-poslovni objekat sa 23 stambene jedinice, raspoređene tako da budućim stanarima omoguće prijatan i funkcionalan životni prostor.",
          "Kod ovakvih projekata kvalitet se ne ogleda samo u onome što je vidljivo na prvi pogled. Završna obrada, fasada i enterijer predstavljaju samo jedan deo objekta, dok se njegov dugoročni kvalitet u velikoj meri zasniva na instalacionim sistemima i tehničkim rešenjima koji svakodnevno omogućavaju njegovo normalno i bezbedno funkcionisanje.",
          "Upravo zato je na objektu u Gundulićevoj 33 velika pažnja posvećena kompletnom izvođenju elektroinstalacija jake i slabe struje, zajedno sa svim pripadajućim i pratećim radovima.",
        ],
      },
      {
        title: "Kompletno izvedene elektroinstalacije jake struje",
        paragraphs: [
          "Na stambeno-poslovnom objektu izvedene su elektroinstalacije jake struje, odnosno instalacije koje predstavljaju osnovu za sigurno i pouzdano napajanje stanova, poslovnog prostora i zajedničkih delova objekta električnom energijom.",
          "Kod savremenih višestambenih objekata elektroinstalacije moraju biti planirane tako da odgovore na značajno veće potrebe korisnika nego što je to bio slučaj kod starijih stambenih zgrada. Broj električnih uređaja u domaćinstvima je veći, zahtevi za komforom rastu, a bezbednost i pouzdanost sistema predstavljaju apsolutni prioritet.",
          "Radovi na objektu Gundulićeva 33 u Novom Sadu izvedeni su kao deo kompletnog sistema objekta, uz poštovanje projektne dokumentacije i svih zahteva koje podrazumeva izgradnja modernog stambeno-poslovnog prostora.",
          "Posebno je važno da ovakve instalacije budu pravilno izvedene još u fazi izgradnje, jer kvalitet skrivenih sistema direktno utiče na pouzdanost objekta tokom njegovog dugogodišnjeg korišćenja.",
        ],
      },
      {
        title: "Elektroinstalacije slabe struje kao deo savremenog stanovanja",
        paragraphs: [
          "Pored instalacija jake struje, na objektu su realizovane i elektroinstalacije slabe struje, zajedno sa neophodnim pratećim radovima.",
          "Savremeni stambeno-poslovni objekti više se ne mogu posmatrati samo kroz kvadraturu stanova i izgled fasade. Komunikacioni i drugi niskonaponski sistemi postali su sastavni deo kvalitetnog stanovanja i predstavljaju važan deo infrastrukture svakog novog objekta.",
          "Pravilnim planiranjem i izvođenjem instalacija slabe struje stvaraju se tehnički preduslovi za jednostavno korišćenje različitih komunikacionih, sigurnosnih i drugih sistema koji su danas sastavni deo moderne stambene zgrade.",
          "Kod projekta u Gundulićevoj ulici radovi su realizovani u koordinaciji sa ostalim fazama izgradnje, što je posebno značajno kod objekata sa većim brojem stanova, poslovnim prostorima, zajedničkim komunikacijama i garažnim delom.",
        ],
      },
      {
        title: "Podzemna garaža i rešeno pitanje parkiranja",
        paragraphs: [
          "Jedna od najvećih prednosti projekta Gundulićeva 33 jeste pažljivo rešeno pitanje parkiranja.",
          "U centralnim gradskim zonama i starijim novosadskim naseljima pronalaženje slobodnog parking mesta često predstavlja svakodnevni problem. Zbog toga je već prilikom projektovanja ovog stambeno-poslovnog objekta značajna pažnja posvećena parking kapacitetima i sigurnom smeštaju vozila.",
          "Objekat je projektovan sa 23 parking mesta i 17 garažnih mesta, uz podzemnu garažu koja predstavlja važan deo celokupnog koncepta objekta.",
          "Na taj način korisnicima je obezbeđen znatno viši nivo praktičnosti. Nakon dolaska kući nema svakodnevne potrage za slobodnim mestom u okolnim ulicama, dok garažni prostor dodatno doprinosi zaštiti vozila od vremenskih uslova i povećava komfor stanovanja.",
          "Dobro rešeno parkiranje danas predstavlja jednu od najvažnijih karakteristika kvalitetne novogradnje u Novom Sadu, posebno kada je reč o objektima koji se nalaze u širem centru grada.",
        ],
      },
      {
        title: "Moderna arhitektura i pažljivo uređeni zajednički prostori",
        paragraphs: [
          "Izvedeni objekat karakteriše savremen arhitektonski izraz, sa kombinacijom tamnijih fasadnih površina, svetlijih detalja i pažljivo uklopljenih materijala.",
          "Jednostavne i čiste linije daju zgradi moderan identitet, ali bez agresivnog odstupanja od neposrednog gradskog okruženja. Rezultat je objekat koji već na prvi pogled ostavlja utisak kvalitetne savremene gradnje.",
          "Posebna pažnja posvećena je i zajedničkim komunikacijama unutar zgrade. Ulazni i hodnički prostori oblikovani su u modernom stilu, uz kombinovanje neutralnih tonova, tekstura kamena i detalja u izgledu drveta. Diskretna linearna rasveta dodatno naglašava arhitekturu prostora i doprinosi urednom i savremenom izgledu enterijera.",
          "Takvi detalji možda ne predstavljaju najveći deo ukupne investicije, ali upravo oni svakodnevno utiču na prvi utisak stanara, vlasnika poslovnih prostora i njihovih gostiju.",
        ],
      },
      {
        title: "Gundulićeva 33 – život nadomak centra Novog Sada",
        paragraphs: [
          "Lokacija predstavlja jednu od najvažnijih vrednosti svakog stambenog projekta.",
          "Gundulićeva 33 nalazi se na Podbari, tradicionalnom novosadskom naselju koje je poslednjih godina prošlo kroz intenzivnu transformaciju. Stare porodične kuće i postojeća urbana struktura postepeno se dopunjuju savremenim stambenim objektima, dok blizina centra grada ostaje jedna od najvećih prednosti ovog dela Novog Sada.",
          "Stanovanje na ovoj lokaciji omogućava jednostavan pristup različitim gradskim sadržajima, trgovinama, obrazovnim i poslovnim zonama, uslužnim delatnostima i glavnim saobraćajnim pravcima.",
          "Upravo spoj dobre lokacije, moderne gradnje i rešenog pitanja parkiranja čini ovakve projekte posebno interesantnim za ljude koji žele da žive blizu centra, a da pritom ne odustanu od komfora koji pruža savremena novogradnja.",
        ],
      },
      {
        title: "Kvalitet objekta počinje od instalacija koje se ne vide",
        paragraphs: [
          "Kod završenog objekta najlakše je primetiti njegovu fasadu, ulaz, hodnike ili završne materijale. Međutim, veliki deo stvarnog kvaliteta jedne zgrade nalazi se iza zidova, plafona i završnih obloga.",
          "Zbog toga izvođenje elektroinstalacija jake i slabe struje u stambeno-poslovnim objektima zahteva detaljno planiranje, preciznu koordinaciju sa ostalim izvođačima i doslednu realizaciju prema tehničkoj dokumentaciji.",
          "Na objektu Gundulićeva 33 izvedeni su upravo takvi radovi, uključujući sve potrebne prateće aktivnosti koje omogućavaju da instalacioni sistemi funkcionišu kao jedna celina.",
          "Za objekat sa 23 stana, poslovnim sadržajem, podzemnom garažom i zajedničkim prostorijama, kvalitetna elektroinfrastruktura predstavlja jedan od osnovnih preduslova za bezbedno i pouzdano korišćenje celog kompleksa.",
        ],
      },
      {
        title: "Uspešno realizovan projekat u Novom Sadu",
        paragraphs: [
          "Završetak objekta Gundulićeva 33, Novi Sad predstavlja još jedan primer realizacije modernog stambeno-poslovnog projekta u kojem su arhitektura, funkcionalnost, instalaciona infrastruktura i potrebe budućih korisnika posmatrane kao delovi jedinstvene celine.",
          "Sa 23 stana, poslovnim prostorom, podzemnom garažom, 23 parking mesta i 17 garažnih mesta, objekat odgovara zahtevima savremenog urbanog stanovanja.",
          "Kompletno izvedene elektroinstalacije jake i slabe struje, zajedno sa svim pratećim radovima, predstavljaju važan deo tehničke infrastrukture objekta i osnovu za njegovo pouzdano funkcionisanje.",
          "Gundulićeva 33 danas je završen i prepoznatljiv objekat na Podbari – savremena zgrada koja kvalitetom izvođenja, uređenim zajedničkim prostorima, funkcionalnošću i dobro rešenim parkingom pruža ono što se od moderne novogradnje u Novom Sadu i očekuje: sigurnost, praktičnost i kvalitetan prostor za život i poslovanje.",
        ],
      },
    ],
  },
  {
    slug: "atrium-residence",
    name: "Atrium Residence",
    eyebrow: "Završena referenca · Telep",
    headline: "Novi standard stanovanja na Telepu.",
    location: "Petefi Šandora 19–23, Novi Sad",
    summary:
      "Pet lamela, zeleno unutrašnje dvorište i sadržaji oblikovani kao jedinstvena, mirna stambena celina.",
    video: "/reference-media/atrium-residence/hero.mp4",
    poster: "/reference-media/atrium-residence/01.webp",
    facts: [
      { label: "Lamele", value: "5" },
      { label: "Stanovi", value: "194" },
      { label: "Poslovni lokali", value: "9" },
      { label: "Površina projekta", value: "10.651 m²" },
    ],
    gallery: [
      { src: "/reference-media/atrium-residence/01.webp", alt: "Atrium Residence i centralno dvorište iz vazduha" },
      { src: "/reference-media/atrium-residence/03.webp", alt: "Širi pogled na kompleks Atrium Residence na Telepu" },
      { src: "/reference-media/atrium-residence/04.webp", alt: "Unutrašnje dvorište kompleksa Atrium Residence" },
      { src: "/reference-media/atrium-residence/05.webp", alt: "Atrium Residence u urbanom okruženju Telepa" },
    ],
    introduction: [
      "Na adresi Petefi Šandora 19–23 u Novom Sadu izgrađen je Atrium Residence, stambeno-poslovni kompleks koji je od samog početka zamišljen kao nešto više od niza stanova povezanih zajedničkim hodnicima. Ideja projekta bila je da se na Telepu formira uređena stambena celina u kojoj će ljudi imati privatnost sopstvenog doma, ali i prostor u kojem mogu da provedu vreme napolju, prošetaju, odmore se ili jednostavno budu udaljeni od gradske gužve čim uđu u svoj kompleks.",
      "Atrium Residence čini pet lamela sa ukupno 194 stana i 9 poslovnih lokala, dok čitav projekat zauzima približno 10.651 m². Veličina kompleksa omogućila je da se mnogo pažnje posveti ne samo samim objektima, već i prostoru između njih – zelenilu, pešačkim površinama, mestima za odmor, sadržajima za decu i rekreaciji.",
      "Upravo je taj odnos između arhitekture i zajedničkog prostora jedna od stvari po kojoj se Atrium Residence izdvaja od klasične novogradnje u Novom Sadu.",
    ],
    sections: [
      {
        title: "Pet lamela koje funkcionišu kao jedna celina",
        paragraphs: [
          "Iako se kompleks sastoji od pet zasebnih lamela, arhitektonski je oblikovan kao jedinstvena celina. Kombinacija svetlih fasada, opeke i tamnijih detalja dala je objektima moderan izgled, ali bez potrebe za prenaglašenim arhitektonskim rešenjima.",
          "Posmatran iz vazduha, najbolje se vidi način na koji su lamele raspoređene oko unutrašnjeg prostora kompleksa. Zgrade praktično formiraju sopstveni mali urbani ambijent, odvojen od ulične dinamike Petefi Šandora i okolnog Telepa.",
          "Takvo rešenje stanarima donosi nešto što je u velikom gradu sve vrednije – osećaj da se povratkom kući zaista izlazi iz gradske gužve.",
          "Atrium Residence je projektovan tako da istovremeno bude dovoljno veliki da ponudi sadržaje koje manji objekti teško mogu da imaju, a opet organizovan tako da stanovanje zadrži osećaj privatnosti.",
        ],
      },
      {
        title: "194 stana za različite potrebe i životne faze",
        paragraphs: [
          "Ukupno 194 stana omogućilo je veliki izbor različitih struktura i kvadratura.",
          "U kompleksu su projektovane garsonjere od 28,28 m² do 31,61 m², pogodne za jednu osobu, mlađe kupce ili kao investiciona nekretnina.",
          "Dvosobni stanovi imaju površine od 38,07 m² do 55,90 m², dok se kvadrature trosobnih stanova kreću od 53,38 m² do 76,35 m². Za porodice kojima je potreban još komforniji životni prostor projektovani su i četvorosobni stanovi površine od 70,71 m² do 102,50 m².",
          "Takav raspon nije slučajan. Cilj nije bio napraviti samo jedan tip stana i ponoviti ga kroz ceo kompleks, već omogućiti da u Atrium Residence-u svoj prostor pronađu ljudi sa potpuno različitim potrebama.",
          "Nekome je važan kompaktan stan koji se lako održava. Drugome je potreban dodatni prostor za decu, rad od kuće ili veliku dnevnu zonu. Kod projekta ovog obima bilo je moguće ponuditi oba.",
        ],
      },
      {
        title: "Zeleno srce Atrium Residence-a",
        paragraphs: [
          "Najprepoznatljiviji deo kompleksa nalazi se upravo između njegovih lamela.",
          "Umesto prostora koji bi služio isključivo za komunikaciju između ulaza, centralni deo Atrium Residence-a zamišljen je kao uređeno dvorište zatvorenog tipa namenjeno stanarima kompleksa.",
          "Zelene površine, staze, uređeno rastinje i zone za boravak na otvorenom menjaju način na koji se doživljava život u višestambenom objektu. Stan ne prestaje na ulaznim vratima – deo svakodnevnog prostora postaje i uređeno okruženje zgrade.",
          "To je posebno važno porodicama sa decom, ali i svima koji žele da imaju mogućnost da vreme provedu napolju bez potrebe da svaki put odlaze u drugi deo grada.",
          "Kompleks uključuje park, dečije igralište i prostor za vežbanje na otvorenom, dok su rekreativni sadržaji planirani tako da podstaknu aktivniji način života i učine zajednički prostor stvarnim delom svakodnevice.",
          "Atrium Residence je zbog toga moguće posmatrati kao svojevrsni mali kondominijum – stambeni prostor u kojem sadržaji ne prestaju na granicama pojedinačnog stana.",
        ],
      },
      {
        title: "Privatnost i kontrolisan pristup kompleksu",
        paragraphs: [
          "Kod većih stambenih kompleksa jedna od važnih tema jeste pitanje bezbednosti i kontrole pristupa.",
          "Atrium Residence je koncipiran kao kompleks zatvorenog tipa, sa kontrolisanim ulaskom, rampom i interfonskim sistemima. Ideja ovakvog rešenja nije izolacija od grada, već stvaranje dodatnog nivoa privatnosti u prostoru koji svakodnevno koriste stanari.",
          "Na taj način unutrašnje dvorište, pešačke površine i rekreativne zone nisu samo dekorativan deo projekta, već prostor u kojem stanari mogu mnogo opuštenije da provode vreme.",
          "Posebnu vrednost ovakvog koncepta prepoznaju porodice sa decom, jer uređen prostor između zgrada postaje mesto za igru i druženje koje nije neposredno izloženo intenzivnom gradskom saobraćaju.",
        ],
      },
      {
        title: "Devet lokala donosi sadržaje u sam kompleks",
        paragraphs: [
          "Atrium Residence nije isključivo stambeni projekat.",
          "U prizemlju objekata nalazi se 9 poslovnih lokala, čime je kompleks dobio i poslovnu komponentu. Poslovni prostori projektovani su tako da mogu da odgovore različitim vrstama delatnosti, a pojedini lokali imaju površine od približno 94,26 m² do 144,68 m².",
          "Njihovo prisustvo doprinosi funkcionalnosti celog projekta. Kod savremenih stambenih kompleksa upravo sadržaji u prizemlju često omogućavaju da se deo svakodnevnih obaveza obavi bez odlaska u drugi kraj grada.",
          "Istovremeno, lokacija na Telepu i broj stanovnika u neposrednom okruženju čine ove prostore zanimljivim i sa poslovne strane.",
        ],
      },
      {
        title: "Telep – dovoljno blizu centra, dovoljno daleko od gužve",
        paragraphs: [
          "Jedna od osnovnih poruka koja je pratila projekat Atrium Residence bila je: „Blizu centra, a daleko od gradske gužve.“",
          "Ta rečenica prilično dobro opisuje njegovu lokaciju.",
          "Telep se tokom prethodnih godina značajno razvio i postao jedan od važnih stambenih delova Novog Sada. Sa jedne strane omogućava relativno brz pristup centralnim gradskim zonama i glavnim saobraćajnicama, a sa druge i dalje pruža drugačiji ritam od najužeg gradskog jezgra.",
          "Lokacija u Petefi Šandora 19–23 omogućava stanarima da budu povezani sa ostatkom Novog Sada, bez potrebe da svakodnevni život provode u najopterećenijim gradskim zonama.",
          "To je naročito važno danas, kada se kvalitet lokacije više ne meri samo kilometrima do centra. Sve više se vrednuju mirnije okruženje, dostupnost sadržaja, kvalitet prostora oko zgrade i mogućnost da se deo slobodnog vremena provede neposredno uz sopstveni dom.",
        ],
      },
      {
        title: "Projekat u kojem je važan i prostor između zgrada",
        paragraphs: [
          "Atrium Residence najbolje pokazuje koliko se način razmišljanja o novogradnji promenio.",
          "Dobar stambeni projekat više nije samo kvalitetno izvedena zgrada sa dobrim stanovima. Važno je šta stanar vidi kada izađe iz ulaza, koliko prostora postoji između objekata, gde dete može da se igra, gde se može prošetati i koliko privatnosti pruža čitav kompleks.",
          "Kod ovog projekta pet lamela, 194 stana, 9 lokala, uređeno centralno dvorište, park, dečije igralište i rekreativne zone zajedno stvaraju jednu celinu.",
          "Veliki deo kvaliteta Atrium Residence-a upravo se nalazi u tome što prostor nije posmatran samo kroz broj izgrađenih kvadrata, već kroz način na koji će ti kvadrati biti korišćeni kada se objekat napuni životom.",
        ],
      },
      {
        title: "Atrium Residence danas",
        paragraphs: [
          "Realizacijom projekta na adresi Petefi Šandora 19–23, Novi Sad, Telep je dobio veliki i prepoznatljiv stambeno-poslovni kompleks savremene arhitekture.",
          "Za izvođenje projekta bilo je važno imati pouzdane partnere koji mogu da odgovore zahtevima gradnje ovakvog obima, među kojima je i GP GOAT GRADNJA, dok završeni kompleks danas pokazuje konačan rezultat planiranja, projektovanja i izvođenja.",
          "Atrium Residence nije interesantan samo zbog svojih dimenzija. Njegova prava vrednost nalazi se u konceptu – u pokušaju da se veliki broj stanova organizuje tako da ljudi ne dobiju samo adresu, već prijatno i uređeno okruženje za svakodnevni život.",
          "Sa pet lamela, gotovo dve stotine stanova, poslovnim prostorima i pažljivo uređenim zajedničkim delovima, Atrium Residence na Telepu predstavlja primer moderne novogradnje u Novom Sadu u kojoj su stanovanje, privatnost, zelenilo i sadržaji objedinjeni na jednom mestu.",
        ],
      },
    ],
  },
];

export const getReferenceStory = (slug: string) =>
  referenceStories.find((reference) => reference.slug === slug);
