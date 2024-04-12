
export const NameInput = params => {
  const updateName = e => {
    params.setName(e.target.value)
    params.checkName(e.target.value)
  }

  return (<div class="flex">
    <label class="block mx-8 text-m font-medium text-gray-900 dark:text-white">Name</label>
    <input name="AccountName"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    onChange={updateName} value={params.name}/>
  </div>)
}