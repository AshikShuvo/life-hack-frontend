// import './App.css';
import Home from './pages/Home';
import {createTheme,ThemeProvider} from '@mui/material/styles';
import { indigo, teal } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';
import {BrowserRouter as Router,Route, Switch, Redirect} from 'react-router-dom'
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
        <Router>
          <Switch>
            <Route  path="/">
             <Home/>
            </Route>
            
          </Switch>
        </Router>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
