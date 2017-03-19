var React = require('react');
var ReactDom = require('react-dom');

var Mask = React.createClass({
    getDefaultProps: function(){
        return {
            style: {
                position:'absolute',
                left:0,
                top:0,
                bottom:0,
                right:0,
                backgroundColor:'rgba(0, 0, 0, 0.5)',
                display:'none'
            }
        }
    },
    render: function(){
        var style = Object.assign({},this.props.style);
        if(this.props.stateShow){
            style.display = 'block';
        }
        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
})

var Dialog = React.createClass({
    getDefaultProps: function(){
        return {
            style: {
                width: '400px',
                height:'350px',
                backgroundColor:'white',
                borderRadius:'20px',
                textAlign:'center',
                lineHeight:'350px',
                Color:'black',
                margin:'150px auto',
                fontSize:'40px',
            }
        }
    },
    render: function(){
        return (
            <div style={this.props.style} onClick={this.props.move}>Hello React!</div>
        )
    }
})

var Button = React.createClass({
    getInitialState: function(){
        return {
            open: false
        }
    },
    onChangeState: function(){
        var flag = !this.state.open;
        this.setState({
            open: flag
        })
    },
    render: function(){
       return (
           <div>
                <button onClick={this.onChangeState}>show</button>
                <Mask stateShow={this.state.open}>
                    <Dialog move={this.onChangeState}></Dialog>
                </Mask>
           </div>
       )
   } 
})

ReactDom.render(
    <Button/>,
    document.getElementById('demo')
)