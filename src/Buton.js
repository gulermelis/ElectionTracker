import React, { Component } from 'react';
import './Buton.css';


const istanbul =[{a:'50.16', b:'30.24', c:'12.0', d:'3.60'},{a:"35.5", b:"43.9", c:"10.0", d:"6.1"}, {a:"47.1", b:"33.0", c:"11.4", d:"8.5" },{a:"20.8", b:"60.1", c:"13.2", d:"3.4" }];
const anka=[{a:'25.5', b:'53.9', c:'9.0', d:'9.6'},{a:"30.0", b:"45.0", c:"7.0", d:"18.0"},{a:"41.5", b:"41.3", c:"10.2", d:"7.0" },{a:"50.1", b:"20.5", c:"20.4", d:"9.0" }];
const izmr=[{a:"15.0", b:'40.5', c:'25.0', d:'19.5'},{a:"5.1", b:"50.5", c:"14.4", d:"30.0"}, {a:"30.0", b:"36.4", c:"20.2", d:"13.4" },{a:"25.5", b:"25.5", c:"20.9", d:"28.0" }];
const bursa=[{a:"35.5", b:"43.9", c:"10.0", d:"6.1"},{a:'25.5', b:'53.9', c:'9.0', d:'9.6'}, {a:"41.5", b:"41.3", c:"10.2", d:"7.0" },{a:'50.16', b:'30.24', c:'12.00', d:'3.73'}];
const eskisehir=[{a:'50.16', b:'30.24', c:'12.00', d:'3.73'},{a:"41.5", b:"41.3", c:"10.2", d:"7.0" }, {a:"35.5", b:"43.9", c:"10.0", d:"6.1"},{a:"60.0", b:"35.0", c:"7.0", d:"3.0" }];
const antalya=[{a:"30.0", b:"36.4", c:"20.2", d:"13.4" }, {a:"47.1", b:"33.0", c:"11.4", d:"8.5" }, {a:"30.0", b:"36.4", c:"20.2", d:"13.4" },{a:"25.5", b:"25.5", c:"20.9", d:"28.0" }];
const diyarbakır=[{a:'15.0', b:'25.00', c:'5.0', d:'55.0'},{a:"37.00", b:"13.0", c:"10.0", d:"40.0"}, {a:'3.6', b:'30.24', c:'12.00', d:'50.16'},{a:"30", b:"2.0", c:"3.0", d:"65.0" }];
const rz=[{a:'15.5', b:'4.0', c:'74.5', d:'6.0'},{a:'50.16', b:'30.24', c:'12.00', d:'3.6'}, {a:"47.1", b:"33.0", c:"11.4", d:"8.5" },{a:"20.8", b:"60.1", c:"13.2", d:"3.4" }];

var i;
var asonuc = 0, bsonuc = 0, csonuc = 0, dsonuc = 0;

class Buton extends Component {



    handleClickIst() {


        const ist = document.getElementById('ist');
        const ist2 = ist.innerHTML + "<table border='2' id='istsonuc' ><thead align='center'><tr><td colspan='4' id='iladi'>  </td></tr></thead><tr><td>A PARTİSİ</td><td>B PARTİSİ</td><td>C PARTİSİ</td><td>D PARTİSİ</td></tr>"
            + "<tr> <td> <div id='ista'></div> </td><td><div id='istb'></div> </td> <td><div id='istc'></div></td><td><div id='istd'></div></td></tr></table>"
        document.getElementById("ist2").innerHTML = ist2;
        /*console.log("div göster");
        console.log(mrb);
         e.preventDefault();
        console.log('The link was clicked.'); */



            for (i = 0; i < istanbul.length; i++) {

                asonuc += parseFloat(istanbul[i].a);
                bsonuc += parseFloat(istanbul[i].b);
                csonuc += parseInt(istanbul[i].c);
                dsonuc += parseInt(istanbul[i].d);

            }
            debugger;
            console.log(asonuc);
            console.log(bsonuc);
            console.log(csonuc);
            console.log(dsonuc);

        document.getElementById("ista").innerHTML = asonuc / 4;
        document.getElementById("istb").innerHTML = bsonuc / 4;
        document.getElementById("istc").innerHTML = csonuc / 4;
        document.getElementById("istd").innerHTML = dsonuc / 4;



    }

        handleClickAnk(){

        const ank = document.getElementById('ank');
    const ank2 = ank.innerHTML + "<table border='2' id='istsonuc' ><thead align='center'><tr><td colspan='4' id='iladi'>  </td></tr></thead><tr><td>A PARTİSİ</td><td>B PARTİSİ</td><td>C PARTİSİ</td><td>D PARTİSİ</td></tr>"
        + "<tr> <td> <div id='anka'></div> </td><td><div id='ankb'></div> </td> <td><div id='ankc'></div></td><td><div id='ankd'></div></td></tr></table>"
    document.getElementById("ank2").innerHTML = ank2;



            for (i = 0; i < anka.length; i++) {

                asonuc += parseInt(anka[i].a);
                bsonuc += parseInt(anka[i].b);
                csonuc += parseInt(anka[i].c);
                dsonuc += parseInt(anka[i].d);
            }
            document.getElementById("anka").innerHTML = asonuc / 4;
            document.getElementById("ankb").innerHTML = bsonuc / 4;
            document.getElementById("ankc").innerHTML = csonuc / 4;
            document.getElementById("ankd").innerHTML = dsonuc / 4;

        }

    handleClickIzm() {
        const izm = document.getElementById('izm');
        const izm2 = izm.innerHTML + "<table border='2' id='istsonuc' ><thead align='center'><tr><td colspan='4' id='iladi'>  </td></tr></thead><tr><td>A PARTİSİ</td><td>B PARTİSİ</td><td>C PARTİSİ</td><td>D PARTİSİ</td></tr>"
            + "<tr> <td> <div id='izma'></div> </td><td><div id='izmb'></div> </td> <td><div id='izmc'></div></td><td><div id='izmd'></div></td></tr></table>"
        document.getElementById("izm2").innerHTML = izm2;



            for (i = 0; i < izmr.length; i++) {

                asonuc += parseInt(izmr[i].a);
                bsonuc += parseInt(izmr[i].b);
                csonuc += parseInt(izmr[i].c);
                dsonuc += parseInt(izmr[i].d);
            }
        document.getElementById("izma").innerHTML = asonuc / 4;
        document.getElementById("izmb").innerHTML = bsonuc / 4;
        document.getElementById("izmc").innerHTML = csonuc / 4;
        document.getElementById("izmd").innerHTML = dsonuc / 4;

    }

        handleClickBurs() {
    const burs = document.getElementById('ank');
    const burs2 = burs.innerHTML + "<table border='2' id='istsonuc' ><thead align='center'><tr><td colspan='4' id='iladi'>  </td></tr></thead><tr><td>A PARTİSİ</td><td>B PARTİSİ</td><td>C PARTİSİ</td><td>D PARTİSİ</td></tr>"
        + "<tr> <td> <div id='bursa'></div> </td><td><div id='bursb'></div> </td> <td><div id='bursc'></div></td><td><div id='bursd'></div></td></tr></table>"
    document.getElementById("burs2").innerHTML = burs2;


            for (i = 0; i < bursa.length; i++) {

                asonuc += parseInt(bursa[i].a);
                bsonuc += parseInt(bursa[i].b);
                csonuc += parseInt(bursa[i].c);
                dsonuc += parseInt(bursa[i].d);
            }
            document.getElementById("bursa").innerHTML = asonuc / 4;
            document.getElementById("bursb").innerHTML = bsonuc / 4;
            document.getElementById("bursc").innerHTML = csonuc / 4;
            document.getElementById("bursd").innerHTML = dsonuc / 4;

        }

        handleClickEsk(){
            const esk = document.getElementById('esk');
            const esk2 = esk.innerHTML + "<table border='2' id='istsonuc' ><thead align='center'><tr><td colspan='4' id='iladi'>  </td></tr></thead><tr><td>A PARTİSİ</td><td>B PARTİSİ</td><td>C PARTİSİ</td><td>D PARTİSİ</td></tr>"
                + "<tr> <td> <div id='eska'></div> </td><td><div id='eskb'></div> </td> <td><div id='eskc'></div></td><td><div id='eskd'></div></td></tr></table>"
            document.getElementById("esk2").innerHTML = esk2;

    for (i = 0; i < eskisehir.length; i++) {

                asonuc += parseInt(eskisehir[i].a);
                bsonuc += parseInt(eskisehir[i].b);
                csonuc += parseInt(eskisehir[i].c);
                dsonuc += parseInt(eskisehir[i].d);

            }
            document.getElementById("eska").innerHTML = asonuc / 4;
            document.getElementById("eskb").innerHTML = bsonuc / 4;
            document.getElementById("eskc").innerHTML = csonuc / 4;
            document.getElementById("eskd").innerHTML = dsonuc / 4;

        }

    handleClickAnt() {
        const ant = document.getElementById('ant');
        const ant2 = ant.innerHTML + "<table border='2' id='istsonuc' ><thead align='center'><tr><td colspan='4' id='iladi'>  </td></tr></thead><tr><td>A PARTİSİ</td><td>B PARTİSİ</td><td>C PARTİSİ</td><td>D PARTİSİ</td></tr>"
            + "<tr> <td> <div id='anta'></div> </td><td><div id='antb'></div> </td> <td><div id='antc'></div></td><td><div id='antd'></div></td></tr></table>"
        document.getElementById("ant2").innerHTML = ant2;


            for (i = 0; i < antalya.length; i++) {

                asonuc += parseInt(antalya[i].a);
                bsonuc += parseInt(antalya[i].b);
                csonuc += parseInt(antalya[i].c);
                dsonuc += parseInt(antalya[i].d);

            }
        document.getElementById("anta").innerHTML = asonuc / 4;
        document.getElementById("antb").innerHTML = bsonuc / 4;
        document.getElementById("antc").innerHTML = csonuc / 4;
        document.getElementById("antd").innerHTML = dsonuc / 4;


    }

    handleClickDyr() {
    const dyr = document.getElementById('dyr');
    const dyr2 = dyr.innerHTML + "<table border='2' id='istsonuc' ><thead align='center'><tr><td colspan='4' id='iladi'>  </td></tr></thead><tr><td>A PARTİSİ</td><td>B PARTİSİ</td><td>C PARTİSİ</td><td>D PARTİSİ</td></tr>"
        + "<tr> <td> <div id='dyra'></div> </td><td><div id='dyrb'></div> </td> <td><div id='dyrc'></div></td><td><div id='dyrd'></div></td></tr></table>"
    document.getElementById("dyr2").innerHTML = dyr2;



            for (i = 0; i < diyarbakır.length; i++) {

                asonuc += parseInt(diyarbakır[i].a);
                bsonuc += parseInt(diyarbakır[i].b);
                csonuc += parseInt(diyarbakır[i].c);
                dsonuc += parseInt(diyarbakır[i].d);

            }
        document.getElementById("dyra").innerHTML = asonuc / 4;
        document.getElementById("dyrb").innerHTML = bsonuc / 4;
        document.getElementById("dyrc").innerHTML = csonuc / 4;
        document.getElementById("dyrd").innerHTML = dsonuc / 4;


    }

    handleClickRize() {
            const rz= document.getElementById('rz');
            const rz2 = rz.innerHTML + "<table border='2' id='istsonuc' ><thead align='center'><tr><td colspan='4' id='iladi'>  </td></tr></thead><tr><td>A PARTİSİ</td><td>B PARTİSİ</td><td>C PARTİSİ</td><td>D PARTİSİ</td></tr>"
                + "<tr> <td> <div id='rza'></div> </td><td><div id='rzb'></div> </td> <td><div id='rzc'></div></td><td><div id='rzd'></div></td></tr></table>"
            document.getElementById("rz2").innerHTML = rz2;



            for (i = 0; i < rz.length; i++) {

                asonuc += parseInt(rz[i].a);
                bsonuc += parseInt(rz[i].b);
                csonuc += parseInt(rz[i].c);
                dsonuc += parseInt(rz[i].d);

            }

        document.getElementById("rza").innerHTML = asonuc / 4;
        document.getElementById("rzb").innerHTML = bsonuc / 4;
        document.getElementById("rzc").innerHTML = csonuc / 4;
        document.getElementById("rzd").innerHTML = dsonuc / 4;


    }

    render() {
        return (


            <div id="il-geneli-sonuc-butonlari">
                <h2 id="il-title"> İL GENELİ SEÇİM SONUÇLARI </h2>

                    <div id="ilk-ul">
            <ul>

                <li>
                    <input type="button" value="İSTANBUL" id='ist' className="il-buton" onClick={this.handleClickIst}/>
                    <div id="ist"> </div>
                    <div id="ist2"></div>
                </li>

                <li> <input type="button" value="ANKARA" id='ank' className="il-buton" onClick={this.handleClickAnk}/>
                    <div id="ank"> </div>
                    <div id="ank2"></div>


                </li>

                    <li>
                <input type="button" value="İZMİR" className="il-buton" onClick={this.handleClickIzm}/>

                        <div id="izm"> </div>
                        <div id="izm2"></div>

                    </li>

                <li>
                        <input type="button" value="BURSA" className="il-buton" onClick={this.handleClickBurs}/>
                    <div id="burs"> </div>
                    <div id="burs2"></div>


                </li>
            </ul>

                </div>

                <div id="sag-ul">
                <ul>

                <li>
                    <input type="button" value="ANTALYA" className="il-buton" onClick={this.handleClickAnt}/>
                    <div id="ant"> </div>
                    <div id="ant2"></div>


                </li>
                    <li>
                        <input type="button" value="DİYARBAKIR" className="il-buton" onClick={this.handleClickDyr}/>
                        <div id="dyr"> </div>
                        <div id="dyr2"></div>

                    </li>
                    <li>
                        <input type="button" value="ESKİSEHİR" className="il-buton" onClick={this.handleClickEsk}/>
                        <div id="esk"> </div>
                        <div id="esk2"></div>

                    </li>
                    <li>
                        <input type="button" value="RİZE" className="il-buton" onClick={this.handleClickRize}/>
                        <div id="rz"> </div>
                        <div id="rz2"></div>

                    </li>

                </ul>
                </div>




            </div>



        );



    }

}
        export default Buton;
