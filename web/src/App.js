import './App.css';
import Home from './routes/home';
import History from './routes/history'
import NewContact from './routes/new_contact'
import Contacts from './routes/contact_list'
import EditContacts from './routes/edit_contact'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/history" element={<History />}></Route>
      <Route path="/new_contact" element={<NewContact />}></Route>
      <Route path="/all_contacts" element={<Contacts />}></Route>
      <Route path="/edit_contact" element={<EditContacts />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
