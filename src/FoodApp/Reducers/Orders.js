import { GET_ORDERS, UPDATE_ORDER_DETAILS } from "../Actions/ManageOrders";

const initialState ={
    TotalOrders:[
        {
            id:1,
            name:'Ram',
            lastname:'Raj',
            email:'ram.raj@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:2,
            name:'Rachel',
            lastname:'Green',
            email:'Rachel.raj@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:3,
            name:'Phibee',
            lastname:'Black',
            email:'Phibee.raj@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:4,
            name:'Ross',
            lastname:'Galler',
            email:'Ross.Galler@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:5,
            name:'Monica',
            lastname:'Galler',
            email:'Monica.Galler@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:6,
            name:'Joey',
            lastname:'Tribiyani',
            email:'Joey.Joey@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:7,
            name:'Chandler',
            lastname:'Blue',
            email:'Chandler.Chandler@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:8,
            name:'Tom',
            lastname:'Purple',
            email:'Tom.raj@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:9,
            name:'Richard',
            lastname:'Zblack',
            email:'Richard.raj@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:10,
            name:'Tina',
            lastname:'Roay',
            email:'Tina.raj@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:11,
            name:'Rahul',
            lastname:'Roy',
            email:'Rahul.Rahul@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:12,
            name:'Sunil',
            lastname:'Chattri',
            email:'Sunil.Chattri@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:13,
            name:'Virat',
            lastname:'Kholi',
            email:'Virat.Kholi@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:14,
            name:'Shikhar',
            lastname:'Dhawan',
            email:'Shikhar.Dhawan@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:15,
            name:'KL',
            lastname:'Rahul',
            email:'Kl.Dhawan@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:16,
            name:'Kedhar',
            lastname:'Jadav',
            email:'Jadav.Dhawan@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:17,
            name:'Kedhar',
            lastname:'Jadav',
            email:'Jadav.Dhawan@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:18,
            name:'Kedhar',
            lastname:'Jadav',
            email:'Jadav.Dhawan@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:19,
            name:'Kedhar',
            lastname:'Jadav',
            email:'Jadav.Dhawan@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:20,
            name:'Kedhar',
            lastname:'Jadav',
            email:'Jadav.Dhawan@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:21,
            name:'Kedhar',
            lastname:'Jadav',
            email:'Jadav.Dhawan@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        },
        {
            id:22,
            name:'Kedhar',
            lastname:'Jadav',
            email:'Jadav.Dhawan@gmail.com',
            address:'100,Sector 5, Rajender Nagar, Sahibabad, Ghaziabad-201005',
            contact:'9898982323'
        }
    ]
}

const Orders=(state=initialState, action)=>{
    switch(action.type){
        case GET_ORDERS:
            return{
                ...state
            }
        case UPDATE_ORDER_DETAILS:
            const tempData = state.TotalOrders.slice();
            const index = tempData.findIndex(item => item.id == action.payload.id);
            tempData[index].name = action.payload.name;
            tempData[index].lastname = action.payload.lastname;
            tempData[index].address = action.payload.address;

            return{
                TotalOrders:tempData
            }
        default:
            return{
                ...state
            }
    }
}

export default Orders;