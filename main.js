
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import DribbleButton from 'react-dribble-button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import { Link } from "react-router-dom";
import Button from 'muicss/lib/react/button';

class Textbox extends Component
{
	constructor(props)
	{
		super(props);
		this.state={};
	}
	render()
	{
		return(<div class="field">
           <label class="label">Note Content</label>
            <div class="control">
              <textarea class="textarea" rows="10" onChange={this.props.onChange} placeholder="Note Content here..."></textarea>
            </div>
          </div>);      
}
}

class NotesBaseComponent extends Component
{
	
	constructor(props)
	{
		super(props);
		this.state = {"messages": [], "current_message":""};
		this.handleChange=this.handleChange.bind(this);
		this.add_note=this.add_note.bind(this);
		this.delete_note=this.delete_note.bind(this);
	}
	add_note()
	{
		let messages = this.state.messages;
		let length=this.state.messages.length;
    let current_message = this.state.current_message;

    if(current_message ){
      messages.push({message:current_message,length1:length});
      this.setState({messages:messages,current_message:current_message,});
      
  }
	}
	handleChange(e)
	{
		this.setState({
			messages:this.state.messages,
      current_message: e.target.value,
    });
	}
	delete_note(key)
	{
		

    this.state.messages.splice(key, 1);

    this.setState({messages: this.state.messages,current_message:this.state.current_message,});
 	console.log('')
		
	}
	
	render()
	{
		return(<div className="container m-t-20" styles={{backgroundColor:"black"}}>
      <h1 className="page-title">New Note</h1>
		<Textbox onChange={this.handleChange} />
		<Button variant="raised" onClick={this.add_note}>add_note</Button>
		
<div className="allnotes-page">
		<div className="columns is-multiline">{this.state.messages.map(obj => {
          return (<div className="column is-one-third" key={this.state.messages.indexOf(obj)}><div className="card">
                    <header className="card-header">
                      <p className="card-header-title">{this.state.messages.indexOf(obj)}</p>
                    </header><div className="card-content" >
                      <div style={{display:'inline-block'}}>{obj.message}<br /></div></div>
                    <footer className="card-footer" style={{textAlign:"center"}}>
                     <div style={{margin:'0 auto',textAlign:'center'}}>
                      <Fab  color="secondary" aria-label="add_note" size="small" onClick={()=>{    this.state.messages.splice(this.state.messages.indexOf(obj) , 1);

    this.setState({messages: this.state.messages,current_message:this.state.current_message,});}}>
  <DeleteIcon fontSize="small"/>
</Fab>
</div>
                    </footer>
                  </div>
                </div>
 );})}
        </div>
		</div></div>);
	}
}
ReactDOM.render(
  <NotesBaseComponent />,
  document.getElementById('root')
);
