import React, { Component } from 'react';
import './Header.css';

class TurkiyeGeneli extends Component {
    render(){
        const {  aparti,bparti,cparti,dparti }= this.props;
        return(
            <div className="tcgenel">
                    <h3 id="genel-title" align="center">TÜRKİYE GENELİ SEÇİM SONUÇLARI</h3>

                    <table border='2' className="genelekran">
                    <tr id='partiadlari'><td>A PARTİ</td><td>B PARTİ</td><td>C PARTİ</td><td>D PARTİ</td></tr>
                    <tr className="sayimsutunu">
                        <td>{ aparti }</td><td>{ bparti }</td><td>{ cparti }</td><td>{ dparti }</td></tr>
                    </table>

            </div>
        );
    }
}

export default TurkiyeGeneli ;