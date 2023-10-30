import React from "react";

export const Card = ({title, text, btn, btnUrl, img}) => {

    return (
        <div className="col-md-6 col-lg-3">
            <div className="card mb-3">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href={btnUrl} className="btn btn-primary">{btn}</a>
                </div>
            </div>
        </div>
    );
};