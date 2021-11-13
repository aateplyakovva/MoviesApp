import React from 'react';

import { useParams } from 'react-router';

import PageHeader from '../components/page-header/PageHeader';
import { category as cate } from '../api/tmdbApi';
import MovieGrid from '../components/movie-grid/MovieGrid';

const Catalog = () => {

    const { category } = useParams(); 

    return (
        <>
            <PageHeader>
                {category === cate.movie ? 'Movies' : null}
            </PageHeader>
            <div className="container">
                <div className="section">
                    <MovieGrid  category={category}/>
                </div>
            </div>
        </>
    )
}

export default Catalog;

