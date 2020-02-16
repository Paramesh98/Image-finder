import React, { Component } from 'react'
import {GridList, GridListTile, GridListTileBar, Box, Grid} from '@material-ui/core'
import {IconButton} from '@material-ui/core'
import {Zoom} from '@material-ui/core'
import {FlatButton} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ImageResult extends Component {
  state={open:false, img:'', tags:''}
  handleClose = () =>{
    this.setState({open:false })
  }
  handleOpen = (img, tags) =>{
    this.setState({open:true, img:img, tags:tags})
  }
    render() {
        const {images} = this.props
        let imageResultContent;
        if(this.props.images){
            imageResultContent =(
                <GridList cols={3}>
      
              {images.map(img => (
                
                  <GridListTile
                  title={img.tags}
                  key={img.id}
                  subtitle={
                    <span>by <stron>{img.user}</stron></span>
                  }
                  actionIcon={
                    <IconButton aria-label={`info about ${img.tags}`}>
                  <Zoom />
                </IconButton>
                  }
                  
                      >
                        <img src={img.largeImageURL} alt="" onClick={()=>this.handleOpen(img.largeImageURL, img.tags)}/>
                      </GridListTile>
                  
              ))}
                </GridList>
            )
        }else{
            imageResultContent = <h3>Nothing to</h3>
        }

        return(
            <div>
                {imageResultContent}
                <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{this.state.tags}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img src={this.state.img} width="100%" alt="" />
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
            </div>
        )
    }
}

export default ImageResult
