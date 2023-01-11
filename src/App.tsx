import { createGlobalStyle } from "styled-components";
import ToDoList from "./components/ToDoList";


const GlobalStyle = createGlobalStyle`
`;

function App() {
  return (<>
      <GlobalStyle />
      <ToDoList />
  </>);
}

/*
  App은 두 변수들을 관장한다. App (isDark, modifierFn)
  두 변수들은 Coins와 Chart에 각각 전달이 되는데, 전달이 되기까지 여러 컴포넌트들을 거쳐가야 한다. (계층구조)
  Modifer(toggleDark) : App -> Router -> Coins
  isDark : App -> Router -> Coin -> Chart

  이런 현상을 지양하기 위해서 필요한 것이 Global State이다. 
  Global State는 Application이 전반적으로 인지해야하는 상태를 적용하기 위해 사용된다. 
  어디에서든지 확인할 수 있는 변수!**
  Application에서 분리된 공간에서 관리되는 변수들이다. 

  ==> RECOIL
*/

export default App;
