
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
			
	  var formData = new FormData();
        formData.append('key1', 'value1');
        // formData.append('key1', 'value2');
			let messages = this.state.messages;
			let length=this.state.messages.length;
			let current_message = this.state.current_message;
			let messages_with_quote=current_message;;
			console.log(messages_with_quote);
			 let headers = new Headers();
			 headers.append('Access-Control-Allow-Origin','http://localhost:8000');
			 headers.append('Content-Type', 'application/json');
			let request=new Request("http://localhost:8000/store_note_data",{method:"POST",headers: {'Content-Type': 'application/json'},body:JSON.stringify({key:messages_with_quote})});
			let request1=new Request("http://localhost:8000/store_note_data",{method:"POST",headers: {'Content-Type': 'application/json'} ,body:JSON.stringify({key:messages_with_quote})});
    let request2=new Request("http://localhost:8000/get_all_data",{method:"GET"});

    
			fetch(request1).then((response) => {
				
    return response.json();
  })
  			fetch(request2).then((response) => {
				
    return response.json();
  })
  .then((myJson) => {
  	// console.log(myJson);
  	var x=[];
  	// console.log(myJson.length);
  	for (var i = 0; i <myJson.length; i++) {
  x.push({message:myJson[i].content,length1:myJson[i].id});
}
  	  // messages.push({message:myJson,length1:length});
// console.log(x);
				this.setState({messages:x,current_message:this.state.current_message,});
    
  });
			
		}
		handleChange(e)
		{
			this.setState({
				messages:this.state.messages,
				current_message: e.target.value,
			});
		}
		delete_note(val)
		{
			
			
			
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
				<p className="card-header-title">{obj.length1}</p>
				</header><div className="card-content" >
				<div style={{display:'inline-block'}}>{obj.message}<br /></div></div>
				<footer className="card-footer" style={{textAlign:"center"}}>
				<div style={{margin:'0 auto',textAlign:'center'}}>
				<Fab  color="secondary" aria-label="add_note" size="small" onClick={()=>{
					let request1=new Request("http://localhost:8000/delete_note",{method:"POST",headers: {'Content-Type': 'application/json'},body:JSON.stringify({key:obj.length1})});

			fetch(request1).then((response)=>{console.log(response);return response;}).
			then((data)=>{
				let request2=new Request("http://localhost:8000/get_all_data",{method:"GET"});

    
  			fetch(request2).then((response) => {
				
    return response.json();
  })
  .then((myJson) => {
  	
  	var x=[];

  	for (var i = 0; i <myJson.length; i++) {
  x.push({message:myJson[i].content,length1:myJson[i].id});
}

  	  console.log("in delete");
console.log(x);
				this.setState({messages:x,current_message:this.state.current_message,});
    
  });


});
		
			
		} }>
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
