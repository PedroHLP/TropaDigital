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
