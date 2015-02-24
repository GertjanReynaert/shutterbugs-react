/** @jsx React.DOM */
var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Shutterbugs</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Gertjan Reynaert</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="col-lg-9">
          {/* {{placeholder-image width="500" height="auto" style="centered rounded" type="bridge"}} */}
        </div>
        <div className="col-lg-3">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Comments</h3>
            </div>
            <div className="list-group">
              <div className="list-group-item">
                <div className="media-left">
                  <a href="#">
                    {/* {{placeholder-image style="circle" type="avatar"}} */}
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Media heading</h4>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus.
                </div>
              </div>
              <div className="list-group-item">
                <div className="media-left">
                  <a href="#">
                    {/* {{placeholder-image style="circle" type="avatar"}} */}
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Media heading</h4>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus.
                </div>
              </div>
              <div className="list-group-item">
                <div className="media-left">
                  <a href="#">
                    {/* {{placeholder-image style="circle" type="avatar"}} */}
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Media heading</h4>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
});
