import React from 'react';
import Image from '../utils/15godina-removebg-preview.png'
import {styles} from '../Serveces/theme'
import { Typography } from '@mui/material';
import Image2 from '../utils/slike/IMG-a27c3bad67b9713fbe7fadf49a0f7011-V.jpg'
function Aboutus(props) {
    const classes=styles()
    return (
        <div className='flexcolumn aboutus margin'>
      <Typography variant="p" class={classes.titleonpage}
       sx={{color:'green'}} >O NAMA</Typography>           
        <img alt='slika' className='dalibor' src={Image2}/>
            <div className='aboutdiv'>
                <h3><b>Dalibor Jovanovic</b></h3>
                <p>Karijera u industrijskom alpinizmu je započela u toku službe u Specijalnoj brigadi Vojske Srbije kada pocinje da se bavi industrijskim alpinizmom. Zahvaljujući svojoj obuci i iskustvu, postaje veoma stručan u korišćenju alpinističke opreme i tehnika u građevinarstvu. Njegova ekspertiza u primenjenom alpinizmu u građevinarstvu omogućava mu da obavlja poslove koji su teško dostupni i zahtevaju veliku preciznost, poput čišćenja i održavanja fasada, montiranja reklamnih grafika na visokim zgradama, uklanjanja snega sa krovova, postavljanja grejnih sistema, ugradnje hidroizolacije i drugih sličnih radova. Svojim znanjem i iskustvom od <b>15 godina</b>, doprinosi i širenju usluga koje firma nudi.</p>
                <img alt='slika' src={Image} className='year'/>
            </div>
            <div className='why flexcolumn'>
            <h3>Zašto baš mi?</h3>
            <div className='whydiv'>
           Bez obzira na to koliko je posao složen ili zahtevan, naši stručnjaci će uvek brzo i efikasno rešiti problem. Naši stručnjaci poseduju sve potrebne sertifikate i dozvole za sigurno izvođenje radova na visini, i primenjuju sve neophodne mere opreza kako bi se osigurala bezbednost svih uključenih u radove. Naša firma poštuje sve bezbednosne standarde i propise u skladu s industrijskim standardima. Kao firma koja se bavi radovima na visini, <b>JOVANOVIĆ GRADNJA K2</b> se ponosi svojim visokim standardima kvaliteta, profesionalnosti i uslugama koje pruža klijentima. Naš cilj je da pružimo najbolje usluge našim klijentima, u skladu s dogovorenim rokovima i budžetom. Za više informacija o uslugama koje pružamo, molimo Vas da nas kontaktirate putem telefona ili e-pošte. Rado ćemo Vam pružiti detaljnije informacije i ponudu koja najbolje odgovara Vašim potrebama. Zahvaljujemo Vam na poseti naše web stranice, i radujemo se što možemo biti Vaši partneri u radovima na visini.
            </div>
            </div>
        </div>
    );
}

export default Aboutus;