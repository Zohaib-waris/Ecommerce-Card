import './benefits.css'
import Li from './li/li';
let benefits_text={
    Text : "This results in faster hair growth and  healthier-looking hair.",
    Text2 : "Dandruff control - Jaborandi extract is one of the best natural ingredients .",
    Text3 : "Salicylic acid is the star ingredient when it comes to deal with acne extracts."
}
function Benefits() {
    return (
        <div className="benefits">
            <p className="select_text benefits">
                Benefits
            </p>
            <div className="benefits_items">
                <ul>
                    <Li li_text={benefits_text.Text}/>
                    <Li li_text={benefits_text.Text2}/>
                    <Li li_text={benefits_text.Text3}/>
                </ul>
            </div>
        </div>
    );
};
export default Benefits;