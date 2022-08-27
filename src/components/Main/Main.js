import React from 'react';
import Card from '../Cards/card';
import file  from './File.png'
import video from './Video.png'
import image from './Image.png'
import star from './Star.png'
import box from './Box.png'
import Table from '../Table/table.jsx';
import './Main.css'
import CardL from '../Cards/CardL';
function Main() {
  return (
    <main>
      <div className="contain">
      <Card icon={file} title={"documents"} pers={12}/>
      <Card icon={video} title={"Video"} pers={29}/>
      <Card icon={image} title={"Images"} pers={29}/>
      </div>
      <h1 style={{ textAlign: 'left',paddingLeft:"10%" }}>Recent Files</h1>
      <div className="content">
        <Table/>
        <div className="content-text">

          <CardL icon ={star} title ="starred"/>
          <CardL icon={box} title= "archived"/>
          </div>
        </div>

    </main>
  );
}

export default Main;
