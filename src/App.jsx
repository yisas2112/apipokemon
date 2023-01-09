import { Provider } from 'react-redux'
import './App.css'
import SearchPokemon from './Components/SearchPokemon'
import {store} from '../src/store'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {  
  return <>
    {/* <Provider store={ store}>
      <SearchPokemon/>    
    </Provider> */}

    <QueryClientProvider client={queryClient}>
      <SearchPokemon/>
    </QueryClientProvider>
  </>
  
}

export default App
