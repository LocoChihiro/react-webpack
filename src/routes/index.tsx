import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Loadable from "react-loadable";
// import Home from "@/pages/Home";
// const Login = React.lazy(() => import("@/pages/Login/Login"));
// import NormalLoginForm from '@/pages/Login/Login'

const Loading = () => <div>Loading...</div>;
const Home = Loadable({
  loader: () => import("@pages/Home/Home"),
  loading: Loading
});

const Login = Loadable({
  loader: () => import("@/pages/Login/Login"),
  loading: Loading
});

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login/">Login</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/login/" component={Login} />
        </div>
      </Router>
    );
  }
}


// function AppRouter() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about/">About</Link>
//             </li>
//             <li>
//               <Link to="/users/">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         <Route path="/" exact component={Home} />
//         <Route path="/about/" component={About} />
//         <Route path="/users/" component={Users} />
//       </div>
//     </Router>
//   );
// }

export default AppRouter;
