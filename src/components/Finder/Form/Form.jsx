import './Form.scss';
import React from 'react'
import {ReactComponent as MapIcon} from '../../../template/map-icon.svg';
import UIModels from '../../UI/WebService/Models';
import UIBrands from '../../UI/WebService/Brands';
import UIVersions from '../../UI/WebService/Versions';
import UIOptions from '../../UI/Options/Options';

export default class Form extends React.Component {

    constructor(props) {
        super(props)
  
        this.handleBrandChange = this.handleBrandChange.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
        this.handleClearFilters = this.handleClearFilters.bind(this);
    }

    handleBrandChange(value) {
        this.setState({selectedBrand: value});
    }

    handleModelChange(value) {
        this.setState({selectedModel: value});
    }

    handleClearFilters() {
        const currentState = this.state.clearFilters;
        this.setState({ clearFilters: !currentState });

        let inputs = document.getElementsByTagName('input');
        for(let x = 0; x < inputs.length; x++){
            inputs[x].checked = false
        }
    }

    state = {
        selectedBrand: "0",
        selectedModel: "1",
        clearFilters: "0",
    }

    render () {
        return (
        <div className="formFinder">
            <div className="formFinder__flexRow formFinder__flexRow--start">
                <label className="formFinder__checkbox" htmlFor="new">
                    <input id="new" type="checkbox"/>
                    <span>Novos</span>
                </label>

                <label className="formFinder__checkbox" htmlFor="old">
                    <input id="old" type="checkbox"/>
                    <span>Usados</span>
                </label>
            </div>
            <div className="formFinder__flexRow formFinder__flexRow--principalRow">
                <div className="formFinder__halfCollumn">
                    <div className="formFinder__localization">
                        <figure>
                            <MapIcon />
                        </figure>
                        <label htmlFor="local">Onde:</label>
                        <input id="local" name="local" type="text"/>
                        <div className="formFinder__radiusBox">
                            <UIOptions
                                clear={this.state.clearFilters}
                                type={'array'} 
                                label={'Raio'}
                                options={['100km','200km','300km','400km','500km']}
                            />
                        </div>
                    </div>
                </div>

                <div className="formFinder__halfCollumn formFinder__halfCollumn--flex">
                    <div className="formFinder__brandBox">
                        <UIBrands clear={this.state.clearFilters} handleBrandChange={this.handleBrandChange} />
                    </div>

                    <div className="formFinder__modelBox">
                        <UIModels clear={this.state.clearFilters} handleModelChange={this.handleModelChange} MakeID={this.state.selectedBrand} />
                    </div>
                </div>
            </div>
            <div className="formFinder__flexRow formFinder__flexRow--secondaryRow">
                <div className="formFinder__halfCollumn formFinder__halfCollumn--flex">
                    <div className="formFinder__yearBox defaultSelect defaultSelect--noLabel">
                        <UIOptions
                            clear={this.state.clearFilters}
                            type={'array'} 
                            noLabel={'Ano Desejado'}
                            options={['2016', '2017', '2018', '2019', '2020']}
                        />
                    </div>

                    <div className="formFinder__priceBox defaultSelect defaultSelect--noLabel">
                        <UIOptions 
                            clear={this.state.clearFilters}
                            type={'array'} 
                            noLabel={'Faixa de Preço'}
                            options={['R$10.000 a R$20.000', 'R$20.000 a R$30.000', 'R$30.000 a R$40.000', 'R$40.000 a R$50.000', 'R$50.000 a R$60.000']}
                        />
                    </div>
                </div>

                <div className="formFinder__halfCollumn">
                    <div className="formFinder__versionBox">
                        <UIVersions clear={this.state.clearFilters} ModelID={this.state.selectedModel} />
                    </div>
                </div>
            </div>
            <div className="formFinder__flexRow formFinder__flexRow--end">
                <button className="formFinder__clearFilters" onClick={this.handleClearFilters}>Limpar filtros</button>
                <button className="formFinder__seeOffers">Ver Ofertas</button>
            </div>
        </div>
        )
    }
}