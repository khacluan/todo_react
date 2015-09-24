class Form extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var props = blacklist(this.props, 'children', 'type');
		props.className = classNames('Form', ('Form--' + this.props.type), this.props.className);

		return React.createElement(this.props.component, props, this.props.children);
	}
}

Form.propTypes = {
	children: React.PropTypes.node.isRequired,
	className: React.PropTypes.string,
	component: React.PropTypes.oneOfType([
		React.PropTypes.element,
		React.PropTypes.string
	]),
	type: React.PropTypes.oneOf(['basic', 'horizontal', 'inline'])
};

Form.defaultProps = { type: 'default', component: 'form' };