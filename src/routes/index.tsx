import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Loadable from "react-loadable";
// import Home from "@/pages/Home";
// const Home = React.lazy(() => import("@/pages/Home"));

const Loading = () => <div>Loading...</div>;
const Home = Loadable({
  loader: () => import("@/pages/Home"),
  loading: Loading
});


class About extends React.Component {
  render () {
    return (<h2>About</h2>)
  }
}

class Users extends React.Component {
  render() {
    return (<h2>Users</h2>)
  }
}

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
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
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
