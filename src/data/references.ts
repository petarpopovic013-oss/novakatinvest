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
      "U Gundulićevoj ulici 33 na Podbari realizovan je savremen stambeno-poslovni objekat na lokaciji koja omogućava brz pristup centru Novog Sada i važnim gradskim sadržajima.",
      "Projekat obuhvata 23 stana, poslovni prostor, 23 parking mesta i 17 garažnih mesta u podzemnoj garaži, uz funkcionalno organizovane zajedničke prostore.",
    ],
    sections: [
      {
        title: "Stambeno-poslovni objekat sa 23 stana",
        paragraphs: [
          "Gundulićeva 33 projektovana je sa 23 stambene jedinice i poslovnim prostorom, uz raspored prilagođen funkcionalnom svakodnevnom životu.",
          "Na objektu su kompletno izvedene elektroinstalacije jake i slabe struje sa svim pripadajućim radovima.",
        ],
      },
      {
        title: "Kompletno izvedene elektroinstalacije jake struje",
        paragraphs: [
          "Elektroinstalacije jake struje obezbeđuju sigurno i pouzdano napajanje stanova, poslovnog prostora i zajedničkih delova objekta.",
          "Radovi su izvedeni u skladu sa projektnom dokumentacijom i zahtevima savremenog stambeno-poslovnog prostora.",
        ],
      },
      {
        title: "Elektroinstalacije slabe struje kao deo savremenog stanovanja",
        paragraphs: [
          "Pored instalacija jake struje, na objektu su realizovane i elektroinstalacije slabe struje, zajedno sa neophodnim pratećim radovima.",
          "Komunikacioni i sigurnosni sistemi izvedeni su u koordinaciji sa ostalim fazama gradnje i potrebama stambenog, poslovnog i garažnog dela objekta.",
        ],
      },
      {
        title: "Podzemna garaža i rešeno pitanje parkiranja",
        paragraphs: [
          "Objekat ima 23 parking mesta i 17 garažnih mesta, uz podzemnu garažu kao važan deo projekta.",
          "Ovakvo rešenje korisnicima donosi sigurniji smeštaj vozila i veći komfor na lokaciji nadomak centra grada.",
        ],
      },
      {
        title: "Moderna arhitektura i pažljivo uređeni zajednički prostori",
        paragraphs: [
          "Jednostavne i čiste linije daju zgradi savremen identitet koji se prirodno uklapa u urbano okruženje Podbare.",
          "Ulazni, hodnički i drugi zajednički prostori oblikovani su tako da svakodnevno korišćenje objekta bude prijatno i funkcionalno.",
        ],
      },
      {
        title: "Gundulićeva 33 – život nadomak centra Novog Sada",
        paragraphs: [
          "Gundulićeva 33 nalazi se na Podbari, u neposrednoj blizini centra Novog Sada i glavnih saobraćajnih pravaca.",
          "Lokacija omogućava jednostavan pristup trgovinama, obrazovnim ustanovama, poslovnim zonama i drugim svakodnevnim sadržajima.",
        ],
      },
      {
        title: "Uspešno realizovan projekat u Novom Sadu",
        paragraphs: [
          "Završetkom objekta Gundulićeva 33 realizovan je stambeno-poslovni projekat koji objedinjuje funkcionalne stambene jedinice, poslovni prostor, pouzdanu infrastrukturu i rešeno parkiranje.",
          "Danas je to prepoznatljiv objekat na Podbari, oblikovan za praktičan i udoban gradski život.",
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
