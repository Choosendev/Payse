import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from "./pages/sign-up/Signup";
import Link from 'next/link';
import { useRouter } from 'next/router';



function App() {
    return (
      <BrowserRouter>
      <Routes>
       
        <Route  path="/sign-up" element={<Signup />} />
        
      </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;