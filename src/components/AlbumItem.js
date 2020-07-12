import React from 'react';

export default function AlbumItem({ src: { title } }) {
    return (
        <div>
            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-9">
                        <h4>Title: {title}</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}