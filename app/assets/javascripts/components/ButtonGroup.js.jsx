class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var className = classNames('ButtonGroup', this.props.className);
    return <div {...this.props} className={className} />;
  }
}

ButtonGroup.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string
};
