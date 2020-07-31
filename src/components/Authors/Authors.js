import React from 'react'

export default function Author({ authors, }) {
    return authors.map(author =>
        (
            <div style={{
                padding: '1rem',
                maxWidth: '70%',
                margin: '1rem auto',
            }}>
                <h1>{`${author.firstName} ${author.lastName}`}</h1>
                <img
                    style={{
                        maxWidth: '10rem',
                        maxHeight: '10rem',
                        borderRadius: '7px',
                        boxShadow: '0 2px 3px #d9d9d9',
                    }}
                    src={author.image}
                    alt="auhtor"
                />
            </div>
        )
    )
}
