import React, { useState } from "react";

const App = () => {
    const [userName, setUserName] = useState("");
    const [userChirp, setUserChirp] = useState("");
    const [chirpArray, setChirpArray] = useState([
        {
            id: 1,
            user: "chipMaster:",
            chirp: "I love chips of all kinds"
        },
        {
            id: 2,
            user: "moviesRus:",
            chirp: "24/7 movies #noSleep"
        },
        {
            id: 3,
            user: "runnersWorld:",
            chirp: "running is life"
        }
    ]);

    // //adding a new username
    const newUserName = e => {
        setUserName(e.target.value);
    }

    // //users new chirp
    const newChirp = e => {
        setUserChirp(e.target.value);
    }

    // //function to update the list of chirps
    function addChirp() {
        const chirpUpdate = [
            ...chirpArray,
            {
                id: chirpArray.length + 1,
                user: "@" + userName + ":",
                chirp: userChirp
            }
        ];
        setChirpArray(chirpUpdate);
    };

    // function to update and not eliminate previous additions
    const updateFeed = e => {
        e.preventDefault();
        addChirp();
        setUserName("");
        setUserChirp("");
    };

    return (
        <>

            {/* container for form */}
            <div className="m-5 d-flex flex-wrap justify-content-evenly container">
                <div className="shadow p-2 m-5 bg-body rounded align-self-start col-4">
                    <form>
                        <div className="input-group mb-3"><span>@</span>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" value={userName} onChange={newUserName} />
                        </div>
                        <div className="input-group mb-3">
                            <textarea className="form-control" placeholder="Your Chirp..." value={userChirp} onChange={newChirp}></textarea>
                        </div>
                        <button type="submit" onClick={updateFeed} className="btn btn-primary" >Send Your Chirp!</button>
                    </form>
                </div>

            
            <div className="shadow p-2 mb-5 bg-body rounded col-5">
                <ul>
                    {chirpArray.map((chirps) => (

                        <div key={chirps.id} className="card">
                            <div className="card-body">
                                <p className="card-title fw-bold">{chirps.user}</p>
                                <p className="card-text">{chirps.chirp}</p>
                            </div>
                        </div>

                    ))}
                </ul>
            </div>
            </div>
        </>
    )
};

export default App;


