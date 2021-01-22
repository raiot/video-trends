import React from 'react'


export const CatalogComponent = ({ videos }) => (<>
    <h2>Home</h2>
    {videos.map((video, i) =>
        <div key={`${i}-catalog-video`}>
            <span>{video.name}</span>
        </div>
    )}
</>);