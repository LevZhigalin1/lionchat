
export default function PageNotFound(){
    return(
        <div className="text">
            <h2 style={{color: "red"}}> ERROR: page not found</h2>
            <img src={require('../images/PageNotFound.jpg')} alt="for sell"/>
        </div>
    );
}