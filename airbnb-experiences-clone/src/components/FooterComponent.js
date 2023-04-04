import "./FooterComponent.css"

const FooterComponent = () => {
    return (
        <footer className="flex footer">
            <div className="flex footer-content">
                <div className="flex footer-textColumns">
                    <div>
                        <h3>Asistencia</h3>
                        <ul>
                            <li>Centro de ayuda</li>
                            <li>AirCover</li>
                            <li>Accesibilidad para todos</li>
                            <li>Opciones de cancelación</li>
                            <li>Nuestra respuesta ante la COVID-19</li>
                            <li>¿Problemas en tu barrio?</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Comunidad</h3>
                        <ul>
                            <li>Centro de ayuda</li>
                            <li>Airbnb.org para emergencias</li>
                            <li>Lucha contra la discriminación</li>

                        </ul>
                    </div>
                    <div>
                        <h3>Cómo ser anfitrión</h3>
                        <ul>
                            <li>Pon tu casa en Airbnb</li>
                            <li>AirCover para anfitriones</li>
                            <li>Recursos para anfitriones</li>
                            <li>Visita el foro de la comunidad</li>
                            <li>Ser un anfitrión responsable</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Airbnb</h3>
                        <ul>
                            <li>Newsroom</li>
                            <li>Descubre las nuevas funciones</li>
                            <li>Carta de los fundadores</li>
                            <li>Empleo</li>
                            <li>Inversores</li>
                            <li>Tarjeta regalo</li>
                        </ul>
                    </div>

                </div>

            </div>

        </footer >)
}

export default FooterComponent;