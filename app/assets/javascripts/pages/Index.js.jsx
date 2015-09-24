class Index extends React.Component {
  render() {
    return (
      <div>
        <Form type='horizontal'>
          <FormField>
            <FormLabel>Email</FormLabel>
            <FormInput />
          </FormField>
          <FormField>
            <Button type='default-success'>Hello World</Button>
          </FormField>
        </Form>

        <Table></Table>
      </div>
    )
  }
}