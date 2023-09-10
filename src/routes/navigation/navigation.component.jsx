import {Fragment} from 'react';
import {Outlet} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg'
import {
    NavigationContainer,
    NavLink,
    NavLinks,
    LogoContainer,
    ItemContainer,
    ButtonContainer,
} from './navigation.styles';
import Button, {BUTTON_TYPE_CLASSES} from "../../components/button/button.component";

const Navigation = () => {
    return (
        <Fragment>
            <NavigationContainer>
                <ItemContainer>
                    <LogoContainer to='/'>
                        <Logo className='logo'></Logo>
                    </LogoContainer>
                    <NavLinks>
                        <NavLink className='nav-link' to='/'>Why ProfitFill</NavLink>
                        <NavLink className='nav-link' to='/'>How It Works</NavLink>
                        <NavLink className='nav-link' to='/'>Integrations</NavLink>
                        <NavLink className='nav-link' to='/'>Pricing</NavLink>
                        <NavLink className='nav-link' to='/'>FAQ</NavLink>
                    </NavLinks>
                    <ButtonContainer>
                        <Button buttonType={BUTTON_TYPE_CLASSES.green}>Book a Demo</Button>
                        <NavLink className='nav-link'>Login</NavLink>
                    </ButtonContainer>

                </ItemContainer>
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
}

// <div className="nav-block">
//     <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease"
//          role="banner" className="navigation w-nav">
//         <div className="nav-container">
//             <div className="nav-wrapper"><a href="#top" className="nav-logo-link w-inline-block w--current"><img
//                 src="https://assets.website-files.com/64c94e8ea9fd428e35acc622/64c956877605d72f3e8f273c_Logo.svg"
//                 loading="lazy" alt=""></a></div>
//             <nav role="navigation" className="nav-menu w-nav-menu"><a href="#why" className="nav-link w-nav-link">Why
//                 ProfitFill</a><a href="#how-it-works" className="nav-link w-nav-link">How It Works</a><a
//                 href="#integrations" className="nav-link w-nav-link">Integrations</a><a href="#pricing"
//                                                                                         className="nav-link w-nav-link">Pricing</a><a
//                 href="#faq" className="nav-link w-nav-link">FAQ</a><a href="https://login.profitfill.com/"
//                                                                       className="nav-link show-tablet w-nav-link">Login</a>
//             </nav>
//             <div className="nav-button-group"><a data-w-id="2b2c63fe-2f35-4dd6-c146-2b477c11bb95" href="#"
//                                                  className="button-primary-s w-inline-block">
//                 <div>Book a Demo</div>
//             </a><a href="https://login.profitfill.com/" className="nav-link hide-tablet w-nav-link">Login</a>
//                 <div className="nav-menu-button w-nav-button" style="-webkit-user-select: text;" aria-label="menu"
//                      role="button" tabIndex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu"
//                      aria-expanded="false">
//                     <div className="w-icon-nav-menu"></div>
//                 </div>
//             </div>
//         </div>
//         <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
//     </div>
// </div>
export default Navigation;