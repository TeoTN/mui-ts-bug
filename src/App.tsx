import * as React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';
import { FlatCard } from './FlatCard';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <FlatCard/>
    </div>
  </ThemeProvider>
);

export default App;
