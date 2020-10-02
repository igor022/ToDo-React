import React, { Component } from 'react';

class InfoWidget extends Component {
    render() {
        return(
            <div className="additional-info">
                <p><span className="items-count"></span>0 left</p>
                <div className="filter-buttons">
                    <button className="all selected">All</button>
                    <button className="current">Active</button>
                    <button className="completed">Completed</button>
                </div>
                <button className="clear-tasks">Clear Completed</button>
            </div>
        )
    }
}

export default InfoWidget;