import React from "react";
import "../styles/notFound.css";

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="center">
                <i class="fas fa-exclamation-triangle"></i>
                <h1 className="logo300">RETO+300</h1>{" "}
                <i class="fas fa-exclamation-triangle"></i>
            </div>
            <p>
                Al parecer la página que buscas está perdida... más perdida que
                la mama del chavo intenta ir al <a href="/"> inicio </a> para
                que verifiques la página que estás buscando o notificame de un
                error de la página <a href="/notifyError">aquí</a>
            </p>
        </div>
    );
};

export default NotFound;
