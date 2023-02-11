import Image from "next/image";
import React, { useState } from "react";

const index = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleClick = (color) => {
    setBackgroundColor(color);
  };
  return (
    <>
      <div className="select-all">
        <header className="header">
          <h2>Demo Online Test</h2>
        </header>

        <div className="container">
          <section className="left">
            <section className="subject">
              <button href="#m__">All Sections</button>
              <button href="#m__">Physics</button>
              <button href="#m__">Chemistry</button>
              <button href="#m__">Maths</button>
            </section>

            <hr />

            <div className="question">
              <div className="Serial">
                <div className="q-no">Q No.:1</div>
                <div className="view">
                  <select name="" id="m_">
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </div>
              </div>
              <div className="Question-content">
                <div className="question-instr">
                  <h4>Question Instruction</h4>
                  <p>
                    Passage You want to hit a small box on the floor with a
                    marble fired from a spring-loaded gun that is mounted on a
                    table. The target box is a distance R horizontally from the
                    edge of the table; see the figure to the right. You compress
                    the spring a distance d, but the center of the marble falls
                    short by a distance r of the center of the box How far
                    should you compress the spring to score a direct hit
                    (neglect friction)?
                  </p>
                </div>
                <div className="question-item">
                  <h4>Question</h4>
                  <p>
                    A block of mass m is projected with velocty V<sub>0</sub> as
                    showm in the fig. The distance between free ends is{" "}
                    <span>l</span>
                    <sub>0</sub>. Maximum displacement of the block during the
                    motion.
                  </p>
                  <div className="img">
                    <Image src="/que.png" width="350" height="200" />
                  </div>
                  <div className="option">
                    <input type="radio" name="option" id="m_" />
                    (A). <span>l</span> + v<sub>0</sub>
                    <u></u>
                    <u></u>
                    <u></u>
                    <u></u>m<u></u>
                    <u></u>
                    <u></u>k<u></u>
                    <u></u>2<u></u>
                    <u></u>
                    <u></u>
                    <u></u>
                    <u></u>
                  </div>
                  <div className="option">
                    <input type="radio" name="option" id="m_" />
                    (B). <span>l</span> + 2v<sub>0</sub>
                    <u></u>
                    <u></u>
                    <u></u>
                    <u></u>m<u></u>
                    <u></u>
                    <u></u>k<u></u>
                    <u></u>1<u></u>
                    <u></u>+<u></u>
                    <u></u>k<u></u>
                    <u></u>2<u></u>
                    <u></u>
                    <u></u>
                    <u></u>
                    <u></u>
                  </div>
                  <div className="option">
                    <input type="radio" name="option" id="m_" />
                    (C). <span>l</span> + 2v<sub>0</sub>
                    <u></u>
                    <u></u>
                    <u></u>
                    <u></u>
                    <u></u>m<u></u>
                    <u></u>(<u></u>
                    <u></u>k<u></u>
                    <u></u>1<u></u>
                    <u></u>+<u></u>
                    <u></u>k<u></u>
                    <u></u>2<u></u>
                    <u></u>)<u></u>
                    <u></u>
                    <u></u>
                    <u></u>k<u></u>
                    <u></u>1<u></u>
                    <u></u>k<u></u>
                    <u></u>2<u></u>
                    <u></u>
                    <u></u>
                    <u></u>
                    <u></u>
                  </div>
                  <div className="option">
                    <input type="radio" name="option" id="m_" />
                    (D). <span>l</span>
                    <sub>0</sub> + v<sub>0</sub>
                    <u></u>
                    <u></u>
                    <u></u>
                    <u></u>
                    <u></u>m<u></u>
                    <u></u>(<u></u>
                    <u></u>k<u></u>
                    <u></u>1<u></u>
                    <u></u>+<u></u>
                    <u></u>k<u></u>
                    <u></u>2<u></u>
                    <u></u>)<u></u>
                    <u></u>
                    <u></u>
                    <u></u>k<u></u>
                    <u></u>1<u></u>
                    <u></u>k<u></u>
                    <u></u>2<u></u>
                    <u></u>
                    <u></u>
                    <u></u>
                    <u></u>
                  </div>
                </div>
              </div>
            </div>

            <div className="btn">
              <button>Clear Response</button>
              <button className="review" onClick={() => handleClick("yellow")}>
                Review
              </button>
              <button className="dump" onClick={() => handleClick("lightgray")}>
                Dump
              </button>
              <button>Previous</button>
              <button className="next" onClick={() => handleClick("green")}>
                next
              </button>
            </div>
          </section>

          <section className="right">
            <div className="profile">
              <img
                src="https://ci4.googleusercontent.com/proxy/triISYtyyM8TPL0SPZGWcI6EX9HcozO3ighgS9QrIXGum6I-RzwxWXG7K82gP1h_jxJx6JDWNAqT7a5lAIrWIten7UTBk_cR8Z0Oa3vfvC_plXhg9G6bHMT598yanynF7bVPxAhrieZRaMZoA_CZOzaBwhsgs3Zp64ItOoJAnMRlOIPHaSGPx7n-B2S5EBJloe4qyROXMIA3Hu52MUQusWDFXCaACw=s0-d-e1-ft#https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&amp;format=jpg&amp;width=863"
                alt="Ashok"
              />
              <div className="person-deatils">
                <p>
                  Time Left: &nbsp;&nbsp;02<span id="m_hours"></span>:39:29
                  <span id="minutes"></span>
                  <span id="seconds"></span>
                </p>
                <p>Ashish Kumar</p>
              </div>
            </div>
            <div className="que-pallete">
              <h5>Question Pallete</h5>
              <div className="num">
                <a
                  className="success"
                  href="#m__"
                  rel="noreferrer"
                  style={{ backgroundColor }}
                >
                  1
                </a>
                <a
                  className="danger"
                  href="#m__"
                  rel="noreferrer"
                  style={{ background: "red" }}
                >
                  2
                </a>
                <a
                  className="success"
                  href="#m__"
                  rel="noreferrer"
                  style={{ background: "green" }}
                >
                  3
                </a>
                <a
                  className="success"
                  href="#m__"
                  rel="noreferrer"
                  style={{ background: "green" }}
                >
                  4
                </a>
                <a
                  className="danger"
                  href="#m__"
                  rel="noreferrer"
                  style={{ background: "red" }}
                >
                  5
                </a>
                <a
                  className="primary"
                  href="#m__"
                  rel="noreferrer"
                  style={{ background: "yellow" }}
                >
                  6
                </a>
                <a
                  className="success"
                  href="#m__"
                  rel="noreferrer"
                  style={{ background: "green" }}
                >
                  7
                </a>
                <a
                  className="prime"
                  href="#m__"
                  rel="noreferrer"
                  style={{ background: "white" }}
                >
                  8
                </a>
                <a
                  className="prime2"
                  href="#m__"
                  rel="noreferrer"
                  style={{ background: "purple" }}
                >
                  9
                </a>
                <a
                  className="prime3"
                  href="#m__"
                  rel="noreferrer"
                  style={{ background: "lightgray" }}
                >
                  10
                </a>
              </div>
            </div>
            <div className="legend">
              <h5>Legend (Click to View)</h5>
              <div className="ans">
                <button className="success" style={{ background: "green" }}>
                  4 Answer
                </button>
                <button className="danger" style={{ background: "red" }}>
                  2 No Answer{" "}
                </button>
                <button className="prime2" style={{ background: "purple" }}>
                  1 Review+Ans{" "}
                </button>
                <button className="primary" style={{ background: "yellow" }}>
                  1 Review-Ans{" "}
                </button>
                <button className="prime3" style={{ background: "lightgray" }}>
                  Dump
                </button>
                <button className="prime" style={{ background: "white" }}>
                  1 No Visit{" "}
                </button>
              </div>
              <div className="all-que">
                <h5>10 All Questions</h5>
                <div className="que-btn">
                  <button>Profile</button>
                  <button>Instr</button>
                  <button>Questions</button>
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer>
          <div className="footer">© Addme</div>
        </footer>
      </div>
    </>
  );
};

export default index;
