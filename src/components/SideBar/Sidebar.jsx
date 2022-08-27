import React from 'react';
import './sidebar.css';
import logo from './logo.png';
import up from './Upload.png';
import ICO from './ICO.jsx';
import Star from './Star.png';
import Archive from './Box.png';
import Home from './HomeMinimal.png';
import AllF from './FileStructure.png';

function Sidebar() {
  const hiddenFileInput = React.useRef(null);
const handleClick = event => {
  hiddenFileInput.current.click();

};
const handleChange = event => {
  console.log(event.target.files);

};
  return (
    <footer>
      <img src={logo} alt="logo" width={60} id={'i'} />
      
      <button onClick={handleClick} ><img src ={up}></img> upload</button>
      <input type="file" style={{display:'none'}} ref={hiddenFileInput}   onChange={handleChange} multiple="multiple"
/> 
    
    <a href='/' style={{ textDecoration: 'none' }}>
    <ICO icon={Home} text={'HOME'}/>
    </a>

    <a href='/star'style={{ textDecoration: 'none' }}><ICO icon={Star} text={'Starred'}/></a>
    <a href='/arch'style={{ textDecoration: 'none' }}><ICO icon={Archive} text={'Archived'}/></a>
    <a href='/all'style={{ textDecoration: 'none' }}><ICO icon={AllF} text={'AllFiles'}/></a>
      {/* <div className='icons'>
        <img src={up} alt="home" width={35} id='up' /> HOME
        <img src="" alt="search" />
        <img src="" alt="library" />
        <img src="" alt="profile" />
      </div> */}
    </footer>
  );
}

export default Sidebar;
