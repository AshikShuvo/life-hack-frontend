import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';


const NavBar = () => {
    return (
        <Box>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                LIFE HACK
              </Typography>
              <ButtonGroup variant="text" aria-label="text button group">
                <Button color="secondary" >Register</Button>
                <Button color="secondary" >Login</Button>
              </ButtonGroup>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default NavBar
