/** @jsx React.DOM */
var PlaceholderImage = React.createClass({
  getInitialState: function() {
    return {
      xsmall: 20,
      small: 50,
      medium: 150,
      large: 250,
      xlarge: 500,
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6BAMAAAB6wkcOAAAAHlBMVEU/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8RLl7PAAAACXRSTlMAQE2QrODl5ugIN0RyAAAAtUlEQVR42u3dMRGAMBAAwccBKkAAOIgGZqjpaPGABiZuadPS5Cn2DKyEi6nmdcSZqD9RM6PT6XQ6nU6n0+l0Op1Op3/Sy9K2dtbHaBvodDqdTqfT6XQ6nU6n0+l0Op1Op9PpdDqdTqfT6XQ6nf4r/d7a9s56t+h0Op1Op9PpdDqdTqfT6XQ6nU6n0+l0Op1Op9PpdDqdTqfT6XQ6nU6n0+l0Op1Op9PpdDqdTqcn67lH5jlRv14zAEBWshvDNAAAAABJRU5ErkJggg==",
      corsProxy: "https://jsonp.nodejitsu.com/?callback=?&url="
    };
  },

  componentWillMount: function() {
    this.setStyles();
    this.setWidth();
    this.setHeight();
    this.setUrl();
  },

  setWidth: function() {
    var width = this.props.width;

    if (width) {
      if (this.state.hasOwnProperty(width)) {
        this.setState({w: this.state.valueOf()[width]});
      } else {
        this.setState({w: width});
      }
    } else {
      this.setState({w: this.state.small});
    }
  },

  setHeight: function() {
    var height = this.props.height;

    if (height) {
      if (this.state.hasOwnProperty(height)) {
        this.setState({h: this.state.valueOf()[height]});
      } else {
        this.setState({h: height});
      }
    } else {
      this.setState({h: this.state.small});
    }
  },

  setStyles: function() {
    var style = this.props.style || "";
    var keywords = style.split(" ");
    keywords.map(function(keyword) {
      return keyword.toLowerCase();
    });

    if (keywords.indexOf("rounded") > -1) {
      this.setState({ rounded: "img-rounded" });
    }

    if (keywords.indexOf("centered") > -1) {
      this.setState({ centered: "center-block" });
    }

    if (keywords.indexOf("circle") > -1) {
      this.setState({ centered: "img-circle" });
    }

    if (keywords.indexOf("thumbnail") > -1) {
      this.setState({ thumbnail: "img-thumbnail" });
    }
  },

  setUrl: function() {
    var type = this.props.type;

    if (type === "avatar") {
      this.getAvatar();
    } else if(type) {
      this.getImageForType();
    } else {
      this.getRandomImage();
    }
  },

  getAvatar: function() {
    var success = function(json) {
      this.setState({url: json.image_urls.epic});
    }.bind(this);

    var options = {
      url: 'http://uifaces.com/api/v1/random',
      successMethod: success
    };

    var ajax = new Ajax(options);
    ajax.get();
  },

  getImageForType: function() {
    var success = function(json) {
      var arr = json.images;
      var img = arr[Math.floor(Math.random()*arr.length)];
      this.setState({url: img.large_url});
    }.bind(this);

    var options = {
      url: this.state.corsProxy + 'http://www.splashbase.co/api/v1/images/search?query=' + this.props.type,
      successMethod: success
    };

    var ajax = new Ajax(options);
    ajax.get();
  },

  getRandomImage: function() {
    var success = function(json) {
      this.setState({url: json.large_url || json.url});
    }.bind(this);

    var options = {
      url: this.state.corsProxy + 'http://www.splashbase.co/api/v1/images/random',
      successMethod: success
    };

    var ajax = new Ajax(options);
    ajax.get();
  },

  render: function() {
    var classes = new Str("", " ");
    classes.append(this.state.centered);
    classes.append(this.state.rounded);
    classes.append(this.state.circle);
    classes.append(this.state.thumbnail);

    return (
      <img
      width={ this.state.w }
      height={ this.state.h }
      className={ classes.toString() }
      src={ this.state.url }
      />
    );
  }
});
