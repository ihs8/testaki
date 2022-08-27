import React from 'react';
import './Navbar.css';
import Not from './NotificationBell.png';
import Search from './Search.png';
import Setting from './Settings.png';
import photo from './photo.jpg';
function Navbar() {

  // let handleChange = e => {
  //   var files = e.target.files;
  //   var filesArray = [].slice.call(files);
  //   filesArray.forEach(e => {
  //     console.log(e.name);
  //     console.log(e.size);
  //     console.log(e.type);
  //     console.log(e.lastModifiedDate);
  //   });
  // };
  return (
   <div className='nav'>
<input type='search' placeholder='Search' className='search' />

<div className='info'>
  <div className='notification'>
<img src={Not} alt='profile' id='not' /> <p>18</p> </div>
  <div className='settings'>
<img src={Setting} alt='profile' /> </div>
<p>IHEB</p>
<div className="item">
            <img
              src={photo}
              alt=""
              className="avatar"
            />
          </div>
</div>


   </div>
      
    
  );
}

export default Navbar;

{/* <div>
      <h1>File Selector</h1>
      <input type="file" multiple="multiple" onChange={e => handleChange(e)} />
    </div> */}
