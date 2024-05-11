import React,{useState} from 'react';
import Cards from './Shops/Cards/Cards';
import Nav from './Shops/Nav/Nav';
import Footer from './Shops/Footer/Footer';

const App = () => {
  const [cards,setCards]=useState([
  {
    id:"1",
    prod:"Fancy Product",
    pri:"$40.00 - $80.00",
    sts:true,
  },
  { 
    id:"2",
    prod:"Special Item",
    del:"$20.00",
    pri:" $18.00",
    star:"star",
    sale:"sale",
    sts:true,
  },
  {
    id:"3",

    prod:"Sale Item",
    del:"$50.00",
    pri:" $25.00",
    sale:"sale",
    sts:true,


  },
  {
    id:"4",
    sts:true,
    prod:"Popular Item",
    pri:" $40.00",
    star:"star",
  },
  {
    id:"5",
    sts:true,


    prod:"Sale Item",
    del:"$50.00",
    pri:" $25.00",
    sale:"sale",
  },
  {
    id:"6", 
       sts:true,


    prod:"Fancy Product",
    pri:" $120.00 - $280.00",
  },
  {
    id:"",
    sts:true,
    prod:"Special Item",
    del:"$20.00",
    pri:"$18.00",
    sale:"sale",
    star:"star"
  },
  {
    id:"8",
    sts:true,

    prod:"Popular Item",
    pri:"$40.00",
    star:"star"
  }
    
  ])

  const [value,setvalue]=useState(0);
  // const [sts,setsts]=useState(true);

  const cartInc=(id)=>{
    // setsts(false);
    const update=  cards.map((ele)=>{
      if(ele.id===id){
        
    setvalue(e=>e+1)
    return {...ele,sts:false}
    
      }
      return ele

    })
    setCards(update)
    

  }
  const cartDec=(id)=>{
    // setsts(true)
  const update= cards.map((ele)=>{
      if(ele.id===id){
    setvalue(e=>e-1)
    return {...ele,sts:true}
      }
return ele
    })
    setCards(update)
  }
  return (
    <>
    <Nav value={value}/>
   <Cards cards={cards} cartInc={cartInc} cartDec={cartDec} />

      <Footer/>
    </>
  );
};

export default App;