
import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state={
            search: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.fetchVideos(this.state.search);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="d-flex">
                    <input
                    id="SearcBar"
                    type="text"
                    placeholder="Search..."
                    aria-label="Search"
                    name="search" 
                    value={this.state.search}
                    onChange={this.handleChange} />
                    <button type="submit" value="Search">Search Videos</button>
                </form>
            </div>

        );
    }
}

export default SearchBar;