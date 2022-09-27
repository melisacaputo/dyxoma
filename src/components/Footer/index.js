import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";
import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-icons">
        <a href="mailto:Dyxoma.arg@gmail.com">
          <FaRegEnvelope />
        </a>
        <a
          href="https://www.instagram.com/dyxoma.ar/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/DYXOMA"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
        <a href="tel:1130789014">
          <FaPhoneAlt />
        </a>
      </div>
      <div className="footer-text">
        <p>© Copyright dyxoma - 2022</p>
        <p>
          Defensa de lxs consumidores. Para reclamos{" "}
          <a
            href="https://autogestion.produccion.gob.ar/consumidores"
            target="_blank"
            rel="noreferrer"
          >
            ingrese aquí
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
