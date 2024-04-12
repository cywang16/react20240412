
export const AccountList = params => {
  return (<div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead>
        <tr key="header"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="col">Name</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        {params.accounts.map(account => (
        <tr key={account.name}
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row">{account.name}</th>
          <td>{account.location}</td>
        </tr>))}
      </tbody>
    </table>
  </div>)
}