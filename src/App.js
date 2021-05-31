// import logo from './logo.svg';
import './App.css';
import logo from './img/logo.png';
import Award from './img/1.png';
import awardGiving from './img/2.png'
import pumps from './img/3.png'


function App() {
  return (
    
    <>
    <header className="flexbox">
    <img className="logo" src={logo} alt="logo"/>
    </header>
    
    <div className="container">
      <div className="award-img-container">

      <img className="left award" src={Award} alt="Award" />
      </div>
      <div className="right">
      <h5 className="right right-heading">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h5>
      <ul className="right points">
        <li>
        C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
        </li>
        <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
      </ul>
      
      <img className="right award-giving " src={awardGiving} alt="Award Ceremony" />
      
      <p className="right right-para">
        Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
      </div>
    </div>
    <div className="pumps">
      <p className="para-pumps">
      INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
      </p>
      
      <img className="img-pumps-img" src={pumps} alt="Products" />
      <p className="pump-names">
Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
      
    </div>
    <hr />
    <div className="services">
      <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
      <p>CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING FOOD | BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR BUILDING HVAC FIRE FIGHTING | AGRICULTURE & RESIDENTIAL</p>
    </div>
    <div className="footer">
    <p className="tf">Toll free: 1800 200 1234</p>
    <p className="fb">www.facebook.com/cripumps</p>
    <p className="fb">www.crigroups.com</p>
    </div>
    </>
    
  );
}

export default App;
