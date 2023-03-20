
import Color from './color/color';
import './selecter.css';


function Select(){
    
    function changebg(){

            document.getElementById("section").style.backgroundColor="rgb(255, 187, 0)";
            document.getElementById("Aside").style.background="radial-gradient(rgb(240, 175, 79),rgb(255, 188, 4))";
    }
    function changebg_1(){

            document.getElementById("section").style.backgroundColor="rgb(43, 183, 226)";
            document.getElementById("Aside").style.background="radial-gradient(rgb(157, 206, 221),rgb(43, 183, 226))";
    }
    function changebg_2(){
         
            document.getElementById("section").style.backgroundColor="rgb(80, 226, 43)";
            document.getElementById("Aside").style.background="radial-gradient(rgb(131, 206, 113),rgb(80, 226, 43))";
    }
    return(
        <div>
            <p className="select_text">
                select a color
            </p>
            <div className="colors" >
                <Color id="color" className="First_color color" onClick={changebg}   />
                <Color id="color" className="second_color color" onClick={changebg_1}  />
                <Color id="color" className="third_color color" onClick={changebg_2} />
                
            </div>
        </div>
    );
};
export default Select;