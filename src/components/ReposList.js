import React, { Component } from "react";
import { Route } from 'react-router-dom';
import axios from 'axios';

import './ReposList.scss';
import RepoDetail from "./RepoDetail";

class ReposList extends Component {
  state = {
    repoSelected: null,
    githubRepos: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/repositories")
      .then(response => {
        const repos = response.data;

        // create an array of contacts only with relevant data
        const newRepos = repos.map(repo => {
          return {
            repoId: repo.id,
            repoName: repo.name,
            repoDesc: repo.description,
            repoUrl: repo.html_url,
            repoOwner: {
              ownerId: repo.owner.id,
              ownerLogin: repo.owner.login,
              ownerAvatarUrl: repo.owner.avatar_url
            }
          };
        });

        // create a new "State" object without mutating the original State object. 
        const newState = Object.assign(
          {},
          this.state, {
            githubRepos: newRepos
          });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  repoSelectedHandler = (id) => {
    this.props.history.push('/list/' + id);
    var repoResult = this.state.githubRepos.find(repo => {
      return repo.repoId === id
    })
    this.setState({ repoSelected: repoResult });
  }

  render() {
    const listItems = this.state.githubRepos.map(
      repo => {
        return (
          <tr key={repo.repoId + '-' + repo.repoName}>
            <td className="listRepoNameLink" onClick={() => this.repoSelectedHandler(repo.repoId)}>
              {repo.repoName}
            </td>
            <td className="listRepoUrl">
              {/* open repo URL in new tab */}
              <a href={repo.repoUrl} target="_blank">
                {repo.repoUrl}
              </a>
            </td>
          </tr>
        );
      }
    );

    return (
      <div>
        {this.state.repoSelected &&
          <Route path={this.props.match.url + '/:id'} exact render={() => <RepoDetail githubRepo={this.state.repoSelected} />} />}
        <div className="reposListContainer">
          <h3>
            This is Repos List
        </h3>
          <div className="tableContainer">
            <table>
              <tbody>
                <tr>
                  <th>Repo Name</th>
                  <th>Repo URL</th>
                </tr>
                {listItems}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    );
  }
}

export default ReposList;
