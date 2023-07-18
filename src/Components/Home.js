import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const URL = `${process.env.REACT_APP_BACKEND_URI}/pets`
      const response = await fetch(URL)
      const data = await response.json()
      setPets(data)
    }

    fetchData()
  }, [])

  const display = pets.map(pet => {
    return (
      <div key={pet._id}>
        <Link to={`/pets/${pet._id}`}>
          <p>{pet.petName}</p>
        </Link>
      </div>
    )
  })

  return (
    <div>
      <img src="/images/pets.jpg" alt="Dog & Cat Cuddles" />
      <div>
        Photo by <a href="https://unsplash.com/photos/9gz3wfHr65U">Krista Mangulsone</a> on <a href="https://unsplash.com/s/photos/dogs-and-cats?license=free">Unsplash</a>
      </div>
      <h1>Pet Adoption Safe Haven</h1>
      {display}
    </div>
  );
}

export default Home;
