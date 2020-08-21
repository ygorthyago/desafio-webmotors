import React from 'react';
import axios from 'axios';
import UIOptions from '../../components/UI/Options/Options';

const models = axios.create({
    baseURL: 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model'
});

export default class GetModels extends React.Component {
    async handleChange() {
        const modelsObj = [];
        
        if (this.props.MakeID > 0) {
            const response = await models.get('?MakeID=' + this.props.MakeID);
            for (var singleModel in response.data) {
                modelsObj.push(response.data[singleModel])
            };
        } else {
            for (let ID = 1; ID <= 3; ID++) {
                const response = await models.get('?MakeID=' + ID);
                for (var model in response.data) {
                    modelsObj.push(response.data[model])
                };
            }
        }

        this.setState({ models: modelsObj })
    }

    state = {
        models: [],
    }

    componentDidUpdate(prevProps) {
        if (prevProps.MakeID !== this.props.MakeID) {
            this.handleChange()
        }
    }

    async componentDidMount() {
        this.handleChange()
    }

    render() {

        const { models } = this.state;

        return (
            <UIOptions 
                clear={this.props.clear}
                setOption={this.props.handleModelChange.bind(this)}
                type={'object'} 
                label={'Modelo:'}
                options={models}
            />
        )

    }
}