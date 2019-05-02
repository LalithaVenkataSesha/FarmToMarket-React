import React from 'react';
import SearchBox from '../components/SearchBox';
import SearchBtn from '../components/SearchBtn'

function Dashboard () {
return (
    <div>
        <div className="container">
            <SearchBox />
            <SearchBtn />
        </div>
    </div>
)
}

export default Dashboard;