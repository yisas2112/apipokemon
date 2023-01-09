import './App.css'
import SearchPokemon from './Components/SearchPokemon'

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {  
  return <>
    <QueryClientProvider client={queryClient}>
      <SearchPokemon/>
    </QueryClientProvider>
  </>
  
}

export default App
