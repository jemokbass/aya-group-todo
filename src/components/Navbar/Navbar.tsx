import { FC} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface INavbarProps {
  onDate: (date: Date | null) => void
}

const Navbar: FC<INavbarProps> = ({onDate}) => {
  
  return (
    <header className="navbar">
      <div className="container navbar__container">
        <a href="/">ToDo List</a>
        <div><DatePicker onChange={onDate}/></div>
      </div>
    </header>
  );
};

export default Navbar;
