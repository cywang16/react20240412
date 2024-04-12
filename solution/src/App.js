import './App.css';
import { useState } from 'react'
import { NameInput } from './components/NameInput';
import { LocationSelect } from './components/LocationSelect';
import { AccountList } from './components/AccountList';
import { isNameValid } from './mock-api/apis';

function App() {
  const [AccountName, setAccountName] = useState("")
  const [Location, setLocation] = useState("")
  const [accountNameError, setAccountNameError] = useState("")
  const [accounts, setAccounts] = useState([])

  const clearInput = () => {
    setAccountName("")
    setLocation("")
    setAccountNameError("")
  }

  const addAccount = () => {
    accounts.push({
      name: AccountName,
      location: Location,
    })
    clearInput()
  }

  const checkAccountName = (inputName) => {
    isNameValid(inputName)
    .then(isValid => {
      if (isValid) {
        setAccountNameError("")
        let findName = accounts.filter(n => { return n.name.localeCompare(inputName) === 0 })
        if (findName.length > 0) {
          setAccountNameError("this name has been taken")
        }
      } else {
        setAccountNameError("invalid name")
      }
    })
  }

  return (
    <div class="w-1/2 items-center justify-center space-y-10">
      <div class="space-y-1">
        <NameInput setName={setAccountName} name={AccountName} checkName={checkAccountName}/>
        <label class="block mx-8 text-m font-medium text-red-500 dark:text-white float-right">{accountNameError}</label>
      </div>
      <LocationSelect setLocation={setLocation} location={Location}/>
      <div class="flex float-right">
        <button type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={clearInput}>Clear</button>
        <button type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={addAccount}>Add</button>
      </div>
      <AccountList accounts={accounts} />
    </div>)
}

export default App;
