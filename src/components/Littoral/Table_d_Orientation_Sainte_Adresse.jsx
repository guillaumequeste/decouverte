import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Table_d_Orientation_Sainte_Adresse extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Table d'orientation Sainte-Adresse Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/table_d_orientation_sainte_adresse"} />
                <Header />
                <Footer />
                <div className="bodyLittoral">
                    <h1 className="title">Table d'orientation Sainte-Adresse</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/littoral/table_d_orientation_sainte-adresse/table_d_orientation_sainte-adresse01.jpg")} alt="table_d_orientation_sainte-adresse01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/table_d_orientation_sainte-adresse/table_d_orientation_sainte-adresse02.jpg")} alt="table_d_orientation_sainte-adresse02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/table_d_orientation_sainte-adresse/table_d_orientation_sainte-adresse03.jpg")} alt="table_d_orientation_sainte-adresse03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/table_d_orientation_sainte-adresse/table_d_orientation_sainte-adresse04.jpg")} alt="table_d_orientation_sainte-adresse04" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table_d_Orientation_Sainte_Adresse