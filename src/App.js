import React from 'react';
import { fetchData, } from './utils/fetch.api'
import Authors from './components/Authors/Authors'
import Articles from './components/Articles/Articles'

function App() {

    const [response, setResponse,] = React.useState({
        data: null,
        error: null,
        loading: true
    })

    React.useEffect(() => {
        fetchData('http://localhost:8080/article/all')
            .then(data => setResponse(res => ({ ...res, data, loading: false })))
            .catch(error => setResponse(res => ({ ...res, error, loading: false })))
    }, [])

    const { data, loading, error, } = response

    if (data) {
        console.log('!!! ', data)
    }

    if (!data || error) {
        error && console.error('[Error - App]: ', error)
        return null;
    }

    if (loading) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                Loading...
            </h1>
        )
    }

    const { content, } = data

    const authors = content.map(({ author, }) => author)

    const articles = content.map(({ header, paragraphs, author, }) => ({
        authorName: `${author.firstName} ${author.lastName}`,
        header,
        paragraphs
    }))

    console.log('!!! ', articles)

    return (
        <>
            <Authors authors={authors} />
            <Articles articles={articles} />
        </>
    )
}

export default App;
