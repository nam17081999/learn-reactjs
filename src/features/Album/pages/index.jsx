import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'V-Pop đầy hứa hẹn',
            thumbnaiURL: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/0/2/a/3/02a31e5b9cad2e7dbd590f605999291d.jpg'
        },
        {
            id: 2,
            name: 'K-Pop Today',
            thumbnaiURL: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/4/0/d/d/40dd9e4631e897cb97685ebffdc5b962.jpg'
        },
        {
            id: 3,
            name: 'City Pop',
            thumbnaiURL: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/b/e/c/0/bec02ef90b4b8384e8993001f34589a9.jpg'
        }
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>
            <AlbumList albumList = {albumList} />
        </div>
    );
}

export default AlbumFeature;