import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
  } from '@mui/material';
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  
  const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      if (email && password) {
        navigate('/');
      }
    };
  
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          bgcolor: 'background.default',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: '100%',
            maxWidth: 400, // 고정된 최대 너비
            p: 4,
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            로그인
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="이메일"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="비밀번호"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              로그인
            </Button>
          </Box>
        </Paper>
      </Box>
    );
  };
  
  export default LoginPage;
  