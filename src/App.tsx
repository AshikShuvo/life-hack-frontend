// import './App.css';
import Home from './pages/Home';
import {createTheme,ThemeProvider} from '@mui/material/styles';
import { indigo, teal } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';
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
      <CssBaseline />
        <Home/>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
