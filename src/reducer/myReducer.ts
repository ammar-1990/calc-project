type STATES = {
  name: string;
  first: string;
  second: string;
  bad: string;
  remain: string;
  price: number;
 
};

type STATE = {
  myState: STATES[];
};



type ACTION = {
    type:'CHANGE_INPUT',
    payload:{
        name:string,
        value:string,
        index:number
    }
}

export const INITIA_STATE: STATE = {
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
      price: 189,
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
    },
    {
      name: "американо",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 70,
    },
    {
      name: "латте",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 85,
    },
    {
      name: "капучино",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 85,
    },
    {
      name: "шоколад ",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 85,
    },
    {
      name: "мокачино",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 85,
    },
    {
      name: "шок с мол",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 85,
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
      name: "котлеты",
      first: '',
      second: '',
      bad: '',
      remain: '',
      price: 259,
    },
  ],
};


export const myReducer=(state:STATE,action:ACTION)=>{


    switch(action.type)
    {

        case "CHANGE_INPUT" : return {myState:state.myState.map((el,i)=>{
if(i===action.payload.index) return {...el,[action.payload.name]:action.payload.value}
else {
    return {...el}
}

        })}

        default : return state
    }
}