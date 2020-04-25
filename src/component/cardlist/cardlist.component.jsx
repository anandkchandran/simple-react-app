import React from 'react';
import {Card} from "../card/card.component"
import './cardlist.styles.css'

class CardList extends React.Component{
    constructor(){
        super();
        console.dir("constructor is called first");
        this.state = {
          monsters : [],
        }
    }

    componentDidMount(){
        console.dir("didmount is called second");
        var monstersArray = [];

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {;
                monstersArray = json;
                //console.log(monstersArray);
                monstersArray.forEach((monster)=>{
                    monster.edit = false;
                    monster.editEmail = false;
                    monster.editName = false;
                    monster.textBoxProps = {
                        editNameVal : monster.name,
                        editEmailVal : monster.email
                    }
                });
                //console.log(monstersArray);
                this.setState({
                    monsters : monstersArray
                });
            });
    }
    onEditNameClick = (e) =>{
        e.preventDefault();
        console.log("edit name clicked")
        //console.log(e.target.id);
        var monster = this.state.monsters[e.target.id-1];
        //console.log(monster);
        var modifiedMonsters = this.resetButtonsOfOtherMonsters(e.target.id-1);
        //console.log(monster)
        monster.edit = true;
        monster.editName = true;
        monster.editEmail = false;
        modifiedMonsters[e.target.id-1] = monster;
        //console.log(mod)
        this.setState({
            monsters : modifiedMonsters
        })
    }
    resetButtonsOfOtherMonsters = (id)=>{
        var monsters = this.state.monsters;
        monsters = this.resetButtonProps(monsters,id);
        return monsters;
    }
    onEditEmailClick = (e) =>{
        e.preventDefault(); 
        console.log("edit email clicked")
        var monster = this.state.monsters[e.target.id-1];
        var modifiedMonsters = this.resetButtonsOfOtherMonsters(e.target.id-1);
        monster.edit = true;
        monster.editName = false;
        monster.editEmail = true;
        modifiedMonsters[e.target.id-1] = monster;
        //console.log(mod)
        this.setState({
            monsters : modifiedMonsters
        })
    }

    onCancelClick =(e)=>{
        e.preventDefault()
        console.log("cancel clicked")
        var monsters = this.state.monsters;
        var monster = this.state.monsters[e.target.id-1];
        if(monster.emailError && monster.emailError.length>0){
            monster.emailError = "";
        }
        monsters[e.target.id-1] = monster;
        monsters = this.resetButtonProps(monsters);
        this.setState({
            monsters:monsters
        })
    }

    validateEmail = (email) => {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return reg.test(String(email).toLowerCase());
    }

    resetButtonProps = (monsters,id) =>{
        //console.log(id);
        if(id){
            monsters.forEach(monster => {
                if(monster.id-1!==id){
                    monster.edit = false;
                    monster.editName = false;
                    monster.editEmail = false;
                }
            });
        } else{
            monsters.forEach(monster => {
                monster.edit = false;
                monster.editName = false;
                monster.editEmail = false;
            });
        }
        return monsters;
    }

    onNameSubmit =(e)=>{
        e.preventDefault();
        console.log("submit name clicked");
        var monster = this.state.monsters[e.target.id-1];
        monster.name = monster.textBoxProps.editNameVal;
        monster.edit = false;
        monster.editName = false;
        monster.editEmail = false;
        var monsters = this.state.monsters;
        //console.log(mod)
        this.setState({
            monsters : monsters
        })
    }

    onEmailSubmit = (e)=>{
        e.preventDefault();
        console.log("submit email clicked")
        var monster = this.state.monsters[e.target.id-1];
         if(this.validateEmail(monster.textBoxProps.editEmailVal)==false){
             console.log("enter a valid email")
             monster.emailError = "Enter a Valid Email" 
        } else { 
            monster.email = monster.textBoxProps.editEmailVal;
            monster.edit = false;
            monster.editName = false;
            monster.editEmail = false;
        }
        var monsters = this.state.monsters;
        //console.log(mod)
        this.setState({
            monsters : monsters
        })
    }

    onNameChange =(e) => {
        e.preventDefault()
        //console.log("typing name")
        //console.log(e.target.id);
        var monsters = this.state.monsters;
        var monster = monsters[e.target.id-1];
        monster.textBoxProps.editNameVal = e.target.value
        monsters[e.target.id-1] = monster;
        //console.log(mod)
        this.setState({
            monsters : monsters
        })

    }
    onEmailChange = (e) => {
        e.preventDefault();
        console.log("typing email")
        var monsters = this.state.monsters;
        var monster = monsters[e.target.id-1];
        monster.textBoxProps.editEmailVal = e.target.value
        monsters[e.target.id-1] = monster;
        //console.log(mod)
        this.setState({
            monsters : monsters
        })
    }
    

    events = {
        onEditNameClick : this.onEditNameClick,
        onEditEmailClick : this.onEditEmailClick,
        onCancelClick : this.onCancelClick,
        onNameSubmit : this.onNameSubmit,
        onEmailSubmit : this.onEmailSubmit,
        onNameChange:this.onNameChange,
        onEmailChange : this.onEmailChange
    }


    render(){    
        return(
            <div className="row" >
                {this.state.monsters.map(monster => (
                    <div key={monster.id} className={"four columns customColumn"}>
                        <Card key={monster.id} monster={monster} events={this.events}/>
                    </div>
                 ))}
            </div>
        )
    }
}

export default CardList