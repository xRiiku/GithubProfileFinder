import { useState } from "react";
import '../App.css'


export function FetchUser() {

    const [search, setSearch] = useState('')
    const [user, setUser] = useState(null)

    function handleSearch() {
        fetch(`https://api.github.com/users/${search}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((error) => console.error(error))
    }

    return (
        <div className="container">
            <div className="searching">
                <label> Search Github Profile </label>
                <input
                type="text"
                placeholder="Search Profile Name"
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                />
                <button onClick={handleSearch}> Search </button>
            </div>

            {user &&
                <div className="profileDataContainer">
                
                    <div className="principalData">
                    <a href={user.html_url} target="_blank" rel="noreferrer">
                        <img src={user.avatar_url} alt="avatar" />
                    </a>
                    <h3>{user.name}</h3>
                    <h4>{user.login}</h4>
                    <p>Followers: {user.followers}</p>
                    <p>Following: {user.following}</p>
                    <p>Repos: {user.public_repos}</p>
                    </div>
                </div>
            }
        </div>
    )
}
