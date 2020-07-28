import React from 'react';
import { fetchData, } from './utils/fetch.api'

function App() {

    const [response, setResponse,] = React.useState({
        error: null,
        loading: true,
        data: null
    })

    React.useEffect(() => {

        fetchData('http://localhost:8080/article/all')
            .then(data => setResponse({ ...response, data, loading: false, }))
            .catch(error => setResponse({ ...response, error, loading: false }))
    }, [])

    const { data, loading, error, } = response

    if (error) {
        console.log('!! ', error)
        return null;
    }

    if (loading) {
        return (
            <h1>Loading</h1>
        )
    }

    const { content: articles, } = data


    return (
        <div style={{
            margin: '1rem',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {articles.map(({ author, header, paragraphs }) => (
                <div
                    key={header}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        borderRadius: '7px',
                        boxShadow: '0 3px 4px #ccc',
                        minWidth: '80%',
                        maxWidth: '80%',
                        margin: '1rem auto',
                    }}
                >
                    <div style={{
                        padding: '1rem',
                        // borderRadius: '7px',
                        borderRight: '3px solid #ccc',
                        backgroundColor: '#d9d9d9'
                    }}>
                        <h2 style={{ textAlign: 'center' }}>
                            {`${author.firstName} ${author.lastName}`}
                        </h2>
                        <img
                            src={`${author.image}`}
                            style={{
                                maxWidth: '10rem',
                                maxHeight: '10rem',
                                borderRadius: '7px',
                                boxShadow: '0 5px 7px #ccc'
                            }}
                        />
                    </div>

                    <div style={{ padding: '1rem', }}>
                        <h1>{header}</h1>
                        {paragraphs.map(({ content, }) => (
                            <p key={content}>
                                {content}
                            </p>
                        ))}
                    </div>

                </div>
            ))}
        </div>
    );
}

export default App;
