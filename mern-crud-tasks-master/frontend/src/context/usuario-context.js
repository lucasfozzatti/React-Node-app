import React,{ useState, useEffect, useMemo, useHistory} from "react";
import Axios from "axios";

const UsuarioContext = React.createContext();

export function UsuarioProvider(props){
    // let history = useHistory();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [id, setid] = useState(0);
    
    const value = useMemo(() => {
        
        return ({
          username,
          password,
          id,
          setUsername,
          setPassword,
          setid
      
        })
      }, [username, password])
         
    
    return <UsuarioContext.Provider value={value} {...props} />

}

export function useUsuario() {
  const context = React.useContext(UsuarioContext);
  if (!context) {
     throw new Error('useUsuario na q ve')
  }
  return context;
}