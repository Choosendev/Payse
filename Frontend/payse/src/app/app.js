import Signup from "./pages/sign-up/Signup";
import Link from 'next/link';



function App() {
    return (
      <ul>
      <li>
       
        <Link  href="/sign-up" element={<Signup />} />
        </Link>
      </li>
      </ul>
    );
  }
  
  export default App;