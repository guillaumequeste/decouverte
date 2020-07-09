import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Saint_Valery_sur_Somme extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/saint-valery-sur-somme"} />
                <Header />
                <div className="bodyLittoral">
                    <h1 className="title">Saint-Valéry-sur-Somme</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/littoral/saint-valery-sur-somme/saint-valery-sur-somme01.jpg")} alt="saint-valery-sur-somme01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-valery-sur-somme/saint-valery-sur-somme02.jpg")} alt="saint-valery-sur-somme02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-valery-sur-somme/saint-valery-sur-somme03.jpg")} alt="saint-valery-sur-somme03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-valery-sur-somme/saint-valery-sur-somme04.jpg")} alt="saint-valery-sur-somme04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-valery-sur-somme/saint-valery-sur-somme05.jpg")} alt="saint-valery-sur-somme05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-valery-sur-somme/saint-valery-sur-somme06.jpg")} alt="saint-valery-sur-somme06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-valery-sur-somme/saint-valery-sur-somme07.jpg")} alt="saint-valery-sur-somme07" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-valery-sur-somme/saint-valery-sur-somme08.jpg")} alt="saint-valery-sur-somme08" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-valery-sur-somme/saint-valery-sur-somme09.jpg")} alt="saint-valery-sur-somme09" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-valery-sur-somme/saint-valery-sur-somme10.jpg")} alt="saint-valery-sur-somme10" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-valery-sur-somme/saint-valery-sur-somme11.jpg")} alt="saint-valery-sur-somme11" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-valery-sur-somme/saint-valery-sur-somme12.jpg")} alt="saint-valery-sur-somme12" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Saint_Valery_sur_Somme