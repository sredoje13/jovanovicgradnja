import React from "react";
import Servesutil from "./Servesutil";
import Servertext from "./Servertext";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import {styles} from './theme'
function Servespage(props) {
  const classes=styles()
    const serverindex=useSelector((State)=>State.mainstore.serverindex)
   const topscroll=useSelector((State)=>State.mainstore.servecetop)
    console.log(topscroll)
   const allserves = [
    {
      name: "Defektaža i inspekcija",
      text: " Uz našu savremenu opremu i ekspertnu ekipu, omogućavamo pristup objektima i nepristupačnim mestima kako bismo izvršili temeljan vizuelni pregled Vašeg krova, fasade i drugih delova objekta. Ovaj pregled se dokumentuje fotografijama i video snimcima kako bismo detaljno snimili svaki oštećeni deo krova, fasade i drugih delova objekta. Naš tim stručnjaka pregleda snimljene materijale i predlaže optimalna rešenja za uklanjanje problema. Bilo da se radi o oštećenjima od vetra, kiše, snega, ili drugih uzroka, mi smo tu da Vam pružimo najbolju moguću uslugu. Naš cilj je da osiguramo dugotrajnu zaštitu Vašeg objekta i sprečimo dalja oštećenja. Osim toga, naša ekipa je stručna za pružanje preporuka i saveta za održavanje objekta, kako bi se sprečila buduća oštećenja. Kontaktirajte nas danas kako bismo Vam pružili uslugu pregleda i predložili najbolje rešenje za Vaš objekat. ",
    },
    {
      name: "Pranje i čiscenje",
      text: "Naša firma se bavi profesionalnim pranjem i čišćenjem različitih vrsta fasada, uključujući staklene fasade, fasade od alubonda, limene fasade i druge. Naš tim visinskih radnika poseduje neophodno znanje i iskustvo za pružanje sigurne i efikasne usluge pranja i čišćenja fasada na visini. Nudimo rucno pranje visespratnica sa staklenom fasadom, kao i masinsko pranje visokim pritiskom staklenih, aluminijumskih, kamenih i drugih vrsta fasada. Naša oprema je savremena i pruža nam mogućnost da brzo i efikasno očistimo fasade na visini. Svesni smo da je važno koristiti hemijska sredstva koja su biorazgradiva i ekološki prihvatljiva za pranje fasada, te se upravo zbog toga koristimo savremenim hemijskim sredstvima koja ne ugrožavaju životnu sredinu. Naši visinski radnici su opremljeni svim neophodnim alatkama, opremom i sigurnosnom opremom koja im omogućava da pruže uslugu pranja i čišćenja fasada na visini na siguran i efikasan način. Kontaktirajte nas danas i saznajte više o našim uslugama pranja i čišćenja fasada na visini. Naš tim stručnjaka će rado odgovoriti na sva vaša pitanja i pomoći vam da odaberete najbolje rešenje za vaše potrebe.",
    },
    {
      name: "Hidroizolacija",
      text: "Naša firma je usmerena na pružanje kvalitetnih usluga hidroizolacije za vaše fasade i krovove. Koristimo savremene tehnologije i materijale kako bismo obezbedili dugotrajnu i pouzdanu hidroizolaciju. Usluge hidroizolacije koje pružamo uključuju hidroizolaciju diletacionih spojnica na betonskim fasadama, hidroizolaciju fugni na fasadama izrađenim od cigle, hidroizolaciju spojeva na krovovima, kao i hidroizolaciju betonskih i drugih fasada savremenim premazima. Naš tim stručnjaka poseduje znanje i iskustvo potrebno za pružanje pouzdane i sigurne usluge hidroizolacije za vaše fasade i krovove. Koristimo samo visokokvalitetne materijale kako bismo se osigurali da je hidroizolacija koju pružamo trajna i efikasna. Svesni smo koliko je važno obezbediti hidroizolaciju koja će sprečiti prodor vlage i štete koje ona može da prouzrokuje na vašem objektu. Zbog toga smo posvećeni obezbeđivanju pouzdanih i trajnih hidroizolacionih rešenja za sve vrste fasada i krovova. Kontaktirajte nas danas da biste saznali više o našim uslugama hidroizolacije fasada i krovova. Naš tim stručnjaka će rado odgovoriti na sva vaša pitanja i pomoći vam da odaberete najbolje rešenje za vaše potrebe.",
    },
    {
      name: "Vetrogeneratori",
      text: "Inspekcija vetrogeneratora je jedan od glavnih zadataka naših visinskih radnika. Oni se koriste užadima i sigurnosnom opremom da bi se popeli na vrh vetrogeneratora i pregledali sve njegove delove. To uključuje proveru lopatica, zupčanika, generatora, sistema za upravljanje i drugih delova. Pored inspekcije, naši alpinisti vrše i redovno održavanje vetrogeneratora. To može uključivati zamenu oštećenih lopatica, popravku električnih ili mehaničkih delova, kao i zamenu maziva i drugih tečnosti. Naši visinski radnici su obučeni da izvode sve ove zadatke na siguran i efikasan način. Kada je potrebno, naši alpinisti su takođe angažovani za montažu i demontažu vetrogeneratora. Ovo zahteva preciznost i iskustvo, a naši visinski radnici su obučeni da izvode ovaj posao sa najvišim standardima. Kontaktirajte nas danas da biste saznali više o našim uslugama inspekcije i održavanja hidrogeneratora. Naš tim stručnjaka će rado odgovoriti na sva vaša pitanja i pomoći vam da odaberete najbolje rešenje za vaš objekat. ",
    },
    {
      name: "Sanacija",
      text: " Kada su u pitanju fasade i krovovi, vremenom se mogu pojaviti oštećenja i nedostaci koji zahtevaju sanaciju. Naša firma pruža usluge sanacije za različite vrste fasada i krovova. Usluge sanacije koje pružamo uključuju sanaciju betonskih fasada, sanaciju dotrajale boje, sanaciju metalnih i limenih delova, sanaciju metalnih konstrukcija, kao i limarsko-pokrivačke sanacije krovova. Naš tim stručnjaka poseduje znanje i iskustvo potrebno za pružanje pouzdanih i sigurnih usluga sanacije za vaše fasade i krovove. Koristimo samo visokokvalitetne materijale kako bismo se osigurali da su sanacije koje pružamo trajne i efikasne. Svesni smo koliko je važno održavati kvalitet i sigurnost vašeg objekta, zbog toga smo posvećeni pružanju najboljih rešenja za sanaciju fasada i krovova. Naš tim će pregledati oštećenja na vašoj fasadi ili krovu i predložiti najbolje rešenje za vaše potrebe. Kontaktirajte nas danas da biste saznali više o našim uslugama sanacije fasada i krovova. Naš tim stručnjaka će rado odgovoriti na sva vaša pitanja i pomoći vam da odaberete najbolje rešenje za vaš objekat. ",
    },
    {
      name: "Zaštita od ptica",
      text: "Ako imate problema sa pticama na vašem objektu, mi smo tu da vam pomognemo. Naša usluga uključuje postavljanje inoksnih češljeva kako bi sprečili sletanje ptica na vaše okapnice, ivice krovova i druge delove objekta koji su im privlačni. Pored toga, postavljamo mreže od poliestera i pocinkovane žice kako bismo sprečili ulazak ptica u svetlarnike i druge otvorene delove na vašim objektima. Ove mreže su efikasne, a istovremeno su i neprimetne, tako da ne narušavaju estetiku vašeg objekta.Naš tim stručnjaka će vam pomoći da pronađete najbolje rešenje za vašu situaciju, a naše usluge su pouzdane i efikasne. Kontaktirajte nas kako bismo zajedno pronašli najbolje rešenje za vaš problem sa pticama. ",
    },
    {
      name: "Čiscenje snega i leda",
      text: "Snežni nanosi i led na objektima mogu predstavljati veliki izazov tokom zimskih meseci. Zbog toga, nudimo vam uslugu ugradnje grejnih sistema na vašim objektima kako biste izbegli probleme izazvane nagomilavanjem snega i leda. Naš stručni tim ima iskustva u ugradnji grejnih sistema za krovove, oluke, cevi za vodu, stepeništa i druge delove vašeg objekta koji su najizloženiji zimskim vremenskim uslovima. Ovi sistemi su energetski efikasni i mogu se programirati tako da rade po potrebi. Ukoliko već imate grejne sisteme, nudimo i uslugu održavanja i popravki kako biste bili sigurni da su uvek u ispravnom stanju i spremni za korišćenje tokom zime. Pored toga, nudimo i uslugu uklanjanja snega i leda radi održavanja bezbednosti prolaznika i korisnika objekata. Naši profesionalci će pažljivo i efikasno ukloniti sneg i led sa vašeg krova, stepeništa i drugih delova objekta. Pouzdanost i bezbednost su nam na prvom mestu, stoga možete biti sigurni da će naš tim odraditi posao kvalitetno i u skladu sa vašim potrebama. Kontaktirajte nas kako bismo vam pomogli da se pripremite za narednu zimsku sezonu. ",
    },
    {
      name: "Molersko farbarski radovi",
      text: " Naša firma pruža kvalitetne usluge molersko-farbarskih radova za vašu stolariju, uključujući farbanje i lakiranje. Takođe, nudimo antikorozivnu zaštitu za metalne konstrukcije kako bismo produžili njihov vek trajanja i sprečili štetu koju mogu izazvati korozija i rđa. Osim toga, vršimo farbanje betonskih i drugih vrsta fasada, u skladu sa vašim željama i potrebama. Naši stručnjaci koriste najkvalitetnije farbe i materijale kako bi vaša fasada izgledala sjajno i bila zaštićena od uticaja vremenskih uslova. Takođe, nudimo usluge farbanja antenskih stubova, vodotornjeva, betonskih i metalnih silosa. Naš tim poseduje sve potrebne alate i opremu kako bi ovi objekti dobili optimalnu zaštitu i estetski izgled. Uvereni smo da ćete biti zadovoljni kvalitetom naših usluga i konkurentnim cenama. Kontaktirajte nas kako bismo zajedno pronašli najbolje rešenje za vaše potrebe. ",
    },
    {
      name: "Montaža i demontaža",
      text: " Naša firma se bavi pružanjem profesionalnih usluga u oblasti montaže i demontaže reklamnih grafika, kao i instalacijom razlicitih sistema za klimatizaciju i ventilaciju. Naši stručno obučeni operativci poseduju dugogodišnje iskustvo i koriste najnoviju opremu kako bi osigurali sigurnu i efikasnu uslugu za naše klijente. U okviru naše ponude usluga, mozete naci montažu reklama od vinila u različitim formatima, uključujući i one velikih dimenzija. Takodje vrštimo montažu reklama od mes platna, samolepljivih folija i ramova za reklamne grafike. Pored toga, naš tim stručnjaka izvršava i montažu i demontažu kišne kanalizacije, kao i ventilacionih sistema za restorane, brzu hranu, kafiće i slične objekte. Svaki projekat započinjemo vizuelnim pregledom kako bismo se uverili da smo razumeli zahteve klijenata i kako bismo naučili više o okolnostima na gradilištu. Nakon toga, naša ekipa postavlja plan rada, koji je uskladjen sa vašim potrebama i rokovima. Naša firma se zalaže za visoke standarde kvaliteta i sigurnosti u radu, pa ćemo uvek osigurati da radovi budu izvedeni u skladu sa relevantnim standardima i propisima. Kontaktirajte nas i dopustite nam da pomognemo da vaše reklame i klimatizacija budu instalirane na najbolji moguci način. ",
    },
  ];
  const scroll=()=>{
    window.scrollTo({top:topscroll.offsetTop-200}) 

  }

  return (
    <div className="flexcolumn serves">
      <Typography variant="p" className={classes.titleonpage}
       sx={{color:'green'}} >USLUGE KOJE PRUŽA NAŠA FIRMA</Typography>
      <div className="flexstart divserves">
        <Servesutil
        scroll={scroll}
         allserves={allserves} />
        <Servertext name={allserves[serverindex].name} text={allserves[serverindex].text}/>
      </div>
    </div>
  );
}

export default Servespage;