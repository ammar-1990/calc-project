type STATES = {
  name: string;
  first: string;
  second: string;
  bad: string;
  remain: string;
  price: number;
  drink?:boolean
 
};

type STATE = {
  myState: STATES[];
};



type ACTION = {
    type:'CHANGE_INPUT' ,
    payload:{
        name:string,
        value:string,
        index:number
    }
}


type ACTION_TWO= {
  type:'RESET',

}



type FIRST_ACTION = ACTION | ACTION_TWO




type TABLE = {
  result:string,
  cassa_1:string,
  cassa_2:string,
  bad:string,
  deliver:string,
  bn:string,
  given:string

}

export const INITIAL_TABLE:TABLE = {
result:'',
cassa_1:'',
cassa_2:'',
bad:'',
deliver:'',
bn:'',
given:''
}

type SECOND_ACTION = {
  type:'CHANGE_VALUE',
  payload:{
    value:string,
    name:string
  }
}



export const secondReducer=(state:TABLE,action:SECOND_ACTION)=>{
switch(action.type)
{
  case "CHANGE_VALUE" : return {...state , [action.payload.name]:action.payload.value}

}

}



const FIRST_VALUE : STATE =  {
  myState: [
    {
      name: "пита",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 169,

    
      
    },
    {
      name: "на тарелке",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 295,
    },
    {
      name: "лаваш",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 199,
    },
    {
      name: "сырный лаваш",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 219,
    },
    {
      name: "за 99",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 99,
    },
    {
      name: "мини лаваш",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 159,
    },
    {
      name: "красный лаваш",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 219,
    },
    {
      name: "зеленый лаваш",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 219,
    },

    {
      name: "картофель фри ",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 85,
    },
    {
      name: "чай",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 40,
   
    },
    {
      name: "эспрессо",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 70,
      drink:true
    },
    {
      name: "американо",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 70,
      drink:true
    },
    {
      name: "латте",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 85,
      drink:true
    },
    {
      name: "капучино",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 85,
      drink:true
    },
    {
      name: "шоколад ",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 85,
      drink:true
    },
    {
      name: "мокачино",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 85,
      drink:true
    },
    {
      name: "шок с мол",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 85,
      drink:true
    },
    {
      name: "лимонад 0,3",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 70,
    },
    {
      name: "лимонад 0,5",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 85,
    },
    {
      name: "чай холодный",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 90,
    },
    {
      name: "вода",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 50,
    },
    {
      name: "адреналин 0,5",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 130,
    },
    {
      name: "морс",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 90,
    },
    {
      name: "айран",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 75,
    },
    {
      name: "квас",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 75,
    },
    {
      name: "котлеты г",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 259,
    },
    {
      name: "котлеты к",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 239,
    },
  ],
}




export const INITIA_STATE: STATE  = JSON.parse(localStorage.getItem('myState') as string)  || FIRST_VALUE;


export const myReducer=(state:STATE,action:FIRST_ACTION)=>{


    switch(action.type)
    {

        case "CHANGE_INPUT" : return {myState:state.myState.map((el,i)=>{
if(i===action.payload.index) return {...el,[action.payload.name]:action.payload.value}
else {
    return {...el}
}

        })}



        case "RESET" : return {myState:FIRST_VALUE.myState.map((el,i)=>({...el,first:state.myState[i].remain}))}

 



        

        
      

        

        default : return state
    }
}