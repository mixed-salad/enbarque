import React from 'react';
import { Component } from 'react';
import { loadUser } from '../services/user';
import './../Account.scss';
import { Divider, Avatar } from '@material-ui/core';

class Account extends Component {
  state = {
    user: null
  };

  async componentDidMount() {
    const user = await loadUser(this.props.match.params.id);
    console.log(user);
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <main>
        {user && (
          <>
            <div>
              <div className="align">
                <h1 className="margin">{user.firstName}'s profile </h1>
                <Avatar src={user.avatar}></Avatar>
              </div>

              <Divider />

              <div className="row">
                <div className="column">
                  {' '}
                  <p>
                    <br />
                    <span className="text">Full name: </span> {user.firstName}{' '}
                    {user.lastName}
                  </p>
                  <p>
                    <span className="text">Email: </span> {user.email}
                  </p>
                  <p>
                    <span className="text">Organization:</span>{' '}
                    {user.organization.name}
                  </p>
                </div>
                <div className="column">
                  {' '}
                  <p>
                    {' '}
                    <br />
                    <span className="text">Position: </span>{' '}
                    {user.position.name}
                  </p>
                  <p>
                    <span className="text">Level: </span> {user.level.name}
                  </p>
                  <p>
                    {' '}
                    <span className="text">Role: </span> {user.role.name}
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    );
  }
}

export default Account;
