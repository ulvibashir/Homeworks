import React, { useState, useEffect } from 'react';
import Button from './components/Button'
import Modal from './components/Modal'

// this is ready component i just used it
import OutsideAlerter from './components/OutsideAlerter'


function App() {

  const [currentState, setCurrentState] = useState('main');
  const [color, setColor] = useState('#c8c8c8')


  useEffect(() => {
    document.body.style.backgroundColor = color;
    document.body.addEventListener('click', (e) => {
    
    })
  })





  const onClickFirst = (e) => {
    setCurrentState('modal1');
    setColor('#312e2e')
  }


  const onClickSecond = (e) => {
    setCurrentState('modal2');
    setColor('#312e2e')

  }


  const OkAndCancel = () => {
    // doing nothing special in that case that`s why i wrote same function
    setCurrentState('main')
    setColor('#c8c8c8')

  }

  return (
    <div className="App">

      {currentState === 'main' &&
        <div className="main-btn-container">
          <Button backgroundColor="teal"
            text="Open First Modal"
            onClick={onClickFirst}
          />
          <Button backgroundColor="teal"
            text="Open Second Modal"
            onClick={onClickSecond}
          />
        </div>
      }


      {currentState === 'modal1' &&
      <OutsideAlerter onClick={OkAndCancel}>
        <Modal header="Do you want to delete this file ?"
          closeButton={true}
          onClick={OkAndCancel}
          text="Once you delete this file, it won’t be possible to undo this action. Are you sure you want to delete it?"
          actions={
            [
              // I can change color but now looks better
              <Button backgroundColor="#b3382c"
                key="1"
                text="Ok"
                onClick={OkAndCancel}
              />,
              <Button backgroundColor="#b3382c"
                key="2"
                text="Cancel"
                onClick={OkAndCancel}
              />
            ]
          }
        />
      </OutsideAlerter>
      }



      {currentState === 'modal2' &&
      <OutsideAlerter onClick={OkAndCancel}>

        <Modal header="Lorem Ipsum dolor set ?"
          closeButton={false}
          onClick={OkAndCancel}
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text "
          actions={
            [
              <Button backgroundColor="#b3382c"
                key="3"
                text="Ok"
                onClick={OkAndCancel}
              />,
              <Button backgroundColor="#b3382c"
                key="4"
                text="Cancel"
                onClick={OkAndCancel}
              />
            ]
          }
        />
      </OutsideAlerter>
      }



    </div>
  );


}

export default App;
