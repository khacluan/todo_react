class Table extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// classes
		var className = classNames(
			'Table',
			this.props.className
		);

		// render table element
		return (
			<table className={className} {...this.props} />
		);
	}
}

Table.propTypes = {
	children: 	React.PropTypes.any,
	className: 	React.PropTypes.string
};