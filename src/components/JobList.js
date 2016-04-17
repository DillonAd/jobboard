'use strict';

const React = require('react');
const JobListingRow = require('components/JobListingRow');
const sdk = require('server/sdk');

const JobList = React.createClass({
  statics: {
    fetchData(params) {
      return sdk.jobs().allActive();
    }
  },

  render() {
    let jobs = this.props.data || [];

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Current Jobs</h3>
        </div>
        <div className="list-group">
          { jobs.length === 0 ? this._renderNoJobs() : undefined}
          { jobs.map(function (job) {
            return <JobListingRow job={job} />;
          })}
        </div>
      </div>
    );
  },

  _renderNoJobs() {
    return (
      <div className="panel-body">
        <p>No jobs to show :-(.</p>
        <p>Maybe consider <a href="/jobs/create">adding one?</a></p>
      </div>
    );
  }
});

module.exports = JobList;
