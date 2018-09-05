import React, { Component } from 'react';


class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  render() {
    return (
      <div>
        <Button colored onClick={this.handleOpenDialog} raised ripple>Show Dialog</Button>
        <Dialog open={this.state.openDialog} onCancel={this.handleCloseDialog}>
          <DialogTitle>Allow data collection?</DialogTitle>
          <DialogContent>
            <p>Want to subscribe to our emailing list?</p>
          </DialogContent>
          <DialogActions>
            <Button type='button'>Agree</Button>
            <Button type='button' onClick={this.handleCloseDialog}>Disagree</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Buttons;