import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFoundPage(){
    return(
        <div className="text">
            <h2>Если вы видите эту страницу то либо вы не <Link to="/Authorization">авторизовались</Link> либо</h2>
            <h2 style={{color: "red"}}> ERROR: page not found</h2>
            <img src={require('../images/PageNotFound.jpg')} alt="for sell"/>
        </div>
    );
}