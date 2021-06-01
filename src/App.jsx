import React from "react";
import "./Styles/projectTitle.scss";
import "react-animated-slider/build/horizontal.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Spinner } from "reactstrap";
import { MainLayout } from "./Components";

const DemoPage = React.lazy(() => import("./Pages/DemoPage"));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split("/").pop()}`;
};

function App() {
  return (
    <BrowserRouter basename={getBasename()}>
      <Switch>
        <React.Fragment>
          <MainLayout>
            <React.Suspense
              fallback={
                <div className="spinnerContainer">
                  <Spinner color="secondary" />
                </div>
              }
            >
              <Route exact path="/" component={DemoPage} />
            </React.Suspense>
          </MainLayout>
        </React.Fragment>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
