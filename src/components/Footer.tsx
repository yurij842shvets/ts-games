import logo from "../assets/logo.png";
import '../styles/Footer.css'

export default function Footer() {
    return (
        <>
        <footer>
            <img src={logo} alt="logo" />

            <div className="contacts">
                <p>Тел: +38 (123) 456 78 90</p>
                <p>E-Mail: codingmagic@gmail.com</p>
                <p>Facebook: CodingMagic</p>
                <p>Twitter: CodingMagic</p>
                <p>Instagram: CodingMagic</p>
            </div>

            <div className="input-wrapper">
                <input type="text" placeholder="Ваша ел. адреса..." className="footer-input"/>
                <p className="small-font">*Підписавшись, Ви зможете ортимувати інформаццію про новинки на сайті</p>
            </div>

            <button className="footer-button">Підписатись</button>
        </footer>
        </>
    )
}