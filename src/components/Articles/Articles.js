import React from 'react'

export default function Articles({ articles, }) {

    return articles.map(({ header, paragraphs, authorName, }) => (
        <div style={{
            padding: '1rem',
            maxWidth: '70%',
            margin: '0 auto'
        }} key={authorName}>
            
            <h1>{header}</h1>
            {
                paragraphs.map(({ content, }) => (
                    <p key={content}>{content}</p>
                ))
            }
            <p><strong>{authorName}</strong></p>
        </div>
    ))
}
