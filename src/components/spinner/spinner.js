import React from 'react';

const Spinner =()=>{
    return <div>
        <div class="spinner-grow text-primary" role="status">
        <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
}

export default Spinner;