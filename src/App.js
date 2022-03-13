import Menu from "./sharedComponents/Menu";
import Game from "./sharedComponents/TicTacToe/Game";
import MyButton from "./sharedComponents/MyButton";

function App() {
  return (
    <div>
      <Menu menuName="Menu SDA" menuItems={["Odkaz 1", "Odkaz 2", "Odkaz 3"]} />
      <Game gameName={"Piškvorky"} NumberOfPlayers={4} />
      <MyButton text={"Tlačitko 1"} btnNumber={" 1 "} counter={0} />
      <MyButton text={"Tlačitko 2"}btnNumber={" 2 "} counter={0}/>
      <MyButton text={"Tlačitko 3"}btnNumber={" 3 "} counter={0}/>
    </div>
  );
}

export default App;
