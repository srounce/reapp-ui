var React = require('react/addons');
var Merge = require('react/lib/merge');
var ReactStyle = require('react-style');
var View = require('./View');
var AnimatableContainer = require('../helpers/AnimatableContainer');
var cx = React.addons.classSet;

module.exports = React.createClass({
  styles(propStyles) {
    return ReactStyle(Merge({
      position: 'absolute',
      top: 0,
      left: 0,
      pointerEvents: 'all',
      '-webkit-overflow-scrolling': 'touch',
      'backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden',
      '-moz-backface-visibility': 'hidden'
    }, propStyles));
  },

  getClasses(props) {
    var classes = {
      AnimatedView: true,
      touched: !!props.touching
    };

    if (props.className) classes[props.className] = true;
    return classes;
  },

  render() {
    var { id, width, height, index, step, ...props } = this.props;
    var classes = cx(this.getClasses(this.props));

    var x = (index - step) * width;

    // parallax
    if (index < step) x = x / 2;

    return (
      <AnimatableContainer
        id={id}
        className={classes}
        styles={this.styles({ width, height })}
        translate={{x: x}}>
        {View(props)}
      </AnimatableContainer>
    );
  }
});