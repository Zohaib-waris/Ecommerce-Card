import './color.css';

function Color(prop){
    return( 
        <div id={prop.id} className={prop.className } onClick={prop.onClick} ></div>
    );
};
export default Color;