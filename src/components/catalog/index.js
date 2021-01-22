import React from 'react';
import { useSelector } from 'react-redux';

import { CatalogComponent } from './catalog';

const Catalog = () => {
        const videos = useSelector((state) => state.videos.get('videos'));
        return (<><CatalogComponent videos={videos} /></>)
};

export default Catalog;
