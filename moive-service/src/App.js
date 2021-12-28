// react-router-dom을 사용하기 위해서는 몇가지를 import 해야 됨.
// 페이지 이동을 위해 필요함.
// Route는 url의미하며, Route를 찬으면 컴포넌트를 렌더링함.
// Link는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트임.
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      {/* 
         <Switch> : 한번에 하나의 Route만 랜더링 하기 위해서임
      */}
      <Switch>
        {/* user가 home화면으로 갈때 사용할 route 이며,
          path="/" 경로에 있으면 home route를 렌더링 해줌
          :id : react router에게 이 url이 변수를 받을거라고 말해주는 것임
        */}
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
