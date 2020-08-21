import './Options.scss';
import React from 'react'

export default class Options extends React.Component {
    constructor(props) {
        super(props);
    
        this.setOption = this.setOption.bind(this);
        this.activeBox = this.activeBox.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.defineFirstOption = this.defineFirstOption.bind(this);
    }

    state = {
        boxActive: false,
        selectedValue: [],
        options: [],
        clear: 0,
    }

    setOption(value) {
        this.setState({selectedName: value});
    }
    
    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.options) !== JSON.stringify(this.props.options)) {
            this.setState({options: this.props.options});
            this.setState({selectedName: (this.props.options.length > 0) ? this.props.options[0].Name : ''});
        }

        if (prevProps.clear !== this.props.clear) {
            var optionName
            if (this.props.noLabel) {
                optionName = this.props.noLabel;
            } else if (this.props.setOption) {
                optionName = this.props.options[0].Name;
                var optionID = this.props.options[0].ID;
                this.props.setOption(optionID)
            } else if (this.props.options[0].Name){
                optionName = this.props.options[0].Name;
            } else {
                optionName = this.props.options[0];
            }

            this.setOption(optionName)


            
        }

    }

    componentDidMount(prev, newest) {
        this.setState({options: this.props.options});
    }

    RenderOptions(options, type) {
        const optionsHTML = []
        if (type === 'array') {
            options.forEach(option => {
                optionsHTML.push(
                    <div 
                        onClick={this.handleItemClick}
                        className="selectBox__item"
                        itemValue={option}
                        itemName={option}>
                        {option}
                    </div>
                )
            });
        } else {
            options.map(option => (
                optionsHTML.push(
                    <div 
                        onClick={this.handleItemClick} 
                        className="selectBox__item" 
                        itemValue={option.ID}
                        itemName={option.Name}>
                        {option.Name}
                    </div>
                )
            ))
        }
        
        return optionsHTML;
    }

    handleItemClick(element) {
        var optionName = element.target.getAttribute("itemName");
        this.setOption(optionName)
        var optionID = element.target.getAttribute("itemValue");
        if (this.props.setOption) {
            this.props.setOption(optionID)
        }
        this.activeBox()
    }

    activeBox() {
        const currentState = this.state.boxActive;
        this.setState({ boxActive: !currentState });
    }

    defineFirstOption() {
        var firstOption
        if (this.props.options) {
            if (this.props.type === 'array') {
                firstOption = this.props.options[0];
            } else {
                firstOption = (this.props.options.length > 0) ? this.props.options[0].Name : '';
            }
        }

        if (!this.state.selectedName) {
            if (this.props.noLabel) {
                this.setState({selectedName: this.props.noLabel});
            } else if(this.props.options && this.props.options.length > 0) {
                this.setState({selectedName: firstOption});
            }
        }
    }

    render() {
        const { options } = this.state
        // const noLabel = this.props.noLabel
        const label = this.props.label
        const type = this.props.type

        this.defineFirstOption()
            
        return (
            <div className={`selectBox ${label ? "selectBox--wLabel" : ''} ${this.state.boxActive ? 'selectBox--active': ''}`}>
                <div className="selectBox__selected" onClick={this.activeBox}>
                    {label && (
                        <label>{label}</label>
                    )}
                    <span>{this.state.selectedName}</span>
                </div>
                <div className="selectBox__options">
                    {this.RenderOptions(options, type)}
                </div>
            </div>
        )
    }
}