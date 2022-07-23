import { Routes, Route} from "react-router-dom";
import Navigation from "./component/navigation";
import Friends from "./pages/Friends";
import Home from "./pages/Home";


function App() {
  return (
		<>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/friends' element={<Friends />} />
			</Routes>
		</>
	)
}

export default App;
