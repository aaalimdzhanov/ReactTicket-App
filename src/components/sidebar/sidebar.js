import React,{Component} from 'react';
import '../../assets/css/style.css'
import '../../assets/fonts/iconfonts/mdi/css/materialdesignicons.min.css'
import userProfileImage from '../../assets/imgs/faces/face1.jpg'
class Sidebar extends Component {
    state = {  }
    render() { 
        return ( 
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
            <li className="nav-item nav-profile">
                <div className="nav-link">
                    <div className="user-wrapper">
                        <div className="profile-image">
                            <img src={userProfileImage} alt="profile image"></img>
                        </div>
                        <div className="text-wrapper">
                            <p className="profile-name">Richard V.Welsh</p>
                            <div>
                                <small className="designation text-muted">Manager</small>
                                <span className="status-indicator online"></span>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-success btn-block">New Ticket
                        <i className="mdi mdi-plus"></i>
                    </button>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="index.html">                            
                    <i className="menu-icon mdi mdi-home"></i>
                    <span className="menu-title">Главная страница</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false"
                    aria-controls="ui-basic">
                    <i className="menu-icon mdi mdi-information-outline"></i>
                    <span className="menu-title">Информация</span>
                    <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="ui-basic">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/buttons.html">Список Администраторов</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/typography.html">BeeFree</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="pages/forms/basic_elements.html">
                    <i className="menu-icon mdi mdi-apple-safari"></i>
                    <span className="menu-title">BeeFree</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false"
                    aria-controls="auth">
                    <i className="menu-icon mdi mdi-settings"></i>
                    <span className="menu-title">Настройки</span>
                    <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="auth">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item">
                            <a className="nav-link" href="pages/samples/blank-page.html">Увидомления</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages/samples/login.html">Вид</a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav> );
    }
}
 
export default Sidebar;