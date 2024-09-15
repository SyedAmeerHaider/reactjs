
import './App.css'
// import About from"./about";
import Card from './components/card';




const App =()=> {
  // const FirstFunction =() =>{
  //   alert ("hello world");
  // };
  let array=[ 10,20];

  let shoesArray = [{
    imgUrl: 'http',
    title: 'Shoes',
    description: 'this is a description'
  }]

  return (
  <>
    <div>
      {array.map((i)=>{
        return (
          // eslint-disable-next-line react/jsx-key
          <div className='w-20'>
            <h1>{i}</h1>
          </div>
        );
      })}
    </div>
    <div className="cards-list">
      <Card imgUrl='' title='shoes' description=''/>
      <Card/>
      <Card/>
    </div>
    {/* <About/>
    <h1>hello word</h1><button onClick={FirstFunction}> call a function </button> */}
   </>
  );
};



export default App
