class Index extends React.Component {
  constructor(props) {
    super(props);
    this._fetchCollection();
  }

  _fetchCollection() {
    var _this = this;
    $.ajax({
      url: this.props.collection_url,
      dataType: 'json',
      success: function(res) {
        _this.setState({collection: res.lists});
      },
      error: function(error) {
        console.log(error);
      }
    });
  };

  render() {
    if(this.state) {
      return (
        <div>
          <Form type='horizontal'>
            <FormField>
              <FormLabel>Email</FormLabel>
              <FormInput />
            </FormField>
            <FormField>
              <FormLabel>Password</FormLabel>
              <FormInput type='password'/>
            </FormField>
            <FormField>
              <Button type='default-success'>Login</Button>
            </FormField>
          </Form>

          <Table>
            <thead>
              <th>No</th>
              <th>Title</th>
              <th>Content</th>
              <th>URL</th>
            </thead>
            <tbody>
              {
                this.state.collection.map(function(item, index) {
                  return (<tr>
                            <td>{index}</td>
                            <td>{item.title}</td>
                            <td>{item.content}</td>
                            <td>{item.url}</td>
                          </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </div>
      )
    } else {
      return <p></p>
    }
  }
}

Index.propTypes = {
  collection_url: React.PropTypes.string,
  collection: React.PropTypes.array
};

Index.defaultProps = {
  collection_url: '',
  collection: []
};