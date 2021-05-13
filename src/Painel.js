import Logo from './img/logo.png';
import Box from './components/Box';
import Card from './components/Card';
import './styles/painel.css';

function Painel() {
  return (
    
    
    
     <div id="container">
    
        <div id="left-content">
            <img id="logo-fit" src={Logo}></img>
            <Box />
        </div>
        
        <div id="right-content">
          <a id="user">
            Olá usuario
            <svg width="1550" height="4" viewBox="0 0 1550 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 1L1549 3.09466" stroke="black" stroke-opacity="0.1"/>
</svg>

          </a>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
     </div>
      
    
  );
}

export default Painel;
