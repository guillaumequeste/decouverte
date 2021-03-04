import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Lillebonne extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/lillebonne"} />
                <Header />
                <Footer />
                <div className="bodyAutres">
                    <h1 className="titleAutres">Théâtre romain de Lillebonne</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/lillebonne/lillebonne01.jpg")} alt="lillebonne01" className="photo"/>
                    </div>
                    <div className="container">
                        <p>Le théâtre antique de Lillebonne est un édifice de spectacle antique situé dans l'ancienne ville de Juliobona, aujourd'hui Lillebonne, dans le département de Seine-Maritime, en France.
                        Construit au ier siècle en profitant d'une colline sur laquelle il s'appuie, il est rebâti puis agrandi au iie siècle avant d'être désaffecté et transformé en forteresse à la fin du iiie siècle. Malgré des interruptions qui durent parfois plusieurs décennies, le théâtre fait l'objet de fouilles régulières depuis le début du xixe siècle et, au xxie siècle, seule sa scène, sous l'emprise d'une route, n'a pas pu être étudiée. Il est classé sur la liste des monuments historiques de 1840.</p>
                        <p className="lienSiteOfficiel">Site officiel : <a href="http://www.theatrelillebonne.fr/fr/home/" target="_blank">Théâtre romain de Lillebonne</a></p>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/lillebonne/lillebonne02.jpg")} alt="lillebonne02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/lillebonne/lillebonne03.jpg")} alt="lillebonne03" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lillebonne