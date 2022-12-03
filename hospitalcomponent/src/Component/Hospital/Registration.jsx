import React, { Component } from 'react'

const options = [
  {
    label: "Qadin",
    value: "Qadin",
  },
  {
    label: "Kisi",
    value: "Kisi",
  }
];
class Registration extends Component {
  state ={ name:'', indentify:'',options:'', age:'',email:'', number:'', image:''};
  clickHandler1 = (e) =>{
    this.setState({name:e.target.value});
    console.log(e.target.value)
  }
  clickHandler2 = (e) =>{
    this.setState({indentify:e.target.value});
    console.log(e.target.value)
  }
  clickHandler = (e) =>{
    this.setState({options:this.state.options.value});
    console.log(e.target.value)
  }
  clickHandler3 = (e) =>{
    this.setState({age:e.target.value});
    console.log(e.target.value)
  }
  clickHandler4 = (e) =>{
    this.setState({email:e.target.value});
    console.log(e.target.value)
  }
  clickHandler5 = (e) =>{
    this.setState({number:e.target.value});
    console.log(e.target.value)
  }
  clickHandler6 = (e) =>{
    this.setState({image:e.target.value});
      console.log( e.target.value);
  }
  clickButton (e) {
    console.log(this.state);
  }
  clickHandler = (e) =>{
    console.log({options:e.target.options.label})
  }
  render() {
    return (
      <div style={{marginLeft:'400px'}}>
        <h1>Xeste haqqinda melumat</h1>
        <div style={{marginLeft:'150px'}}><p>Ad</p>
        <input style={{padding:'10px',width:'250px',fontSize:'20px',borderRadius:'10px'}} type='text' value={this.state.name} name='name' onChange ={this.clickHandler1}></input>
        <p>Seriya və pasport nömrəsi</p>
        <input style={{padding:'10px',width:'250px',fontSize:'20px',borderRadius:'10px'}} value={this.state.indentify} name='identify' onChange={this.clickHandler2} type='text'></input>
        <p> Cinsiyyəti</p>
        <select style={{padding:'10px',width:'250px',fontSize:'20px',borderRadius:'10px'}} onChange={this.clickHandler}>
            {options.map((option) => (
              <option name='options'  value={this.state.options}>{option.label}</option>
            ))}
          </select>
        <p>Yaş</p>
        <input  name='age' style={{padding:'10px',width:'250px',fontSize:'20px',borderRadius:'10px'}} type='number' value={this.state.age} onChange={this.clickHandler3}></input>
        <p>E-mail</p>
        <input name='email' style={{padding:'10px',width:'250px',fontSize:'20px',borderRadius:'10px'}} value={this.state.email} type='email' onChange={this.clickHandler4} checked></input>
        <p>Telefon nömrəsi</p>
        <input name='number' style={{padding:'10px',width:'250px',fontSize:'20px',borderRadius:'10px'}} value={this.state.number} onChange={this.clickHandler5} type='number'></input>
        <p>Simptomların təsviri</p>
        <input name='image' style={{padding:'10px',width:'250px',fontSize:'20px',borderRadius:'10px'}} value={this.state.image} onChange={this.clickHandler6} type='text'></input>
        <br></br>
        <button style={{padding:'10px',width:'150px',fontSize:'20px',borderRadius:'10px',marginLeft:'55px',background:'darkblue',color:'white',marginTop:'30px', marginBottom:'30px'}} className='btn' onClick={this.clickButton}>Gonder</button></div>
      </div>
    )
  }
}

export default Registration