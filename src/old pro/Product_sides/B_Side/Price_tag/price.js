import './price.css';

function Price({price}){
    return(
        <div className="price_section">
            <p className="Tag">Rs.</p>
            <h1 className="Rs">
                {price}
            </h1>
        </div>
    );
};
export default Price;