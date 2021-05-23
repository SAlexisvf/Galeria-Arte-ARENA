import React from 'react'; 
import '../Footer.css'
import {FaTwitter} from "react-icons/fa"; 
import {FaFacebook} from "react-icons/fa"; 
import {FaLink} from "react-icons/fa"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">ARENA</h5>
                <p>Atención Integral del Autismo: Galería de Arte.</p>

                <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/autismoarena" role="button"
                        ><i class="fab FaTwitter"></i> <FaFacebook icon= {FaFacebook}/> </a>

                <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/autismoarena" role="button"
                ><i class="fab FaTwitter"></i> <FaTwitter icon= {FaTwitter}/> </a>

                <a class="btn btn-outline-light btn-floating m-1" href="https://www.autismoarena.org.mx" role="button"
                ><i class="fab FaTwitter"></i> <FaLink icon= {FaLink}/> </a>

            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Estudiante:</h5>
                <ul className="list-unstyled">
                    <li><a>Alexis Virgen</a></li>
                    <li><a>Andrés Ricardo Garza Vela</a></li>
                    <li><a>Luis Gerardo Bravo</a></li>
                    <li><a>Hector de Luna</a></li>
                    <li><a>Antonio Hernández</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Matricula:</h5>
                <ul className="list-unstyled">
                    <li><a>A00820175</a></li>
                    <li><a>A00820361</a></li>
                    <li><a>A01282014</a></li>
                    <li><a>A01282272</a></li>
                    <li><a>A01382469</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2021 Copyright:
        <a> Instituto Tecnológico y de Estudios Superiores de Monterrey </a>
    </div>

</footer>

export default Footer