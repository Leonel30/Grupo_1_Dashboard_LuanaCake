import React, { Component } from "react";
import UserList from "./UserList"


class UsersDb extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <UserList/>
        </div>
      </>
    );
  }
}
export default UsersDb ;
