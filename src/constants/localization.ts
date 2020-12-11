export const Strings = {
  missing: 'Hiányzás',
  fromWhichClasses: 'Melyik órákról?',
  comment: 'Megjegyzés',
  send: 'Küldés',
  apply: 'Jelentkezés',
  whichDanceStyle: 'Melyik tácstílus érdekel?',
  whichPlace: 'Melyik helyszín jó neked?',
  whenYouStart: 'Mikor kezdenél?',
  contact: 'Kapcsolat',
  name: 'Név',
  phoneNumber: 'Telefonszám',
  address: 'Lakcím',
  terms: 'Elolvastam és elfogadom az Adatkezelési Tájékoztatóban foglaltakat',
  data: 'Hozzájárulok a fenti adataim Adatkezelő által történő kezeléséhez.',
  editData: 'Adatok szerkesztése',
  newsAndEvents: 'Hírek és események',
  login: 'Bejelentkezés',
  goSingup: 'Még nincs felhasználód? Regisztrálj!',
  emailAddress: 'Email cím',
  password: 'Jelszó',
  passwordAgain: 'Jelszó újra',
  profile: 'Profil',
  privacyPolicy: 'Adatkezelési tájékoztató',
  logout: 'Kijelentkezés',
  singup: 'Regisztráció',
  goSignup: 'Már van fiókod? Jelentkezz be!',
  emptyTimetable: 'Az adott napon és helyszínen nincsen óra.',
  emptyClasses: 'Nincs megjeleníthető kurzus',
  timetable: 'Órarend',
  timetableError: 'Hiba a betöltés közben',
  again: 'Újra',
  error: 'Hiba',

  //Alerts
  applySucces: {
    title: 'Jelentkezés',
    message: 'Sikeresen elküldted a jelentkezést.'
  },
  applyFailure: {
    title: 'Hiba',
    message: 'Nem sikerült elküldeni a jelentkezést, próbáld meg újra.'
  },
  editSucces: {
    title: 'Adatok',
    message: 'Sikeresen megváltoztattad az adataid.'
  },
  editFailure: {
    title: 'Hiba',
    message: 'Nem sikerült megváltoztatni az adataid, próbáld meg újra.'
  },
  logoutFailure: {
    title: 'Hiba',
    message: 'Sikertelen kijelentkezés, próbáld meg újra'
  },
  passwordsNotMatch: {
    title: 'Hiba',
    message: 'A két jelszó nem egyezik.'
  },
  getClassesFailure: {
    title: 'Hiba',
    message: 'Nem sikerült lekérdezni a kurzusaidat.'
  },
  absenceSucces: {
    title: 'Hiányzás',
    message: 'Sikeresen jelezted a hiányzást.'
  },
  absenceFailure: {
    title: 'Hiba',
    message: 'Nem sikerült elküldeni a hiányzásokat.'
  },

  //Névjegy adatok
  email: { title: 'E-mail:', data: 'masterdancetanciskola@gmail.com' },
  phone: { title: 'Tel.:', data: '+36 (30) 633-6682' },
  arany: {
    title: 'Arany János Stúdió:',
    data:
      '6. kerület, Zichy Jenő utca 3. (Arany János metró megállótól 3 percnyi sétára van.)'
  },
  astoria: {
    title: 'Astoria Stúdió:',
    data:
      '5. Kerület, Semmelweis u. 1-3, (Astoria metró megállótól 3 percnyi sétára van. MD Dance Stúdió a Magyarok házában a második emeleten van)'
  }
};

//Firebase hibakódok a bejelentkezéshez és regisztrációhoz
export const ErrorCode = {
  ['auth/email-already-in-use']: 'Ez az email cím már használatban van.',
  ['auth/invalid-email']: 'Nem megfelelő email cím.',
  ['auth/operation-not-allowed']:
    'Nem engedélyezett az email címmel történő bejelentkezés',
  ['auth/weak-password']: 'Gyenge jelszó.',
  ['auth/user-disabled']: 'A felhasználó letiltva.',
  ['auth/user-not-found']: 'Nincs ilyen felhasználó, kérlek regisztrálj!',
  ['auth/wrong-password']: 'Hibás jelszó'
};

//Tánctanárok leírása
export const Teachers = {
  ['Alex']: {
    name: 'Tillinger Alex',
    description:
      'Alex a magyar táncos világ egyik legkiemelkedőbb fiatal tehetsége. Számtalanszor ért el dobogós helyezést versenyeken. Csapat szinten, és egyéniben egyaránt. Nem utolsó sorban Alex egyike azon kevés táncosoknak, akik magas szinten tudnak freestylet és koreográfiát is előadni. Tánciskolánkban ő rendelkezik a legmélyebb tudással az oldschool-hip-hop alapjai terén. Fontos számára, hogy megtanítsa diákjainak a hip-hopot a legmélyebb gyökereitől.\n\nReferencia:\nHuawei Flashmob Show\nOrfeum Hollywood show\nStrand Festival Grand Opening show\nNagy Duett 2017-2018\nCsak Show és más semmi 2018\nPassió XXI 2017\nRossmann 25. birthday show 2018\n\nTáncban elért eredmények:\nHip Hop International small group 2nd place\nHip Hop International megacrew 1st place\nRed Bull hip-hop dance battle 1st place\nFusion dance contest small group 1st place\nFusion dance contest duo 2nd place\nFusion dance contest solo 4th place\nWorld of dance Eindhoven 9th place'
  },
  ['Dani']: {
    name: 'Móritz Dániel',
    description:
      'Dani egy igazi nemzetközi arc, hazánk büszkesége, aki folyamatosan meghódítja a külföldi vogue ballokat. A Magyarországi vogue ball kultúra alapítója. A vogue táncstílus a fő profilja, azonban emellett a break és hip-hop stílusban is jártas. Csatlakozása színesíti tánciskolánk palettáját.\n\nReferencia:\nGrand Prize - Hands vs Arms on the Sci-Fi Kiki Ball\nIDO Worldchampionship Crew Battle - 1. hely\nMet Ball - London - Arms Control 1.hely\nMusic TV Ball (Berlin) - New Way 1. hely\nEat Slay Love (Bécs) - Arms Control & Vogue to Everything 1. hely'
  },
  ['Évi']: {
    name: 'Jakab Évi',
    description:
      'Jakab Évi az MD legrégebbi tanára. A kezdetektől velünk van. Elhivatottsággal, hűségesen szolgálja a tánciskolánk működését. Óráin mindig külön figyelmet szentel arra, hogy átérezzük a zene és a tánc mondanivalóját. Évi kifejezetten teenagerekkel foglalkozik, kezdő, illetve haladó csoportja egyaránt van.\n\nReferencia:\nHuawei Flashmob Show 2019\nMaster Dance Tánciskola Tánctanár 2015-től mai napig\nAppril Project Tagja 2012-2014\nX-Faktor Tánckara 2011-2013\nTáncban Elért Eredmények:\nÉva Funky Európa és Világbajnokság\nRitmikus Gimnasztika Országos Bajnok'
  },
  ['Zsolt']: {
    name: 'Varga Zsolt',
    description:
      'Zsolt egy igazi energiabomba. Mindig pozitívan lép be az órákra. Célja, hogy minden diákból a legtöbbet kihozza és elárassza őket a tánc szeretetével. Több féle stílusban is kiemelkedően tanít és táncol. Mindig alázatos és példamutató. Szívét lelkét beleadja minden egyes órába, hogy jó hangulat legyen.\nHazánkban egyik legjobban felkapott tánctanár, aki folyamatosan járja a világot és tanít. Jelenleg oszlopos tagja a Master Dance tánciskolának. Továbbá ő felel a produkcióink koreográfiájáért.\n\nReferencia:\nHuawei Flashmob 2019 - koreográfus\nFreelusion Amar 2018 - táncos\nTotal Dance Festival 2018 - koreográfus\nNagy duett 2018 - táncos\nX- Faktor 2017 - táncos\nWonderland RG EB 2017 - táncos\nPassió XXI 2017 - táncos\nJames Bond after Party UK 2016 - táncos\nX-faktor 2016 - táncos\nWorld of Dance 2015 - táncos\nSztárban sztár 2014 - táncos\nMeclaren Mrcades show 2014 - táncos\nMegasztár 2012 - táncos\n\nTanítás:\nStudio 68 - London\nPineapple - London\nBolero Dance Studio - Slovénia\nBajazz Dance Studio - Norvégia'
  }
};
