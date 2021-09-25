// import './App.css';
import Home from './pages/Home';
import {createTheme,ThemeProvider} from '@mui/material/styles';
import { indigo, teal } from '@mui/material/colors';
const theme=createTheme({
  palette:{
    primary:indigo,
    secondary:teal,
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home/>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
