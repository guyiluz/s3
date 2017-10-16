// lib
import { Form,Button } from 'semantic-ui-react'
import React from 'react'


// components

 
// other


class GetGift extends React.Component {
  constructor() {
    super();
    this.state = {firstName:"",
    lastName:"", 
    street:"", 
    city:"", 
    floor:"", 
    zipCode:"", 
    email:"", 
    specialNotes:"", 
    phoneNumber:"",   
   
      
      };
  
  }

   handleSubmit = (event)=> {
    const data =JSON.stringify(this.state);
    event.preventDefault();
    this.props.sendData(data)
  }

  change = e=> {
this.setState({
[e.target.name]:e.target.value  
})
  }

    
    render() {
        return (
            <div className="search">
  
  <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input value={this.state.firstName}  label='First name' placeholder='First name'  name="firstName" onChange={e=>this.change(e)}/>
          <Form.Input value={this.state.lastName} label='Last name' placeholder='Last name' name="lastName"  onChange={e=>this.change(e)}/>
        <h5>Address</h5>
        <Form.Input  value={this.state.street} label='Street'  placeholder='Street' name="street"  onChange={e=>this.change(e)}/>
        <Form.Input  value={this.state.city} label='City'  placeholder='City' name="city"  onChange={e=>this.change(e)}/>
          <Form.Input value={this.state.floor}  label='floor' type='number' placeholder='floor' name="floor" onChange={e=>this.change(e)} />
          <Form.Input value={this.state.zipCode}   label='zip code' type='number' placeholder='zip code' name="zipCode" onChange={e=>this.change(e)} />
          <Form.Input value={this.state.email}  label='Email' placeholder='Email' type='email' name="email"  onChange={e=>this.change(e)} />
          <Form.Input value={this.state.phoneNumber}  label='Phone number' placeholder='Phone number' name="phoneNumber" onChange={e=>this.change(e)} />
          <Form.Field label='Special notes' control='textarea' rows='2'  name="SpecialNotes" onChange={e=>this.change(e)}/>
          <Button type='submit'>Submit</Button>
        </Form.Group>
        </Form>



  


          </div>  
          
        )
    }
}

export default GetGift;

