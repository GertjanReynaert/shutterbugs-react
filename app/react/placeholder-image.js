/** @jsx React.DOM */
var PlaceholderImage = React.createClass({
  getInitialState: function() {
    return {
      xsmall: 20,
      small: 50,
      medium: 150,
      large: 250,
      xlarge: 500,
      typeworkLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6BAMAAAB6wkcOAAAAHlBMVEU/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8RLl7PAAAACXRSTlMAQE2QrODl5ugIN0RyAAAAtUlEQVR42u3dMRGAMBAAwccBKkAAOIgGZqjpaPGABiZuadPS5Cn2DKyEi6nmdcSZqD9RM6PT6XQ6nU6n0+l0Op1Op3/Sy9K2dtbHaBvodDqdTqfT6XQ6nU6n0+l0Op1Op9PpdDqdTqfT6XQ6nf4r/d7a9s56t+h0Op1Op9PpdDqdTqfT6XQ6nU6n0+l0Op1Op9PpdDqdTqfT6XQ6nU6n0+l0Op1Op9PpdDqdTqcn67lH5jlRv14zAEBWshvDNAAAAABJRU5ErkJggg==",

      width: this.props.width,
      height: this.props.height,
      type: this.props.type,
    };
  },

  componentWillMount: function() {
    this.setStyles();
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

  render: function() {
    var classes = new Str("", " ");
    classes.append(this.state.centered);
    classes.append(this.state.rounded);
    classes.append(this.state.circle);
    classes.append(this.state.thumbnail);

    return (
      <img
      width={ this.state.width || this.state.small }
      height={ this.state.height || this.state.small }
      className={classes.toString()}
      src={this.state.typeworkLogo}
      />
    );
  }
});
