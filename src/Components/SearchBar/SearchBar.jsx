import React from 'react';

class Searchbar extends React.Component {
    state = {
        term:""
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className='SearchBar'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search"><h2>Youtube Clone</h2></label>
                        <input onChange={this.handleChange} name='video-search' placeholder="Search for Videos" type="text" value={this.state.term}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default Searchbar;