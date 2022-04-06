import React, {useState} from 'react';
import '../styles/SearchBar.css'

const SearchBar = (props) => {

    const [title, setTitle] = useState('')

    const inputSearchHandler = (e) => {
        setTitle(e.target.value)

    }

    const searchVideoHandler = (e) => {
        e.preventDefault();
        
        props.onSearch(title)
        setTitle('')
    }


    return (
        <div>
            <form className="search-form" onSubmit={searchVideoHandler}>
                <div className='form-controls'>
                <label>Search</label>
                    <input
                        value={title}
                    onChange={inputSearchHandler}
                    type='text'
                    id='video-search'
                    placeholder='Search video' />
                </div>
               
            </form>
        </div>
    );
};

export default SearchBar;