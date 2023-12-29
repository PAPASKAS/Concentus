import React from 'react';
import { useNavigate } from 'react-router-dom';

function MatchesNotFound() {
    const navigate = useNavigate();

    return (
        <button onClick={ () => navigate('/') }>
            Click me to go back
        </button>
    );
}

export default MatchesNotFound;