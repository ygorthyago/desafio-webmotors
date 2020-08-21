import React from 'react';
import axios from 'axios';
import UIOptions from '../../components/UI/Options/Options';

const versions = axios.create({
    baseURL: 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version'
});

export default class GetVersions extends React.Component {

    async handleChange() {
        const versionsObj = [];
        
        if (this.props.ModelID > 0) {
            const response = await versions.get('?ModelID=' + this.props.ModelID);
            for (var singleVersion in response.data) {
                versionsObj.push(response.data[singleVersion])
            };
        }

        this.setState({ versions: versionsObj })
    }

    state = {
        versions: [],
    }

    componentDidUpdate(prevProps) {
        if (prevProps.ModelID !== this.props.ModelID) {
            this.handleChange()
        }
    }

    async componentDidMount() {
        this.handleChange()
    }

    render() {

        const { versions } = this.state;

        return (
            // <select name="version" id="version">
            // {versions.map(version => (
            //     <option value={version.ID}>{version.Name}</option>
            // ))}
            // </select>

            <UIOptions 
                clear={this.props.clear}
                name={"model"} 
                type={'object'} 
                label={'Versão:'}
                options={versions}
            />
        )

    }
}