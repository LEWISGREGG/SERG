import React from 'react';

class SearchBox extends React.Component {
  constructor(props){
    super(props);
    this.state={term:''};
  }
  onInputChange(title){
    const name = this.props.searchBoxName || undefined
    this.setState({title});
    if(this.props.onSearchTermChange){
      this.props.onSearchTermChange({name,title})
    }
  }
    render() {
      const title = this.props.searchBoxName || undefined
        return (
            <div className="search-box">

              <input title={title} className="search-input" id="search" type="text" placeholder="Search" value={this.state.title}
                onChange={event=>this.onInputChange(event.target.value)} onKeyPress={this.props.onKeyPress|| null}/>
            </div>
        );
    }
}

export default SearchBox;