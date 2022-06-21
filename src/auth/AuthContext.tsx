import * as React from 'react'
import { User, onAuthStateChanged, getAuth, Auth as FirebaseAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

interface AuthContextProps {
  children: any
}

const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_APP_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_REACT_APP_APP_ID,
  measurementId: import.meta.env.VITE_APP_REACT_APP_MEASUREMENT_ID,
})

interface AuthContext {
  user: User | null
  auth: FirebaseAuth | null
}

export const Auth = React.createContext<AuthContext>({ user: null, auth: null })

export const AuthContext: React.FC<AuthContextProps> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null)
  const auth = getAuth(firebaseApp)

  const onAuthStateChange = (callback: { (value: React.SetStateAction<User | null>): void; (arg0: User): void }) => {
    return onAuthStateChanged(auth, usr => {
      if (usr) {
        callback(usr)
      } else {
        callback(null)
      }
    })
  }

  React.useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser)
    return () => {
      unsubscribe()
    }
  }, [])

  return <Auth.Provider value={{ user, auth }}>{children}</Auth.Provider>
}
