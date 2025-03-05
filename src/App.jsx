import { useState } from "react";
import Button from "./components/Button";
import background from "./assets/bg.jpg";
import "./index.css";

function App() {
  const [score, setScore] = useState(0);
  const [over, setOver] = useState(0);
  const [wicket, setWicket] = useState(10);
  const [balls, setBalls] = useState(0);

  return (
    <>
      <div
        className="flex justify-center items-center h-screen overflow-hidden text-white"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col h-[80%] lg:w-[60%] md:w-[70%] gap-20 w-[90%] items-center justify-between text-[#fff]">
          <div className="lg:w-[60%] w-[80%] pt-10 flex flex-col bg-[#121212] rounded-3xl ss-font justify-between ">
            <div className="flex justify-center items-end lg:text-9xl text-7xl lg:p-10 ss-font drop-shadow-[0_0_10px_#786cff]">
              {score}-{10 - wicket}
            </div>
            <div className="flex lg:flex-row flex-col justify-between p-5 text-2xl px-10 drop-shadow-[0_0_10px_#786cff]">
              <div>
                Over: {over}.{balls}
              </div>
              <div>Remaining Wicket: {wicket}</div>
            </div>
          </div>
          <div className="flex flex-wrap w-full p-2 lg:gap-10 gap-5 justify-center items-center">
            <Button
              label="Single"
              run={1}
              score={score}
              setScore={setScore}
              over={over}
              setOver={setOver}
              wicket={wicket}
              setWicket={setWicket}
              balls={balls}
              setBalls={setBalls}
            />
            <Button
              label="Double"
              run={2}
              score={score}
              setScore={setScore}
              over={over}
              setOver={setOver}
              wicket={wicket}
              setWicket={setWicket}
              balls={balls}
              setBalls={setBalls}
            />
            <Button
              label="Three"
              run={3}
              score={score}
              setScore={setScore}
              over={over}
              setOver={setOver}
              wicket={wicket}
              setWicket={setWicket}
              balls={balls}
              setBalls={setBalls}
            />
            <Button
              label="Boundary"
              run={4}
              score={score}
              setScore={setScore}
              over={over}
              setOver={setOver}
              wicket={wicket}
              setWicket={setWicket}
              balls={balls}
              setBalls={setBalls}
            />
            <Button
              label="Five"
              run={5}
              score={score}
              setScore={setScore}
              over={over}
              setOver={setOver}
              wicket={wicket}
              setWicket={setWicket}
              balls={balls}
              setBalls={setBalls}
            />
            <Button
              label="Sixer"
              run={6}
              score={score}
              setScore={setScore}
              over={over}
              setOver={setOver}
              wicket={wicket}
              setWicket={setWicket}
              balls={balls}
              setBalls={setBalls}
            />
            <Button
              label="Wide"
              run={1}
              score={score}
              isBall={0}
              setScore={setScore}
              over={over}
              setOver={setOver}
              wicket={wicket}
              setWicket={setWicket}
              balls={balls}
              setBalls={setBalls}
            />
            <Button
              label="No-Ball"
              run={1}
              score={score}
              isBall={-1}
              setScore={setScore}
              over={over}
              setOver={setOver}
              wicket={wicket}
              setWicket={setWicket}
              balls={balls}
              setBalls={setBalls}
            />
            <Button
              label="Out"
              score={score}
              isOut={1}
              setScore={setScore}
              over={over}
              setOver={setOver}
              wicket={wicket}
              setWicket={setWicket}
              balls={balls}
              setBalls={setBalls}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
