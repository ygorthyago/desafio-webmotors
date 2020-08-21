import React from 'react';
import axios from 'axios';
import UIOptions from '../Options/Options';

const brands = axios.create({
    baseURL: 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make'
});

export default class GetBrands extends React.Component {
    state = {
        brands: [],
    }

    async componentDidMount() {
        const allBrands = {ID: 0, Name: "Todas"}
        const responseModels = await brands.get();
        responseModels.data.unshift(allBrands);

        this.setState({
            brands: responseModels.data
        });

    }


    render() {

        const {brands} = this.state;

        return (
            <UIOptions 
                clear={this.props.clear}
                setOption={this.props.handleBrandChange.bind(this)}
                type={'object'} 
                label={'Marca:'}
                options={brands}
            />
        )

    }
}