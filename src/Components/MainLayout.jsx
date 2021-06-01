import React from "react";
import { Content } from "./index";

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <main className="cr-app ">
        <Content fluid>
          <div className="cr-app-body">{children}</div>
        </Content>
      </main>
    );
  }
}

export default MainLayout;
