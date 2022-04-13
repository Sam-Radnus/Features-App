import React from 'react'
import PropTypes from 'prop-types'

function MovieList(props) {
    let {imageURL,title,details,date}=props;
    return (
        <>
            <div className="card" style={{width:'18rem'}}>
                <img src={props.imageURL} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.details}...</p>
                        <h6 className="card-title">{props.date}</h6>
                        <a href="#" className="btn btn-primary">watch</a>
                    </div>
            </div>
        </>
    )
}

MovieList.propTypes = {}

export default MovieList
