import React, { Component } from 'react';



class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            tab: []
            

        }
    }


    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    add = () => {
        this.setState({ tab: this.state.tab.concat({text :this.state.text , complete : false} ), text: "" })

    }

    Delete = itemId  => {
       let filteredArray= this.state.tab.filter(item => item.text !== itemId);
       this.setState({
           tab : filteredArray
       })
    }



    Complet = itemId => {
        this.setState({tab: this.state.tab.map(item => item.text === itemId  ? {text : item.text , complete : !item.complete}: item)});
      };
     

    render() {
        return (
            <div className="app"> <div className="jumbotron">
                <div>

                    <h1 className="display-4">To-do App !</h1>


                    <p>Add new to-Do</p>


                    <input type="text" className="inputtodo" placeholder="Add new To-do" onChange={this.handleChange} value={this.state.text}/>

<br></br>
                    <button className="btn btn-outline-secondary" type="button" id="Button_todo" onClick={this.add}>Add</button>


                    <h2>Let's get some work Done !</h2>

                </div>


            </div>
                <div>
                    {this.state.tab.map(el => (<div className="scnd">
                        <button className="delete-btn" onClick={()=>this.Delete(el.text)}>delete</button>
                        <button className="delete-btn2" onClick={()=>this.Complet(el.text) }> {!el.complete ? "complete" : "undo" }</button>
                        <p className={el.complete ? "txt hashed" : "txt"}>{el.text}</p></div>))
                    }
                </div>
            </div>










        )



    }
}

export default Todo;
