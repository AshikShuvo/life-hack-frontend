import { Button, Container, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
const HomeBody = () => {
    return (
        <main>
         <Box sx={{
            bgcolor: 'secondary.main',
            pt: 8,
            pb: 6,
            height:"100vh"
          }}>
            <Container maxWidth="sm">
                <Typography  component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Easy Life Hack
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    All your productivity enhancement tools are in one platform now. Maintain and mange your daily productivity from one app.
                </Typography>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    >
                    <Button variant="contained">Register Now</Button>
                    <Button variant="outlined">Login</Button>
                </Stack>
            </Container>
           </Box>
        </main>
    )
}

export default HomeBody
