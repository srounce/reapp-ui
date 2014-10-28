var React = require('react');
var Icon = require('./Icon');

require('./Button.styl');

var Button = React.createClass({
  render() {
    var children;
    var color = this.props.color || '#307cff';
    var styles = {
      fontSize: '16px',
      background: 'none',
      border: 'none',
      padding: '8px 0',
      color: color,
      flexFlow: 'row',
      zoom: 1,
      lineHeight: 'normal',
      whiteSpace: 'nowrap',
      verticalAlign: 'baseline',
      textAlign: 'center',
      cursor: 'pointer',
      '-webkit-user-drag': 'none',
      '-webkit-user-select': 'none',
      outline: 'none'
    };

    if (this.props.children) {
      var childStyle = { margin: 'auto' };
      children = <span
        style={childStyle}
        data-transform={this.props.textTransforms}>
        {this.props.children}
        </span>;
    }

    var icon = <Icon
      type={this.props.type}
      color={color}
      size="2x"
      data-transform={this.props.iconTransforms} />;

    return this.transferPropsTo(
      <button style={styles} className={'button-' + this.props.type}>
        {icon}
        {children}
      </button>
    );
  }
});

module.exports = Button;