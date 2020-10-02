import React, { Component } from 'react';

class InfoWidget extends Component {
  state = {
    selected: 0
  } 

  changeSelected = (index, className) => {
    this.setState({
      selected: index
    })
    this.props.handleFilter(className);
  }
  
  render() {
    const { todoCount } = this.props;
    const buttons = [
      { className: 'all', value: 'All' },
      { className: 'current', value: 'Active' },
      { className: 'completed', value: 'Completed' },
    ];

    return(
      <div className="additional-info">
        <p>
          <span className="items-count"></span>
          {`${todoCount} item${ todoCount === 1 ? '' : 's'} left`}
        </p>
        <div className="filter-buttons">
          {
            buttons.map((b, i) => (
              <button 
                className={`${b.className} ${this.state.selected === i ? 'selected' : ''}`} 
                key={i}
                onClick={() => this.changeSelected(i, b.className)}
              >
                {b.value}
              </button>
            ))
          }

        </div>
        <button className="clear-tasks">Clear Completed</button>
      </div>
    )
  }
}

export default InfoWidget;