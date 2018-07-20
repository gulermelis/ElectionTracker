import React, {Component} from 'react';
import './Combobox.css';


const ank= [ "Seçiniz","Çankaya", "Keçiören", "Kızılcahamam", "Mamak"];
const ist = ["Seçiniz","Adalar", "Beşiktaş", "Kadıköy", "Kartal"];
const izmr = [ "Seçiniz","Bornova","Çeşme", "Foça", "Konak"];
const eskishr= ["Seçiniz","Alpu", "Beylikova", "Çifteler"];
const brsa=[ "Seçiniz","Nilufer", "Karacabey","İnegöl", "Orhangazi"];
const ant = ["Seçiniz","Akseki", "Alanya", "Elmalı", "Finike"];
const dyrbkr = ["Seçiniz", "Ergani", "Lice"];
const rze = ["Seçiniz","Ardeşen", "Çayeli"];


const adalar=['50.16','30.24', '12.0', '3.60'];
const besiktas=["35.5", "43.9","10.0", "6.1"];
const kadiköy= ["47.1", "33.0","11.4","8.5" ];
const kartal=["20.8", "60.1", "13.2", "3.4" ];

const cankaya=['25.5', '53.9', '9.0', '9.6'];
const kecioren =["30.0", "45.0","7.0", "18.0"];
const kizilcahamam=["41.5", "41.3", "10.2","7.0" ];
const mamak= ["50.1", "20.5", "20.4", "9.0" ];


const bornova=["15.0",'40.5', '25.0','19.5'];
const cesme= ["5.1","50.5", "14.4", "30.0"];
 const foca=  ["30.0", "36.4", "20.2", "13.4" ];
const konak=["25.5", "53.9", "9.0", "9.6"];

const alpu=["35.5", "43.9", "10.0", "6.1"];
const beylikova= ['25.5', '53.9', '9.0', '9.6'];
const cifteler=["41.5", "41.3", "10.2", "7.0" ];

const nilufer=["35.5", "43.9", "10.0", "6.1"];
const karacabey=['25.5', '53.9', '9.0', '9.6'];
const inegol=["41.5", "41.3", "10.2", "7.0" ];
const orhangazi=["15.0",'40.5', '25.0','19.5'];


const akseki=["30.0", "36.4", "20.2", "13.4" ];
const alanya=["47.1", "33.0", "11.4", "8.5"];

const ergani=['15.0','25.00', '5.0', '55.0'];
const lice=["37.00", "13.0", "10.0", "40.0"];

const ardesen=['15.5', '4.0', '74.5', '6.0'];
const cayeli=['50.16', '30.24', '12.00', '3.6'];


class Combobox extends Component {



   constructor(props) {
        super(props);
        this.state = {selected:'selected'};


    }


    static Set_player (e)
    {
        this.setState({value: e.target.value});
        let i;
        const select_il = document.getElementById("il");
        const select_ilce = document.getElementById("ilce");
        const selected_il = select_il.options[select_il.selectedIndex].value;
        select_ilce.options.length=0;


        if (selected_il === "Ankara") {
            for (i = 0; i < ank.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(ank[i]);
        }

        if (selected_il === "İstanbul") {
            for (i = 0; i < ist.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(ist[i]);
        }


        if (selected_il === "İzmir"){
            for(i = 0; i<izmr.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(izmr[i]);
        }

        if (selected_il === "Antalya"){
            for(i = 0; i<ant.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(ant[i]);
        }

        if (selected_il === "Bursa"){
            for(i = 0; i<brsa.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(brsa[i]);
        }


        if (selected_il === "Diyarbakır"){
            for(i = 0; i<dyrbkr.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(dyrbkr[i]);
        }

        if (selected_il === "Eskişehir"){
            for(i = 0; i<eskishr.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(eskishr[i]);
        }

        if (selected_il === "Rize"){
            for(i = 0; i<rze.length; i++)
                select_ilce.options[select_ilce.options.length] = new Option(rze[i]);
        }

    }


    onChangeIlce = (event)  => {

        const box = document.getElementById('box');
        const box2 = box.innerHTML +"<table border='2' id='ilce-tablo'><thead align='center'><tr><td colSpan='4' id='ilce-adi'></td></tr></thead>"
          +"<tr><td>A PARTİSİ</td><td>B PARTİSİ</td><td>C PARTİSİ</td><td>D PARTİSİ</td></tr><tr><td><div id='oy1'> </div></td><td><div id='oy2'> </div></td><td><div id='oy3'> </div></td><td><div id='oy4'> - </div></td></tr></table>";

        document.getElementById("box2").innerHTML = box2;



        this.setState({typed: event.target.value});

        let a;
        if (event.target.value === "Adalar") {
            document.getElementById('ilce-adi').innerHTML= "ADALAR İLÇESİ  SEÇİM SONUÇLARI"

                a = adalar;
        }


        if (event.target.value === "Beşiktaş") {
            document.getElementById('ilce-adi').innerHTML= "BEŞİKTAŞ İLÇESİ  SEÇİM SONUÇLARI"
            a = besiktas;
        }

        if (event.target.value === "Kadıköy") {
            document.getElementById('ilce-adi').innerHTML= "KADIKÖY İLÇESİ SEÇİM SONUÇLARI"
            a = kadiköy;
        }

        if (event.target.value === "Kartal") {
            document.getElementById('ilce-adi').innerHTML= "KARTAL İLÇESİ SEÇİM SONUÇLARI"
            a = kartal;
        }
        if (event.target.value === "Çankaya") {
            document.getElementById('ilce-adi').innerHTML= "ÇANKAYA İLÇESİ SEÇİM SONUÇLARI"
            a = cankaya;
        }

        if (event.target.value === "Keçiören") {
            document.getElementById('ilce-adi').innerHTML= "KEÇİÖREN İLÇESİ SEÇİM SONUÇLARI"
            a = kecioren;
        }
        if (event.target.value === "Kızılcahamam") {
            document.getElementById('ilce-adi').innerHTML= "KIZILCAHAMAM İLÇESİ SEÇİM SONUÇLARI"
            a = kizilcahamam;
        }
        if (event.target.value === "Mamak") {
            document.getElementById('ilce-adi').innerHTML= "MAMAK İLÇESİ SEÇİM SONUÇLARI"
            a = mamak;
        }

        if (event.target.value === "Bornova") {
            document.getElementById('ilce-adi').innerHTML= "BORNOVA İLÇESİ SEÇİM SONUÇLARI"
            a = bornova;
        }
        if (event.target.value === "Çeşme") {
            document.getElementById('ilce-adi').innerHTML= "ÇEŞME İLÇESİ SEÇİM SONUÇLARI"
            a = cesme;
        }
        if (event.target.value === "Foça") {
            document.getElementById('ilce-adi').innerHTML= "FOÇA İLÇESİ SEÇİM SONUÇLARI"
            a = foca;
        }
        if (event.target.value === "Alpu") {
            document.getElementById('ilce-adi').innerHTML= "ALPU İLÇESİ SEÇİM SONUÇLARI"
            a = alpu;
        }
        if (event.target.value === "Konak") {
            document.getElementById('ilce-adi').innerHTML= "KONAK İLÇESİ SEÇİM SONUÇLARI"
            a = konak;
        }


        if (event.target.value === "Nilufer") {
            document.getElementById('ilce-adi').innerHTML= "NİLÜFER İLÇESİ SEÇİM SONUÇLARI"
            a = nilufer;
        }

        if (event.target.value === "Karacabey") {
            document.getElementById('ilce-adi').innerHTML= "KARACABEY İLÇESİ SEÇİM SONUÇLARI"
            a = karacabey;
        }

        if (event.target.value === "Orhangazi") {
            document.getElementById('ilce-adi').innerHTML= "ORHANGAZİ İLÇESİ SEÇİM SONUÇLARI"
            a = orhangazi;
        }
        if (event.target.value === "İnegöl") {
            document.getElementById('ilce-adi').innerHTML= "İNEGÖL İLÇESİ SEÇİM SONUÇLARI"
            a = inegol;
        }


        if (event.target.value === "Alanya") {
            document.getElementById('ilce-adi').innerHTML= "ALANYA İLÇESİ SEÇİM SONUÇLARI"
            a = alanya;
        }
        if (event.target.value === "Lice") {
            document.getElementById('ilce-adi').innerHTML= "LİCE İLÇESİ SEÇİM SONUÇLARI"
            a = lice;
        }
        if (event.target.value === "Ergani") {
            document.getElementById('ilce-adi').innerHTML= "ERGANİ İLÇESİ  SEÇİM SONUÇLARI"
            a = ergani;
        }

        if (event.target.value === "Ardeşen") {
            document.getElementById('ilce-adi').innerHTML= "ARDEŞEN İLÇESİ SEÇİM SONUÇLARI"
            a = ardesen;
        }
        if (event.target.value === "Çayeli") {
            document.getElementById('ilce-adi').innerHTML= "ÇAYELİ İLÇESİ SEÇİM SONUÇLARI"
            a = cayeli;
        }



        document.getElementById('oy1').innerHTML = a[0];
        document.getElementById('oy2').innerHTML = a[1];
        document.getElementById('oy3').innerHTML = a[2];
        document.getElementById('oy4').innerHTML = a[3];
    }
    render() {
        return (


            <div>

                <table className="combobox">
                    <tr>
                        <label>
                            <select value={this.state.value} id="il" onChange={Combobox.Set_player.bind(this)}>
                                <option selected="selected">Lütfen İl Seçiniz</option>
                                <option value="Ankara">Ankara</option>
                                <option value="İstanbul">İstanbul</option>
                                <option value="İzmir">İzmir</option>
                                <option value="Bursa">Bursa</option>
                                <option value="Diyarbakır">Diyarbakır</option>
                                <option value="Rize">Rize</option>

                            </select>
                        </label>
                        <label>
                            <select id="ilce" onChange={this.onChangeIlce}>
                                <option>İlçe Seçiniz</option>
                            </select>
                        </label>

                    </tr>
                </table>

                <div id='box'></div>
                <div id='box2'></div>

            </div>

        );



        }

    }


export default Combobox;
