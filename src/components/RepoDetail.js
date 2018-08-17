import React from "react";
import PropTypes from "prop-types";

import './RepoDetail.scss';

const RepoDetail = props => {
  const githubRepo = props.githubRepo;
  return (
    <div className="repoDetailContainer">
      <h2>
        This is details of the repo.
      </h2>
      <div className="repoInfo">
        <div className="avatarContainer">
          <img src={githubRepo.repoOwner.ownerAvatarUrl} alt="ownerAvatar" />
        </div>
        <div className="repoInfoContainer">
          <h2>{githubRepo.repoName}</h2>
          <p>{githubRepo.repoOwner.ownerLogin}</p>
          <p className="repoDesc">{'Repo Description: ' + (githubRepo.repoDesc || 'No Description.')}</p>
        </div>
      </div>
    </div>
  );
}

RepoDetail.propTypes = {
  RepoDetail: PropTypes.arrayOf(
    PropTypes.shape({
      repoId: PropTypes.number.isRequired,
      repoName: PropTypes.string.isRequired,
      repoOwner: PropTypes.shape({
        ownerId: PropTypes.number.isRequired,
        ownerLogin: PropTypes.string.isRequired,
        ownerAvatarUrl: PropTypes.string.isRequired
      }).isRequired,
      repoUrl: PropTypes.string.isRequired,
      repoDesc: PropTypes.string,
    }))
}

export default RepoDetail;