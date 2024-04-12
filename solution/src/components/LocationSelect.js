import { useEffect, useState } from 'react'
import { getLocations } from "../mock-api/apis"


export const LocationSelect = params => {
  const [locations, setLocations] = useState([])
  useEffect(() => {
    async function fetchData() {
      const locationData = await getLocations()
      setLocations(locationData)
    }
    fetchData()
  }, [locations])

  return (<div class="flex">
    <label class="block mx-8 text-m font-medium text-gray-900 dark:text-white">Location</label>
    <select name="location"
      value={params.location}
      onChange={e => params.setLocation(e.target.value)}
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option value="" key="null"></option>
      {locations.map(opt => (<option value={opt} key={opt}>{opt}</option>))}
    </select>
    </div>)
}