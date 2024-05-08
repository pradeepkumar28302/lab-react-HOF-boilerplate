import React,{Component} from 'react';
class HigherOrderFunctions extends Component{
    constructor(){
        super();
        this.state = {
            userData:[
                {id:'1',name:'Joe',user_type:'Developer',age:31,years:11},
                {id:'2',name:'Hill',user_type:'Designer',age:26,years:4},
                {id:'3',name:'John',user_type:'Teacher',age:24,years:2},
                {id:'4',name:'Sam',user_type:'Entreprenuer',age:58,years:25},
                {id:'5',name:'Jack',user_type:'Designer',age:43,years:18}
            ]
        };
    }

    //display all items
    renderItems=()=>{
        const data=this.state.userData;
        const mapRows=data.map((item)=>(
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderUserType=()=>{
        const data=this.state.userData;
        const filters=data.filter(item=>item.user_type==="Designer")
        const mapRows=filters.map((item)=>(
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderFilterJ=()=>{
        const data=this.state.userData;
        const filters=data.filter(item=>item.name[0]==="J")
        const mapRows=filters.map((item)=>(
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderFilterAge=()=>{
        const data=this.state.userData;
        const filters=data.filter(item=>item.age>28&&item.age<=50)
        const mapRows=filters.map((item)=>(
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderFilterReduce=()=>{
        const data =this.state.userData;
        const filters=data.filter(item=>item.user_type== 'Designer')
        const totalYears = filters.reduce((total, item) => total + item.years, 0);
        return totalYears;
    }

    render(){
        return(
            //instead of a parent div tag, we can also use React.Fragment
            <React.Fragment>
                <h1>Display all items</h1>
                <div className="display-box">
                <ul>{this.renderItems()} </ul>
                </div>
                <div className="display-box">
                    <h1>Display based on user type</h1>
                    <ul>{this.renderUserType()}</ul>
                </div>
                <div className="display-box">
                    <h1>Filter all data starting with J</h1>
                    <ul>{this.renderFilterJ()}</ul>
                </div>
                <div className="display-box">
                    <h1>Filter all data based on age greater than 28 and less than or equal to 50</h1>
                    <ul>{this.renderFilterAge()}</ul>
                </div>
                <div className="display-box">
                    <h1>Find the total years of the designers</h1>
                    <ul>{this.renderFilterReduce()}</ul>
                </div>
            </React.Fragment>
        )
    }
}

export default HigherOrderFunctions;