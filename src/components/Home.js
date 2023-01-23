import React, { useRef } from 'react'
import ImgSlider from './ImgSlider'
import styled from 'styled-components'
import Viewers from './Viewers'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 import db from "../firebase";
 import {setMovies} from "../features/movieSlice";
import Recommends from "./Recommends";
import {  onSnapshot, collection } from "firebase/firestore";
import { selecteduserName } from '../features/userSlice';
import NewDisney from "./NewDisney.js"
import Originals from './Originals';
import Trendings from "./Trendings"
const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selecteduserName);

  useEffect(() => {
    let recommends = []; 
    let newDisneys =[]; 
    let originals = []; 
    let trendings = []; 

    const dbRef = collection(db, "movies");

  onSnapshot(dbRef,docsSnap  => {
    docsSnap.docs.map((doc) => {
        
              switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends,{ id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys,{ id: doc.id, ...doc.data() }];
         
            break;

          case "original":
            originals = [...originals,{ id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trendings = [...trendings,{ id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trendings,
        })
      );
    });
  }, [userName]);
  return (
   <Container>
    <ImgSlider/>
    <Viewers/>
    <Recommends/>
<NewDisney/>
<Trendings/>
<Originals/>
   </Container>
  )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home
