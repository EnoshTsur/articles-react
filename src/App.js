import React from 'react';
import { fetchData, } from './utils/fetch.api'

function App() {

    const [response, setResponse, ] = React.useState({ 
        error: null, 
        loading: true, 
        data: null 
    })

    React.useEffect(() => {

        fetchData('http://localhost:8080/article/all')
            .then(data => setResponse({...response, data, loading: false, }))
            .catch(error => setResponse({...response, error, loading: false}))
    }, [])

    const { data, loading, error, } = response

    if(error) {
        console.log('!! ', error)
        return null;
    }

    if(loading) {
        return (
            <h1>Loading</h1>
        )
    }

    if(data) {
        console.log('!!! ', data)
    }
    
    return (
        <div>
            
        </div>
    );
}

export default App;
