const body = document.getElementsByTagName("body")[0];
bodyStyle = {
    margin: '0px',
    padding: '0px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
};



function createHTMLElement(tag, text) {
    const element = document.createElement(tag);
    element.innerText = text;

    return element;
}
const h2Element = createHTMLElement('h1', 'YOGA AGENCY');
document.body.append(h2Element);
console.log(h2Element);
h2Element.style.marginLeft = '200px';
h2Element.style.marginTop = '35px';




const navElement = createHTMLElement('nav', 'home about testimonials contact');
document.body.append(navElement);
console.log(navElement);
navElement.style.color = 'red';
navElement.style.wordSpacing = '20px';
navElement.style.fontSize = '25px';
navElement.style.position = 'absolute';
navElement.style.top = '35px';
navElement.style.right = '200px';




const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = '60px';
h1.style.position = 'absolute';
h1.style.top = '150px';
h1.style.left = '200px';
h1.style.textTransform = 'uppercase';



const p = document.getElementsByTagName("p")[0];
p.style.position = 'absolute';
p.style.bottom = '270px';
p.style.left = '200px';
p.style.fontSize = '20px';



const button = document.getElementsByTagName("button")[0];
const buttonStyles = {
    position: 'absolute',
    bottom: '200px',
    left: '200px',
    height: '50px',
    width: '170px',
    innerText: 'CONTACT US',
    backgroundColor: 'lightblue',
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    fontSize: '15px',
};
button.innerText = "INVESTIGATE";
const btn_styles = button.style;
Object.assign(button.style, buttonStyles);



function createHTMLElement(tag, text) {
    const element2 = document.createElement(tag);
    element2.innerText = text;

    return element2;
}
const button2 = createHTMLElement('button', 'SAVE');
document.body.append(button2);
console.log(button2);
button2.style.position = 'absolute';
button2.style.bottom = '100px';
button2.style.left = '200px';
button2.style.height = '50px';
button2.style.width = '170px';
button2.innerText = 'SAVE';
button2.style.backgroundColor = 'lightgreen';
button2.style.border = 'none';
button2.style.borderRadius = '10px';
button2.style.color = 'white';
button2.style.fontSize = '15px';


const div = document.getElementsByTagName("div")[0];
const divStyles = {
    position: 'absolute',
    top: '160px',
    right: '200px',
    height: '400px',
    width: '400px'
};
const div_styles = div.style;
Object.assign(div.style, divStyles);