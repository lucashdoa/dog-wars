import React from 'react';
import './Main.css';
import Dog from '../Dog.jsx';


var sithDogArray =[];
var jediDogArray =[];

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          items:[],
          isLoaded: false,
          redTotal:0,
          blueTotal:0,
        }
        this.handleRedIncrement = this.handleRedIncrement.bind(this);
    }

    componentDidMount(){
        fetch('https://dog.ceo/api/breeds/image/random/2')
        .then(res => res.json())
        .then(json => {
            this.setState({
            isLoaded:true,
            items: json,
            })
            sithDogArray.push(this.state.items.message[0]);
            jediDogArray.push(this.state.items.message[1]);
        });
    }

    handleRedIncrement(){
        let {redTotal} = this.state;
        this.setState({
            redTotal:parseInt(redTotal) + 10,
            isLoaded:false,
        });
        
        if(this.state.redTotal === 90){
            window.location.href='/';
            return;
        }
        this.componentDidMount();
    }

    handleBlueIncrement(){
        let {blueTotal} = this.state;
        this.setState({
            blueTotal:parseInt(blueTotal) + 10,
            isLoaded:false,
        });
        if(this.state.blueTotal === 90){
            window.location.href='/';
            return;
        }
        this.componentDidMount();
    }

      
    render(){
        var {isLoaded,items,redTotal,blueTotal} = this.state;
      
        if(!isLoaded){
            return (
                <div className='App App-header'>
                    <span className='load has-text-warning'>LOADING ...</span>
                </div>
            )
        } else {
            return (
                <div className='container is-fluid'>

                    <div className='columns'>
                        <div id='dog1' className='column is-5'>
                            <Dog photo={items.message[0]}/>
                        </div>
                        <div id='middle' className='column is-2'>
                            <progress value={redTotal} className="progress is-danger marginbottom"  max="100">80%</progress>
                            <button onClick={() => this.handleRedIncrement()} className='button is-danger'>Sith</button>
                            <h1 className='has-text-warning'>VS</h1>
                            <button onClick={() => this.handleBlueIncrement()}className='button is-info marginbottom'>Jedi</button>
                            <progress value={blueTotal} className="progress is-info"  max="100">80%</progress>
                        </div>
                        <div id='dog2' className='column is-5'>
                            <Dog photo={items.message[1]}/>
                        </div>
                    </div>
                    {/* <a href='/' className='button is-warning'>Voltar</a> */}
            
                </div>
            );
        }
    }

}