import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <div className="relative group w-96 h-96 overflow-hidden bg-black m-auto mt-36">
    <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src="https://r7q6w9z6.rocketcdn.me/career/wp-content/uploads/2021/06/Book-club_188638613-e1535997545540-1.jpg" />
    <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0">
      
    </div>
    <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
      <div className="absolute w-full flex place-content-center bg-slate-500 group-hover:bg-transparent mt-10">
        <p className="capitalize font-serif font-bold text-lg text-center shadow-2xl text-white m-10 mt-3">ဗိုလ်ချုပ် ပြတိိုက်</p>
      </div>
      <div className="absolute w-full flex place-content-center mt-20">
        <p className="font-sans text-center w-4/5 text-white mt-5">Collaborative effort of a group to achieve a common goal the most effective and efficient way!</p>
      </div>
      <button className="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">Contact Us</button>
    </div>
  </div>
  </div>
  );
}

export default App;
