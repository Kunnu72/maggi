
import tick from "../img/tick.png"
import "./styles/success.css";
const Success = () => {
  return (
  <>
  
  <div className="main">
    <div>
      <img
        src={tick}
        alt="Order Placed SuccessFully"
        className="green-tick"
      />
    </div>
    <div className="hide">
      
      <h1 className="hehe" >Order Placed Successfully!!!</h1>
      
    </div>
  </div>
</>
    )
   
  

}

export default Success;