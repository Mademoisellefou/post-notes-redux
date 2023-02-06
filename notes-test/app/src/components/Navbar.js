import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar({ changeroute }) {

    const navigate = useNavigate();
    const change = (e) => {
        e.preventDefault();
        navigate(`/${changeroute}`);
    };

    return (
        <div>
            <button className='btn-nav' onClick={change}>
                {changeroute===''?'List All Post':changeroute}
            </button>
        </div>
    )
}

export default Navbar
