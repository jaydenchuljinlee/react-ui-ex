import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import './App.css'

function App() {
  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <h1>👋 Hello MUI</h1>
      <Button variant="contained" color="primary">
        MUI 버튼
      </Button>
    </Container>
  );
}

export default App
