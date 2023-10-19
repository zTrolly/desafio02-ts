import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { login } from './services/login';
import { Header } from './components/Header/Header';
import { Layout } from './components/Layout/Layout';
import { Card } from './components/Card/Card';  
import { Form } from './components/Form/Form';

function App() {
  return (
    <ChakraProvider>
     <Layout>
      <Card>
        <Form/>
      </Card>
     </Layout>
    </ChakraProvider>
  );
}

export default App;
