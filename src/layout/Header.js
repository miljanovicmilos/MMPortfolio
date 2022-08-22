import {Col, Container, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";


function Header() {
    const location = useLocation()

    const route = location.pathname.split("/")[1]
    let tabs = {
        home: "",
        work: "work",
        about: "about",
        contact: "contact"
    }

    return (
        <div className={`${route === tabs.work | route === tabs.about ? 'background-light' : 'background-dark'}`}>
            < Container>
                < Row className="py-3 justify-content-between">
                    < Col className="d-flex align-items-center" md={6}>
                        {route === tabs.work | route === tabs.about ?
                            <img src='/images/Logo/Logo.svg' alt="logo"/> :
                            <img src='/images/Logo/logo-whitesvg.svg' alt="logo"/>
                        }
                    </Col>
                    <Col md={3}>
                        <nav className='d-flex  justify-content-between'>
                            <div className="nav-link ">
                                <NavLink
                                    className={`${route === tabs.work | route === tabs.about ? 'text-black after-bg' : 'text-white'}`}
                                    to={tabs.home}>Home
                                    <div
                                        className={`dot ${route === tabs.work | route === tabs.about && 'bg-dark'}`}></div>
                                </NavLink>
                            </div>
                            <div className="nav-link  ">
                                <NavLink
                                    className={`${route === tabs.work | route === tabs.about ? 'text-black' : 'text-white'}`}
                                    to={tabs.home} to={tabs.work}>Work
                                    <div
                                        className={`dot ${route === tabs.work | route === tabs.about && 'bg-dark'}`}></div>
                                </NavLink>
                            </div>
                            <div className="nav-link">
                                <NavLink
                                    className={`${route === tabs.work | route === tabs.about ? 'text-black' : 'text-white '}`}
                                    to={tabs.home} to={tabs.about}>About
                                    <div
                                        className={`dot ${route === tabs.work | route === tabs.about && 'bg-dark'}`}></div>
                                </NavLink>
                            </div>
                            <div className="nav-link">
                                <NavLink
                                    className={`${route === tabs.work | route === tabs.about ? 'text-black' : 'text-white'}`}
                                    to={tabs.home} to={tabs.contact}>Contact
                                    <div
                                        className={`dot ${route === tabs.work | route === tabs.about && 'bg-dark'}`}></div>
                                </NavLink>
                            </div>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header

