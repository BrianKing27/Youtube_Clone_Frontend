
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
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.fetchVideos(this.state.search);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} className="d-flex">
                <div>
                    <input placeholder="Search" aria-label="Search" name="search" value={this.state.search} onChange={this.handleChange} />
                </div>
                <div>
                    <button type="submit">Search Videos</button>
                </div>
            </form>
        );
    }
}

export default SearchBar;