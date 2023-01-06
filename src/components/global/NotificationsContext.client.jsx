import { createContext, useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast'
// ----------------------------------------------------------------------
const initialState = {
  showSuccess: () => {},
  showError: () => {},
  showWarning: () => {}
}

const NotificationsContext = createContext(initialState)
// ----------------------------------------------------------------------

const NotificationsProvider = ({ children }) => {
  const value = {
    foo: 'BAR',
    showSuccess: (message) => { toast.success(message, { className: 'toast success' }) },
    showError: (message) => { toast.error(message, { className: 'toast danger' }) },
    showWarning: (message) => { toast(message, { className: 'toast warning' }) }
  }

  return (
    <>
      <NotificationsContext.Provider value={value}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: '',
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff'
            },
            // Default options for specific types
            success: {
              duration: 7000,
              style: {
                background: 'green',
                color: '#fff',
                fontWeight: '800'
              },
              // theme: {
              //   primary: 'green',
              //   secondary: 'orange'
              // }
            },
            error: {
              duration: 7000,
              // icon: '🔥',
              style: {
                background: 'red',
                color: '#fff',
                fontWeight: '800'
              },
              // theme: {
              //   primary: 'red',
              //   secondary: 'blue'
              // }
            },
          }}
        />
        {children}
      </NotificationsContext.Provider>
    </>
  )
}

const useNotifications = () => useContext(NotificationsContext)

export { NotificationsContext, NotificationsProvider, useNotifications }
