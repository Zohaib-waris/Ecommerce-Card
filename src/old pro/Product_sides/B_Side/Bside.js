import Benefits from './Benefits/benefits';
import './bside.css';
import Cart from './Cart/cart';
import Price from './Price_tag/price';
import Select from './Selecter/selecter';
import Text from './text/text';

function Bside(){
    return(
        <div className="bside">
            <Text/>
            <Price price="3,500"/>
            <Select/>
            <Benefits/>
            <Cart/>
        </div>
    );
};
export default Bside;