import React, { Component } from 'react'
import FinderHeader from '../components/Finder/Header/Header'
import FinderForm from '../components/Finder/Form/Form'


export default class Todo extends Component {
    render() {
        return (
            <div className="finderBox">
                <FinderHeader></FinderHeader>
                <FinderForm/>
            </div>
        )
    }
}
