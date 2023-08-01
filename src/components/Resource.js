import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Resource = ({category}) => {
    const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/${category}/`);
        setResources(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div><h2>{category}</h2>
    <ul>
      {resources.map((resource) => (
        <li key={resource.name}>{resource.name}</li>
      ))}
    </ul></div>
  )
}

export default Resource