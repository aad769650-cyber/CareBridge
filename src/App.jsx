// import axios from "axios";
// import { useEffect, useState } from "react";
// import React, { useEffect, useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { About } from './components/About';
import { Provider } from './components/Provider';
import { Education } from './components/Education';
import { InsuranceProvider } from './components/InsuranceProvider';
import { PatientPortal } from './components/PatientPortal';
import { HealthAccess } from './components/HealthAccess';
import { Steps } from './components/Steps';
import { Tools } from './components/Tools';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App = () => {
  // const [data,setData]=useState([])
  // const API=`https://pokeapi.co/api/v2/pokemon?limit=24`;

//   useEffect(()=>{
//     const res=fetch(API);
//     // console.log(res);
//     res.then((resp)=>{
//       // console.log(resp.json());
//       // console.log(JSON.parse(resp));
//       return resp.json()
//     }).then((data)=>{
//       // console.log(data.results.length);
  
// const responseData=data.results.map((curr)=>{
//   // console.log(curr.url);
//   // console.log(URL);
//   const {url}=curr
//   const res=fetch(`${url}`)
//   .then((response)=>{
//     // console.log(response);
// return response.json()

//   })
//   .then((actData)=>{
//     // console.log(actData);
//   return actData  
//   })


// return res;
// })
// console.log(responseData);


// const apiData= Promise.all(responseData)
// // console.log(apiData);
// apiData.then((res)=>{
//   // console.log(res);
//   setData(res)
// })
// // data.map((curr)=>{
// //   const {url}=curr;
// // console.log(curr.url,"log");

// //   const res=fetch(url);
// //   console.log(res);
  
// })

//   },[])
  
  // console.log(data);
  
// if(data){
  // console.log(data);
  


//async await



// useEffect(()=>{
// const fetchData=async()=>{
// try {
//   const res=await fetch(API);

// console.log(res);

// const data=await res.json()
// console.log(data);

// const pokemon=data.results.map(async(curr)=>{
//   // console.log(curr.url);
  
// const resp=await fetch(`${curr.url}`);
// const dataRes=await resp.json();
// console.log(dataRes);

// return dataRes
// })

// console.log(pokemon);
// // const pokemonData=async () => {
// //   const resp=await Promise.all(pokemon);
// //   console.log(resp.json());
  
// // }

// // console.log(pokemonData());
// // pokemonData()

// const datas=await Promise.all(pokemon)

// setData(datas)
// // console.log(datas);


// } catch (error) {
//   console.log(error);
  
// }


// }




//  fetchData()
// },[])


// useEffect(()=>{

// const fetchData=async()=>{
//   const res=await axios.get(API);


//   console.log(res.data);



//   const data=res.data.results.map(async(curr)=>{
// return axios.get(curr.url)
//   })
// console.log(data);

// const responseData=await Promise.all(data)
// console.log(responseData);

// setData(responseData)
// }

// fetchData()
// },[])























// const MyTypewriter = () => {
  return (
    <>
    <Header></Header>
    {/* <TypeAnimation
      sequence={[
        'Hello', 1500,
        'World', 1800,
        'React', 1900,
        '',
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2rem', display: 'inline-block' }}
    /> */}

    <HeroSection></HeroSection>

    <About></About>
   
   <Provider></Provider>

   <Education></Education>

   <InsuranceProvider></InsuranceProvider>
   
   <PatientPortal></PatientPortal>

   <HealthAccess></HealthAccess>
   <Steps></Steps>

   <Tools></Tools>

   <FAQ></FAQ>

   <Footer></Footer>
    </>
  );
// };





















// console.log(data[0]?.data.name);


//     return (
//   <>
//   <div>App</div>
// <div>
//   {
// data?.map((curr)=>{
//   console.log(curr);
  
//   // console.log(curr.spirits.back_default);
  
//   return (
//     <>
//     <div>{curr.data.name}</div>
//     <img src={curr.data.sprites.other.dream_world.front_default} alt="" />
//     </>
//   )
// })
// }</div>

// </>
//   )



// const Typewriter = () => {
  // const words = ["Hello", "World", "React"];
  // const [wordIndex, setWordIndex] = useState(0);
  // const [letterIndex, setLetterIndex] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [text, setText] = useState("");

  // useEffect(() => {
  //   const currentWord = words[wordIndex];
  //   let typingSpeed = isDeleting ? 100 : 150;

  //   const timer = setTimeout(() => {
  //     if (!isDeleting) {
  //       // Typing
  //       setText(currentWord.slice(0, letterIndex + 1));
  //       setLetterIndex((prev) => prev + 1);

  //       if (letterIndex + 1 === currentWord.length) {
  //         setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
  //       }
  //     } else {
  //       // Deleting
  //       setText(currentWord.slice(0, letterIndex - 1));
  //       setLetterIndex((prev) => prev - 1);

  //       if (letterIndex === 0) {
  //         setIsDeleting(false);
  //         setWordIndex((prev) => (prev + 1) % words.length);
  //       }
  //     }
  //   }, typingSpeed);

  //   return () => clearTimeout(timer);
  // }, [letterIndex, isDeleting, wordIndex]);

  // return (
  //   <div style={{ fontSize: "2rem", fontFamily: "monospace" }}>
  //     {text}
  //     <span className="cursor">|</span>
  //   </div>
  // );
// };



}

export default App