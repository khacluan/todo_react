class Row extends React.Component {
	render() {
		let { gutter } = this.props;
		let rowStyle = {
			display: 'flex',
			flexWrap: 'wrap',
			msFlexWrap: 'wrap',
			WebkitFlexWrap: 'wrap',
			marginLeft: (gutter / -2),
			marginRight: (gutter / -2),
		};
		let className = classNames('Row', this.props.className);
		let props = blacklist(this.props, 'className', 'gutter', 'style');

		return (
			<div {...props} style={Object.assign(rowStyle, this.props.style)} className={className} />
		);
	}
}

Row.propTypes = {
	children: 	React.PropTypes.node.isRequired,
	className: 	React.PropTypes.string,
	gutter: 		React.PropTypes.number,
	style: 			React.PropTypes.object
};

Row.defaultProps = { gutter: E.width.gutter };