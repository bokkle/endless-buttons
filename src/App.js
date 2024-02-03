import { useState } from "react";
import "./App.css";

function App() {
  const [btnNum, setBtnNum] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setBtnNum(btnNum + 1);
    }, 2500);
    console.log(btnNum);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="textbox">
            <h3>Do not press</h3>
          </div>
          <div className="button-container">
            {btnNum === 0 && <Button onHandleClick={handleClick} />}
            {btnNum === 1 && <Button2 onHandleClick={handleClick} />}
            {btnNum === 2 && <Button3 onHandleClick={handleClick} />}
            {btnNum === 3 && <Button4 onHandleClick={handleClick} />}
            {btnNum === 4 && <Button5 onHandleClick={handleClick} />}
            {btnNum === 5 && <Button6 onHandleClick={handleClick} />}
            {btnNum === 6 && <Button7 onHandleClick={handleClick} />}
            {btnNum === 7 && <Button8 onHandleClick={handleClick} />}
            {btnNum === 8 && <Button9 onHandleClick={handleClick} />}
            {btnNum === 9 && <Button10 onHandleClick={handleClick} />}
            {btnNum === 10 && <Button11 onHandleClick={handleClick} />}
            {btnNum === 11 && <Button12 onHandleClick={handleClick} />}
            {btnNum === 12 && <Button13 onHandleClick={handleClick} />}
          </div>
        </div>
      </div>
    </>
  );
}

const Button = ({ onHandleClick }) => {
  return (
    <>
      <button className="btn-class-name" onClick={onHandleClick}>
        <span className="back"></span>
        <span className="front"></span>
      </button>
    </>
  );
};

const Button2 = ({ onHandleClick }) => {
  return (
    <button className="btn-glow" onClick={onHandleClick}>
      DON'T
    </button>
  );
};

const Button3 = ({ onHandleClick }) => {
  return (
    <div className="background-button">
      <button className="button-emergency" onClick={onHandleClick}>
        PLEASE NO
      </button>
    </div>
  );
};

const Button4 = ({ onHandleClick }) => {
  return (
    <div id="pulsa" className="pulsa">
      <button id="cta" className="cta" onClick={onHandleClick}>
        NOOO<div className="star a"></div>
        <div className="star b"></div>
        <div className="star c"></div>
        <div className="star d"></div>
        <div className="star e"></div>
        <div className="star f"></div>
        <div className="star g"></div>
        <svg
          xlinkHref="http://www.w3.org/1999/xlink"
          viewBox="0 0 1024 1024"
          width="24px"
          className="rocket"
        >
          <path
            fill="#3A7EB9"
            d="M662.72 462.784l136.448 169.408v173.248l-136.448-48.32zM342.72 457.344L206.272 626.816v173.248l136.448-48.384z"
          ></path>
          <path
            fill="#D48171"
            d="M570.688 418.688l-142.848 1.152a266.496 266.496 0 0 1-20.288-0.576l3.712 448.64c0.256 28.928 94.272 130.048 94.272 130.048s93.888-102.656 93.632-131.584l-3.712-448.96a344.64 344.64 0 0 1-24.768 1.28z"
          ></path>
          <path
            fill="#E9DF92"
            d="M531.456 599.296l-63.04 0.576c-3.008 0-5.952-0.064-8.96-0.384l2.176 257.792c0.128 16.64 41.728 74.816 41.728 74.816s41.344-58.944 41.28-75.52l-2.176-257.92c-3.648 0.384-7.296 0.64-11.008 0.64z"
          ></path>
          <path
            fill="#B5D5EB"
            d="M554.304 93.568a324.352 324.352 0 0 0-110.592 1.728L342.72 240.768v584.512c13.824-0.96 27.968-1.536 42.368-1.536h245.248c11.84 0 23.36 0.384 34.816 1.024V253.312L554.304 93.568z"
          ></path>
          <path
            fill="#3A7EB9"
            d="M541.44 94.144L500.416 35.008l-45.696 59.136v29.504h89.024v-29.504zM459.456 288.64h88.96v88.896h-88.96zM459.456 467.456h88.96v88.96h-88.96zM459.456 634.176h88.96v88.896h-88.96zM364.928 788.736h277.76v44.352h-277.76z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

const Button5 = ({ onHandleClick }) => {
  return (
    <button className="button-sparkle" onClick={onHandleClick}>
      <div id="ui">DONT</div>PRESS
    </button>
  );
};

const Button6 = ({ onHandleClick }) => {
  return (
    <button className="legit-button" onClick={onHandleClick}>
      STILL LOL?{" "}
    </button>
  );
};

const Button7 = ({ onHandleClick }) => {
  return (
    <div className="voltage-button">
      <button onClick={onHandleClick}>HATE U</button>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 234.6 61.3"
        preserveAspectRatio="none"
        xmlSpace="preserve"
      >
        <filter id="glow">
          <feGaussianBlur
            className="blur"
            result="coloredBlur"
            stdDeviation={2}
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.075"
            numOctaves="0.3"
            result="turbulence"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale={30}
            xChannelSelector="R"
            yChannelSelector="G"
            result="displace"
          />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="displace" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <path
          className="voltage line-1"
          d="m216.3 51.2c-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 6.8-7.3 6.8-3.7 0-3.7-4.6-7.3-4.6-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-0.9-7.3-0.9-3.7 0-3.7-2.7-7.3-2.7-3.7 0-3.7 7.8-7.3 7.8-3.7 0-3.7-4.9-7.3-4.9-3.7 0-3.7-7.8-7.3-7.8-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 3.1-7.3 3.1-3.7 0-3.7 10.9-7.3 10.9-3.7 0-3.7-12.5-7.3-12.5-3.7 0-3.7 4.6-7.3 4.6-3.7 0-3.7 4.5-7.3 4.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-10-7.3-10-3.7 0-3.7-0.4-7.3-0.4-3.7 0-3.7 2.3-7.3 2.3-3.7 0-3.7 7.1-7.3 7.1-3.7 0-3.7-11.2-7.3-11.2-3.7 0-3.7 3.5-7.3 3.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-2.9-7.3-2.9-3.7 0-3.7 8.4-7.3 8.4-3.7 0-3.7-14.6-7.3-14.6-3.7 0-3.7 5.8-7.3 5.8-2.2 0-3.8-0.4-5.5-1.5-1.8-1.1-1.8-2.9-2.9-4.8-1-1.8 1.9-2.7 1.9-4.8 0-3.4-2.1-3.4-2.1-6.8s-9.9-3.4-9.9-6.8 8-3.4 8-6.8c0-2.2 2.1-2.4 3.1-4.2 1.1-1.8 0.2-3.9 2-5 1.8-1 3.1-7.9 5.3-7.9 3.7 0 3.7 0.9 7.3 0.9 3.7 0 3.7 6.7 7.3 6.7 3.7 0 3.7-1.8 7.3-1.8 3.7 0 3.7-0.6 7.3-0.6 3.7 0 3.7-7.8 7.3-7.8h7.3c3.7 0 3.7 4.7 7.3 4.7 3.7 0 3.7-1.1 7.3-1.1 3.7 0 3.7 11.6 7.3 11.6 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-12.9 7.3-12.9 3.7 0 3.7 10.9 7.3 10.9 3.7 0 3.7 1.3 7.3 1.3 3.7 0 3.7-8.7 7.3-8.7 3.7 0 3.7 11.5 7.3 11.5 3.7 0 3.7-1.4 7.3-1.4 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-5.8 7.3-5.8 3.7 0 3.7-1.3 7.3-1.3 3.7 0 3.7 6.6 7.3 6.6s3.7-9.3 7.3-9.3c3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7 8.5 7.3 8.5 3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7-1.5 7.3-1.5 3.7 0 3.7 1.6 7.3 1.6s3.7-5.1 7.3-5.1c2.2 0 0.6 9.6 2.4 10.7s4.1-2 5.1-0.1c1 1.8 10.3 2.2 10.3 4.3 0 3.4-10.7 3.4-10.7 6.8s1.2 3.4 1.2 6.8 1.9 3.4 1.9 6.8c0 2.2 7.2 7.7 6.2 9.5-1.1 1.8-12.3-6.5-14.1-5.5-1.7 0.9-0.1 6.2-2.2 6.2z"
          fill="transparent"
          stroke="#fff"
        />
        <path
          className="voltage line-2"
          d="m216.3 52.1c-3 0-3-0.5-6-0.5s-3 3-6 3-3-2-6-2-3 1.6-6 1.6-3-0.4-6-0.4-3-1.2-6-1.2-3 3.4-6 3.4-3-2.2-6-2.2-3-3.4-6-3.4-3-0.5-6-0.5-3 1.4-6 1.4-3 4.8-6 4.8-3-5.5-6-5.5-3 2-6 2-3 2-6 2-3 1.6-6 1.6-3-4.4-6-4.4-3-0.2-6-0.2-3 1-6 1-3 3.1-6 3.1-3-4.9-6-4.9-3 1.5-6 1.5-3 1.6-6 1.6-3-1.3-6-1.3-3 3.7-6 3.7-3-6.4-6-6.4-3 2.5-6 2.5h-6c-3 0-3-0.6-6-0.6s-3-1.4-6-1.4-3 0.9-6 0.9-3 4.3-6 4.3-3-3.5-6-3.5c-2.2 0-3.4-1.3-5.2-2.3-1.8-1.1-3.6-1.5-4.6-3.3s-4.4-3.5-4.4-5.7c0-3.4 0.4-3.4 0.4-6.8s2.9-3.4 2.9-6.8-0.8-3.4-0.8-6.8c0-2.2 0.3-4.2 1.3-5.9 1.1-1.8 0.8-6.2 2.6-7.3 1.8-1 5.5-2 7.7-2 3 0 3 2 6 2s3-0.5 6-0.5 3 5.1 6 5.1 3-1.1 6-1.1 3-5.6 6-5.6 3 4.8 6 4.8 3 0.6 6 0.6 3-3.8 6-3.8 3 5.1 6 5.1 3-0.6 6-0.6 3-1.2 6-1.2 3-2.6 6-2.6 3-0.6 6-0.6 3 2.9 6 2.9 3-4.1 6-4.1 3 0.1 6 0.1 3 3.7 6 3.7 3 0.1 6 0.1 3-0.6 6-0.6 3 0.7 6 0.7 3-2.2 6-2.2 3 4.4 6 4.4 3-1.7 6-1.7 3-4 6-4 3 4.7 6 4.7 3-0.5 6-0.5 3-0.8 6-0.8 3-3.8 6-3.8 3 6.3 6 6.3 3-4.8 6-4.8 3 1.9 6 1.9 3-1.9 6-1.9 3 1.3 6 1.3c2.2 0 5-0.5 6.7 0.5 1.8 1.1 2.4 4 3.5 5.8 1 1.8 0.3 3.7 0.3 5.9 0 3.4 3.4 3.4 3.4 6.8s-3.3 3.4-3.3 6.8 4 3.4 4 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z"
          fill="transparent"
          stroke="#fff"
        />
      </svg>
      <div className="dots">
        <div className="dot dot-1" />
        <div className="dot dot-2" />
        <div className="dot dot-3" />
        <div className="dot dot-4" />
        <div className="dot dot-5" />
      </div>
    </div>
  );
};

const Button8 = ({ onHandleClick }) => {
  return (
    <button className="glitch" onClick={onHandleClick}>
      STOP
    </button>
  );
};

const Button9 = ({ onHandleClick }) => {
  return (
    <button className="hearts" onClick={onHandleClick}>
      LOVE U
      <div className="star-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={25}
          height={25}
        >
          <path
            fill="#fd1853"
            d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
    c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
    c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
    C475.116,213.899,475.116,136.489,427.313,88.686z"
          />
        </svg>
      </div>
      <div className="star-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={20}
          height={20}
        >
          <path
            fill="#fd1853"
            d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
    c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
    c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
    C475.116,213.899,475.116,136.489,427.313,88.686z"
          />
        </svg>
      </div>
      <div className="star-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={9}
          height={9}
        >
          <path
            fill="#fd1853"
            d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
    c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
    c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
    C475.116,213.899,475.116,136.489,427.313,88.686z"
          />
        </svg>
      </div>
      <div className="star-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={10}
          height={10}
        >
          <path
            fill="#fd1853"
            d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
    c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
    c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
    C475.116,213.899,475.116,136.489,427.313,88.686z"
          />
        </svg>
      </div>
      <div className="star-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={20}
          height={20}
        >
          <path
            fill="#fd1853"
            d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
    c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
    c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
    C475.116,213.899,475.116,136.489,427.313,88.686z"
          />
        </svg>
      </div>
      <div className="star-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={7}
          height={7}
        >
          <path
            fill="#fd1853"
            d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
    c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
    c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
    C475.116,213.899,475.116,136.489,427.313,88.686z"
          />
        </svg>
      </div>
    </button>
  );
};

const Button10 = ({ onHandleClick }) => {
  return (
    <button className="pikachu" onClick={onHandleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        className="pokeball"
      >
        <path
          stroke="#000"
          fill="#fe0505"
          d="m26.425 16.455a10.925 10.925 0 0 1 -10.925 10.925 10.925 10.925 0 0 1 -10.925-10.925 10.925 10.925 0 0 1 10.925-10.925 10.925 10.925 0 0 1 10.925 10.925z"
        />
        <path
          stroke="#000"
          fillRule="evenodd"
          fill="#fff"
          d="m26.245 17.168c-1.024.744-1.984 1.248-3.282 1.757-4.738 1.84-10.565 1.816-15.271-.06-1.13-.455-2.12-.99-3.042-1.626.387 5.753 5.119 10.207 10.885 10.207 6.491-.256 10.32-5.361 10.71-10.278z"
        />
        <path
          transform="translate(0 -1020.362)"
          fillRule="evenodd"
          d="m26.196 1036.339-.508.406c-.94.682-1.83 1.116-3.088 1.61-4.476 1.737-10.09 1.715-14.535-.055h-.004a15.14 15.14 0 0 1 -2.568-1.32c-.02-.014-.166-.133-.354-.263l-.842 1.431c.04.028-.105.372.11.51.89.577 1.867 1.078 2.912 1.499h.002c4.968 1.98 11.005 2.003 16.004.062h.004c1.337-.525 2.43-1.053 3.537-1.856l-.038-.18-.128-.85-.504-.993z"
        />
        <path
          stroke="#000"
          fill="#fff"
          d="m17.976 19.69a2.4 2.4 0 0 1 -2.4 2.4 2.4 2.4 0 0 1 -2.4-2.4 2.4 2.4 0 0 1 2.4-2.4 2.4 2.4 0 0 1 2.4 2.4z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={250}
        viewBox="0 0 451.103 424.198"
        height={100}
        className="pika"
      >
        <path
          strokeWidth="2.808"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="#000"
          fill="#fff22d"
          d="m160.524 320.079-46.872-17.64 15.048-20.088s-51.912-16.704-64.439-21.744l42.695-87.12-90.432-8.352-15.12-77.112 180.936 43.56-61.991 108.936 48.6 21.744-26.856 33.48 30.169 20.16z"
        />
        <path
          fill="#e8d031"
          d="m114.588 302.223 15.048-20.16-.792-.216-.072-.072-.216-.072-.216-.072-.36-.072-.36-.144-.504-.144-.504-.144-.576-.216-.576-.216-.72-.216-.72-.216-.792-.288-.864-.288-.864-.288-.936-.288-1.008-.288-1.007-.36-1.009-.36-1.152-.36-1.08-.36-1.152-.36-1.224-.36-1.224-.432-1.224-.36-1.224-.432-1.295-.432-1.297-.432-1.367-.432-1.369-.504-2.376-.792-.288-.72 16.056 3.888-6.768-12.672 17.064 2.376-3.816-12.312 16.848 5.328-3.312-10.008 30.672 13.752-26.711 33.408 29.735 19.8-10.512 3.744z"
        />
        <path
          strokeWidth="2.808"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="#000"
          fill="#e8d031"
          d="m191.484 383.583s-21.672 21.96-25.632 34.561c-3.96 12.672 37.944-2.16 64.584-25.128 26.712-23.113-38.952-9.433-38.952-9.433zm144.288 0s21.672 21.96 25.631 34.561c3.961 12.672-37.872-2.16-64.583-25.128-26.712-23.113 38.952-9.433 38.952-9.433z"
        />
        <path
          strokeWidth="2.808"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="#000"
          fill="#fff22d"
          d="m179.316 198.399c-12.6-13.176-20.88-36.144-18.072-50.832 3.096-15.912 9.288-31.608 10.368-40.248 1.008-8.64 6.984-26.928 7.272-26.784-16.776-5.4-37.513-15.264-51.48-28.512-13.968-13.176-46.008-42.408-42.696-48.888 3.456-6.696 47.16 7.704 69.048 14.76 21.961 7.056 47.664 28.512 47.448 28.944.145.36 35.424-16.992 68.256-16.272 32.761.648 52.776 9 63.576 15.912-.216-.072 25.489-21.528 47.375-28.584 21.889-7.056 65.592-21.456 69.049-14.76 3.312 6.48-28.729 35.712-42.695 48.888-13.969 13.248-32.113 23.112-48.889 28.512.287-.144 6.119 11.088 7.92 22.32 1.729 11.232 5.039 27.72 9.072 43.416 3.24 12.744-2.305 38.952-16.057 53.136-1.799 2.52 29.305 72 24.984 110.448-4.393 38.448-13.32 66.024-37.225 78.12-23.616 11.952-123.624 5.04-148.607-1.512-22.681-5.976-41.041-32.904-49.681-73.512s31.61-112.968 31.034-114.552z"
        />
        <path d="m329.58 95.655c9.937 0 18 7.2 18 16.056s-8.063 16.056-18 16.056c-9.863 0-18-7.2-18-16.056s8.137-16.056 18-16.056zm-120.24 1.152c9.864 0 18 7.2 18 16.056 0 8.784-8.136 15.984-18 15.984-9.936 0-18-7.2-18-15.984 0-8.856 8.064-16.056 18-16.056zm50.832 35.856 4.824 5.04c.576.576 1.225.576 1.872-.072l5.472-5.112c.36-.576.145-.864-.504-.792h-10.8c-1.08.072-1.224.432-.864.936z" />
        <g stroke="#000">
          <path
            strokeWidth="2.808"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="#905744"
            d="m247.644 161.319c13.824-2.664 18.72-7.488 18.72-7.488s3.672 4.536 15.696 7.344c-15.192 54.432-34.416 1.44-34.416.144z"
          />
          <path
            strokeWidth=".216"
            d="m408.995 50.007c14.832-13.968 43.633-40.68 40.465-46.872-1.943-3.888-17.352-.72-34.271 4.032-.504 2.664 3.168 12.528-1.369 26.712-1.584 5.04-3.313 10.656-4.825 16.128zm-284.183-41.184c-19.008-5.544-37.872-10.008-40.104-5.688-3.312 6.48 28.729 35.712 42.696 48.888 2.304 2.16 4.824 4.32 7.632 6.48-1.8-8.784-5.184-20.232-8.208-29.664-2.664-8.424-2.52-15.264-2.016-20.016z"
          />
          <path
            strokeWidth="2.808"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="#cc2229"
            d="m347.075 146.271c8.785 0 15.984 7.488 15.984 16.632s-7.199 16.632-15.984 16.632c-8.784 0-15.984-7.488-15.984-16.632.001-9.144 7.201-16.632 15.984-16.632zm-158.471-5.04c8.784 0 15.983 7.488 15.983 16.632s-7.199 16.56-15.983 16.56-15.984-7.416-15.984-16.56 7.2-16.632 15.984-16.632zm91.368 26.712c-11.305 32.76-24.192 12.384-29.592.36 3.888-3.816 9.144-6.192 14.976-6.192 5.544 0 10.728 2.232 14.616 5.832z"
          />
          <path
            strokeWidth="2.808"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
            d="m266.364 153.615c7.056 6.264 25.776 13.536 32.112.792m-32.112-.792c-7.2 5.76-25.848 13.536-32.184.792"
          />
        </g>
        <path
          fill="#fff"
          d="m267.084 132.591c1.656 0 2.952.432 2.952.937 0 .576-1.296 1.008-2.952 1.008-1.584 0-2.88-.432-2.88-1.008 0-.505 1.296-.937 2.88-.937z"
        />
        <path
          strokeWidth="3.168"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="#000"
          fill="none"
          d="m227.052 231.015s7.632 5.112 14.832 32.112c4.392 16.632 11.304 20.376 13.248 24.696 1.943 4.392 4.319 10.584-1.368 7.2-5.688-3.384-7.416-3.024-5.185 1.584 2.305 4.608 1.08 7.488-7.056 1.512-6.048-4.392-5.976.504-4.248 3.024s1.656 9.504-5.472 3.312c-7.057-6.12-9.217-3.6-7.128.792 2.088 4.32 3.743 9.792-7.057 2.232-3.239-2.232-8.063-11.952-12.815-17.208-11.232-12.456-24.265-24.48-28.801-42.336"
        />
        <path
          strokeWidth="3.456"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="#000"
          fill="none"
          d="m308.34 242.679s-6.407 5.976-7.703 31.176c-.864 15.552-6.84 20.16-7.849 24.336-1.008 4.248-2.016 10.152 2.88 6.12 4.824-4.032 6.553-4.104 5.328.432-1.224 4.464.576 6.768 7.272-.072 4.968-4.968 5.903-.648 4.752 1.872-1.152 2.592.432 8.712 6.048 1.944s8.28-4.968 7.128-.72-1.584 9.36 7.416.72c2.664-2.592 5.4-12.096 8.928-17.64 8.352-13.176 18.576-26.208 19.225-42.912"
        />
        <path
          strokeWidth=".936"
          stroke="#000"
          fill="none"
          d="m166.068 421.383 12.096-13.32m183.025 13.32-12.098-13.32m-179.279 14.256 15.84-10.728m171.865 10.728-15.84-10.728"
        />
        <path
          fill="#e8d031"
          d="m405.181 52.815c-13.752 12.528-31.248 21.888-47.449 27.072h-.072c-4.104-7.848-8.424-18.144-11.736-19.224 26.064 3.528 45.864-1.656 59.257-7.848zm-269.569 5.4c14.976 10.512 29.016 17.28 43.776 21.672 4.176-7.848 8.063-14.976 11.376-19.008-26.064 3.528-41.76 3.528-55.152-2.664zm106.273 160.776c1.943 2.304 33.983 9.36 52.344-.144-27.505 38.16-53.713.432-52.344.144z"
        />
        <path
          fill="#fff"
          d="m335.7 99.471c2.88 0 5.184 2.304 5.184 5.04 0 2.808-2.304 5.04-5.184 5.04-2.808 0-5.112-2.232-5.112-5.04 0-2.736 2.304-5.04 5.112-5.04zm-120.24 1.152c2.809 0 5.112 2.232 5.112 5.04s-2.304 5.04-5.112 5.04c-2.88 0-5.184-2.232-5.184-5.04s2.304-5.04 5.184-5.04z"
        />
        <path
          fill="#e8d031"
          d="m175.788 249.303c-1.439 8.424-2.304 15.336 10.513 35.784 12.743 20.448 28.728 21.384 28.728 21.384s-6.768-10.368-9.504-14.04-9.792-10.224-14.472-15.984c-2.953-3.168-11.593-13.968-15.265-27.144zm183.241 128.952c-3.6 3.528-7.705 6.552-12.457 8.928-23.616 11.952-123.624 4.968-148.607-1.584-12.528-3.24-23.688-12.96-32.688-27.792 13.104 8.064 32.184 18.576 42.768 19.656 17.353 1.656 38.017-5.112 52.776-4.68 14.76.432 34.561 8.856 56.88 8.856 14.327 0 28.294-.504 41.328-3.384zm1.439-118.152s-2.305 5.544-4.32 9.864c-1.943 4.32-6.48 11.304-8.279 13.68-1.801 2.304-4.824 6.984-5.904 9.144-2.016 4.104-3.528 8.784-5.904 12.6 0 0 4.104-3.744 6.48-6.984 2.305-3.24 8.568-9.936 12.168-15.84 3.599-5.904 5.759-22.464 5.759-22.464z"
        />
      </svg>
      <span className="go">Go!</span>
      <span className="pword">pika</span>
      <span className="pword2">pika</span>
    </button>
  );
};

const Button11 = ({ onHandleClick }) => {
  return (
    <button className="batman" onClick={onHandleClick}>
      <span>BATMAN?</span>
    </button>
  );
};

const Button12 = ({ onHandleClick }) => {
  return (
    <button class="crypto" onClick={onHandleClick}>
      <span className="box">
        CRYPTO?
        <div className="coin-1">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>bitcoin</title>
            <path d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z" />
          </svg>
        </div>
        <div className="coin-2">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>bitcoin</title>
            <path d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z" />
          </svg>
        </div>
        <div className="coin-3">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>bitcoin</title>
            <path d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z" />
          </svg>
        </div>
        <div className="coin-4">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>bitcoin</title>
            <path d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z" />
          </svg>
        </div>
        <div className="coin-5">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>bitcoin</title>
            <path d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z" />
          </svg>
        </div>
        <div className="coin-6">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>bitcoin</title>
            <path d="M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z" />
          </svg>
        </div>
      </span>
    </button>
  );
};

const Button13 = () => {
  return (
    <button className="button_01">
      <a>GO AWAY</a>
      <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 1024 1024"
        className="tree"
      >
        <path
          fill="#593B39"
          d="M592 267.2h-126.4c-9.28 0-16.64 7.36-16.64 16.64v546.56c0 9.28 7.36 16.64 16.64 16.64h126.4c9.28 0 16.64-7.36 16.64-16.64V284.16c0-9.28-7.36-16.96-16.64-16.96z"
        />
        <path
          fill="#FF944C"
          d="M921.408 896H140.352a466.4 466.4 0 0 1 390.528-210.88c163.392 0 307.136 83.84 390.528 210.88z"
        />
        <path
          fill="#96C34A"
          d="M509.44 271.68H193.6c-17.28 0-31.36-15.68-27.84-32.32 15.36-81.28 87.36-143.68 172.8-143.68 86.496 0 159.136 63.552 173.44 146.144 14.336-82.592 86.976-146.144 173.44-146.144 85.44 0 157.44 62.4 172.8 143.68 3.2 16.96-10.56 32.32-27.84 32.32H509.44z"
        />
        <path
          fill="#608842"
          d="M504 291.2l-98.24 98.24-98.24 98.24c-11.84 11.52-31.68 10.56-40.96-3.2-44.8-65.28-38.08-156.48 19.84-214.4 57.92-57.92 148.8-64.64 214.4-19.84 6.72 4.544 10.432 11.712 11.04 19.2a24.48 24.48 0 0 1 10.4-17.28c63.68-43.52 152-36.8 208.32 19.2 56.32 56.32 62.72 144.64 19.2 208.32-8.96 13.12-28.48 14.4-39.68 2.88l-95.36-95.36-95.36-95.36a26.656 26.656 0 0 1-7.648-16.576 27.296 27.296 0 0 1-7.712 15.936z"
        />
        <path
          fill="#8B5C56"
          d="M528 351.68a63.68 63.68 0 1 1-127.36 0 63.68 63.68 0 0 1 127.36 0zM655.68 416a64 64 0 1 1-128 0 64 64 0 0 1 128 0z"
        />
        <path
          fill="#00A6ED"
          d="M960.64 884.16c-0.32-16.32-16.32-33.92-32.64-34.24-32.64-0.32-46.4-17.92-84.16-17.92-55.04 0-55.04 32-110.08 32s-55.04-32-110.4-32c-55.04 0-55.04 32-110.4 32-55.04 0-55.04-32-110.4-32-55.04 0-55.04 32-110.08 32s-55.04-32-110.4-32c-44.16 0-62.08 20.16-92.48 28.16-15.04 4.16-25.6 17.92-25.6 33.28 0 19.2 15.36 34.56 34.56 34.56H931.2c16 0 29.12-12.8 29.44-28.8 0.32-5.12 0.32-10.24 0-15.04z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 690"
        className="wave"
      >
        <defs>
          <linearGradient y2="50%" x2="100%" y1="50%" x1="0%" id="gradient">
            <stop stopColor="#8ed1fc" offset="5%" />
            <stop stopColor="#0693e3" offset="95%" />
          </linearGradient>
        </defs>
        <path
          transform="rotate(-180 720 350)"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          fillOpacity="0.53"
          fill="url(#gradient)"
          strokeWidth={0}
          stroke="none"
          d="M 0,700 C 0,700 0,233 0,233 C 59.66609412572997,227.46856750257643 119.33218825145994,221.93713500515287 180,209 C 240.66781174854006,196.06286499484713 302.33734111989014,175.720027481965 378,194 C 453.66265888010986,212.279972518035 543.3184472689796,269.1827550669872 620,288 C 696.6815527310204,306.8172449330128 760.388869804191,287.54895225008585 837,272 C 913.611130195809,256.45104774991415 1003.1260735142562,244.62143593266921 1061,257 C 1118.8739264857438,269.3785640673308 1145.106836138784,305.96530401923735 1203,306 C 1260.893163861216,306.03469598076265 1350.4465819306079,269.5173479903813 1440,233 C 1440,233 1440,700 1440,700 Z"
        ></path>
        <defs>
          <linearGradient y2="50%" x2="100%" y1="50%" x1="0%" id="gradient">
            <stop stopColor="#8ed1fc" offset="5%" />
            <stop stopColor="#0693e3" offset="95%" />
          </linearGradient>
        </defs>
        <path
          transform="rotate(-180 720 350)"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
          fillOpacity={1}
          fill="url(#gradient)"
          strokeWidth={0}
          stroke="none"
          d="M 0,700 C 0,700 0,466 0,466 C 85.70594297492269,460.8663689453796 171.41188594984538,455.7327378907591 229,478 C 286.5881140501546,500.2672621092409 316.0583991755411,549.935417382343 387,551 C 457.9416008244589,552.064582617657 570.3545173479904,504.52559257986945 655,479 C 739.6454826520096,453.47440742013055 796.5235314324974,449.9622122981794 858,449 C 919.4764685675026,448.0377877018206 985.55135692202,449.62555822741325 1045,437 C 1104.44864307798,424.37444177258675 1157.271040879423,397.5355547921676 1222,400 C 1286.728959120577,402.4644452078324 1363.3644795602886,434.23222260391617 1440,466 C 1440,466 1440,700 1440,700 Z"
        ></path>
      </svg>
    </button>
  );
};

export default App;
