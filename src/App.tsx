import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Modal } from "./components";

function App() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Button
            primary
            onClick={() => setIsModalVisible(true)}
            children="Learn React"
          />
        </header>
      </div>
      <Modal
        isVisible={isModalVisible}
        title="Learn React"
        onClose={() => setIsModalVisible(false)}
        bottomButtonProps={[
          {
            children: "Close",
            onClick: () => setIsModalVisible(false),
          },
          {
            primary: true,
            children: "Submit",
            onClick: () => alert("Submitted!"),
          },
        ]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non metus
        et nisl placerat fringilla. Aliquam et venenatis lorem. In ac odio
        malesuada, egestas lectus a, porta arcu. Sed fermentum diam dolor, vel
        efficitur purus maximus vitae. Integer fermentum aliquet turpis, id
        porttitor urna fermentum eget. Suspendisse vitae tempus turpis, at
        tincidunt ipsum. Nunc diam nulla, varius at urna quis, elementum feugiat
        risus. Curabitur in nisl sit amet dui ultricies interdum. Nam volutpat
        volutpat nunc, hendrerit dapibus nulla. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nunc nec aliquet libero. Sed ligula justo,
        pulvinar vitae bibendum ac, finibus quis justo. Suspendisse in orci
        convallis, facilisis augue sed, scelerisque nibh.
      </Modal>
    </>
  );
}

export default App;
