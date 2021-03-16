import { useState } from "react";
import ButtonContainer from "./ButtomContainer";

const Form = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <section className="form">
      <ButtonContainer/>
      <form>
        <input
          type="email"
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter password"
          onChange={(e) => setPass(e.target.value)}
        />
        <input type="text" placeholder="enter phone number" />
        <button>SUBMIT</button>
      </form>
      <h1>{email}</h1>
      <h3>{pass}</h3>
    </section>
  );
};

export default Form;

// function Form(){
//   return(
//       <form>
//           <input type="email" placeholder="please enter email" />
//           {/* <input type="number" placeholder="enter a number" /> */}
//           <textarea cols="50" rows="3" placeholder="enter a message" />
//           <button>SUBMIT</button>
//       </form>
//   )
// }
// export default Form;
