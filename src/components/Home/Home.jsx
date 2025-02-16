import React, {useContext} from 'react'
import style from "./Home.module.css"
import RecentProducts from '../RecentProducts'
import { CounterContext } from '../../Context/CounterContext'
import CategoriesSlider from '../categoriesSlider';
import MainSlider from "../mainSlider";




export default function Home() {

let {counter, changeCounter} = useContext(CounterContext);



  return (
<>
<MainSlider/>
<CategoriesSlider/>

     <RecentProducts/>
  </>
  );
   
  
}
