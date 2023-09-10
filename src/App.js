import "./App.css" ;
import Product from "./component/product"
import Header from "./components/Header";
import Sliders from "./components/Sliders";
import Category from "./components/Category";
import Footer from "./components/Footer";
import "./index.css";
import { useEffect,useState } from "react";

const arr=[];
export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:5000/data')
      .then(response => response.json())
      .then(result => {
       // console.log(result);
        setData(result)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
 const hello= data.map((it)=>{
    console.log(it);
    return  <div className="s"> <Product path={it.path} name={it.name} discount={it.discount} price={it.price}/></div>
  })

// product 2

const [data2, setData2] = useState([]);

useEffect(() => {
  
  fetch('http://localhost:5000/updata')
    .then(response => response.json())
    .then(result => {
     // console.log(result);
      setData2(result)
    })
    .catch(error => console.error('Error fetching data:', error));
}, []);
const hello2= data2.map((it)=>{
  console.log(it);
  return  <div className="s"> <Product path={it.path} name={it.name} discount={it.discount} price={it.price}/></div>
})





  return (
    <>
    <Header/>
    <Sliders />
    <Category/>
    <h1>Top Rated Product</h1>
    <div className="App">
       {hello}
     </div>
     <h1>Upcoming Product</h1>
    <div className="App">
       {hello2}
     </div>
     <>
      <Footer/>
     </>
     </>
  ); 
}
