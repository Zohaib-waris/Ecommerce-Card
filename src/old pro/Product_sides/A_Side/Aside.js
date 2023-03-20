import './Aside.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import image from './Image/36-Commercial-Photography-crop.png';
import image_select from './Image/200-smooth-and-serene-soft-cleanse-radiance-anti-acne-and-oil-original-imafprdv2qm5mzeg.png'
import image_select_1 from './Image/J5NBUQX741Facewashbottel_1588858641.png'
function Aside() {

    function changeico(){
        if(document.getElementById("hearts").classList.contains("far")){
            document.getElementById("hearts").className='fas fa-heart red ';
        }
        else if(document.getElementById("hearts").classList.contains("fas")){
            document.getElementById("hearts").className='far fa-heart';
        }
    }
    function image1(){
        document.getElementById("image1").style.display ="block"
        document.getElementById("image2").style.display ="none"
        document.getElementById("image3").style.display ="none"
    }
    function image2(){
        document.getElementById("image2").style.display ="block"
        document.getElementById("image1").style.display ="none"
        document.getElementById("image3").style.display ="none"
    }
    function iamge3(){
        document.getElementById("image3").style.display ="block"
        document.getElementById("image2").style.display ="none"
        document.getElementById("image1").style.display ="none"
    }
    return (
        <div id="Aside">
            <div className="icon">
                <button >
                    <i className="fas fa-share-alt"></i>
                </button>
                <button onClick={changeico}>
                    <i id="hearts" className="far fa-heart"></i>
                </button>
            </div>
            <div className="img">
                <img id="image1" className="show " src={image} alt="not found"/>
                <img id="image2" className="hide " src={image_select} alt="not found" />
                <img id="image3" className="hide " src={image_select_1} alt="not found" />
            </div>
            <div className="bottom">
                <div className="img_section">
                <div className="image_select" onClick={image1}>
                    <img src={image} alt="not found"/>
                </div>
                <div className="image_select" onClick={image2}>
                    <img src={image_select} alt="not found"/>
                </div>
                <div className="image_select" onClick={iamge3}>
                    <img src={image_select_1} alt="not found"/>
                </div>
                </div>

            </div>
            {/* <i class="fas fa-heart"></i> */}
        </div>
    );
};
export default Aside;