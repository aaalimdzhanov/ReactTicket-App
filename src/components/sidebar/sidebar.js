import React,{Component} from 'react';
import '../../assets/css/style.css'
import '../../assets/fonts/iconfonts/mdi/css/materialdesignicons.min.css'
import userProfileImage from '../../assets/imgs/faces/face1.jpg'
class Sidebar extends Component {
    state = {  }
    render() { 
        return ( 
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
            <li class="nav-item nav-profile">
                <div class="nav-link">
                    <div class="user-wrapper">
                        <div class="profile-image">
                            <img src={userProfileImage} alt="profile image"></img>
                        </div>
                        <div class="text-wrapper">
                            <p class="profile-name">Richard V.Welsh</p>
                            <div>
                                <small class="designation text-muted">Manager</small>
                                <span class="status-indicator online"></span>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-success btn-block">New Ticket
                        <i class="mdi mdi-plus"></i>
                    </button>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="index.html">                            
                    <i class="menu-icon mdi mdi-home"></i>
                    <span class="menu-title">Главная страница</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false"
                    aria-controls="ui-basic">
                    <i class="menu-icon mdi mdi-information-outline"></i>
                    <span class="menu-title">Информация</span>
                    <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="ui-basic">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item">
                            <a class="nav-link" href="pages/ui-features/buttons.html">Список Администраторов</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="pages/ui-features/typography.html">BeeFree</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="pages/forms/basic_elements.html">
                    <i class="menu-icon mdi mdi-apple-safari"></i>
                    <span class="menu-title">BeeFree</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false"
                    aria-controls="auth">
                    <i class="menu-icon mdi mdi-settings"></i>
                    <span class="menu-title">Настройки</span>
                    <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="auth">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item">
                            <a class="nav-link" href="pages/samples/blank-page.html">Увидомления</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="pages/samples/login.html">Вид</a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav> );
    }
}
 
export default Sidebar;