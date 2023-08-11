import Signup from "./pages/sign-up/Signup";
import Link from 'next/link';



function App() {
    return (
      <ul>
      <li>
       
        <Link  href="/sign-up" element={<Signup />} />
      </li>
      </ul>
    );
  }
  
  export default App;