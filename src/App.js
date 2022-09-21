import React, {useState} from 'react';

import './App.css';

function App() {
    const [aardbeien, toggleAardbeien] = useState(0);
    const [bananen, toggleBananen] = useState(0);
    const [appels, toggleAppels] = useState(0);
    const [kiwi, toggleKiwi] = useState(0);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState(0);
    const [zip, setZip] = useState('');
    const [freq, toggleFreq] = useState('');
    const [checkedTerms, toggleCheckedTerms] = useState(false);
    const [messageValue, setMessageValue] = useState('');
    const [time1, toggleTime1] = useState('Overdag');
    const [time2, toggleTime2] = useState('s Avonds');

    function resetFruits() {
        toggleAardbeien(0);
        toggleBananen(0);
        toggleAppels(0);
        toggleKiwi(0);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
            Voornaam: ${firstname},
            Achternaam: ${lastname},
            Leeftijd: ${age},
            Postcode: ${zip},
            Bezorgfrequentie: ${freq},
            Bezorgmoment: ${time1},
            Bezorgmoment: ${time2},
            Opmerkingen: ${messageValue},
            Algemene Voorwaarden: ${checkedTerms},
            Aardbeien: ${aardbeien},
            Bananen: ${bananen},
            Appels: ${appels},
            Kiwi's: ${kiwi},          
        `)
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <article>
                <h2> 🍓 Aardbeien</h2>
                <button type="button" disabled={aardbeien === 0} onClick={() => toggleAardbeien(aardbeien - 1)}> -
                </button>
                <p> {aardbeien}</p>
                <button type="button" onClick={() => toggleAardbeien(aardbeien + 1)}> +
                </button>
            </article>
                <article>
                    <h2> 🍌 Bananen</h2>
                    <button type="button" disabled={bananen === 0} onClick={() => toggleBananen(bananen - 1)}> -
                    </button>
                    <p> {bananen}</p>
                    <button type="button" onClick={() => toggleBananen(bananen + 1)}> +
                    </button>
                </article>
                <article>
                    <h2> 🍏 Appels</h2>
                    <button type="button" disabled={appels === 0} onClick={() => toggleAppels(appels - 1)}> -
                    </button>
                    <p> {appels}</p>
                    <button type="button" onClick={() => toggleAppels(appels + 1)}> +
                    </button>
                </article>
                <article>
                    <h2> 🥝 Kiwi</h2>
                    <button type="button" disabled={kiwi === 0} onClick={() => toggleKiwi(kiwi - 1)}> -
                    </button>
                    <p> {kiwi}</p>
                    <button type="button" onClick={() => toggleKiwi(kiwi + 1)}> +
                    </button>
                </article>

                <button type="button" onClick={() => resetFruits()}> Reset
                </button>
                <br/><br/>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstname-field">
                        Voornaam:
                        <input
                            type="text"
                            name="fName"
                            id="firstname-field"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        ></input>
                    </label>

                    <label htmlFor="lastname-field">
                        Achternaam:
                        <input
                            type="text"
                            name="lName"
                            id="lastname-field"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        ></input>
                    </label>

                    <label htmlFor="age-field">
                        Leeftijd:
                        <input
                            type="number"
                            name="age"
                            id="age-field"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        ></input>
                    </label>

                    <label htmlFor="zip-field">
                        Postcode:
                        <input
                            type="text"
                            name="zip"
                            id="zip-field"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                        ></input>
                    </label>

                    <label htmlFor="freq-field">
                        Bezorgfrequentie:
                        <select
                            name="freq"
                            id="freq-field"
                            value={freq}
                            onChange={(e) => toggleFreq(e.target.value)}
                        >
                            <option value="week"> iedere week</option>
                            <option value="14dgn"> om de week</option>
                            <option value="maand"> iedere maand</option>
                        </select>
                    </label>

                    <label htmlFor="time1-field">
                        's Avonds
                        <input
                            type="radio"
                            name="time1"
                            id="time1-field"
                            value={time1}
                            onChange={() => toggleTime1(!time1)}
                        />
                    </label>


                    <label htmlFor="time2-field">
                        Overdag
                        <input
                            type="radio"
                            name="time2"
                            id="time2-field"
                            value={time2}
                            onChange={() => toggleTime2(!time2)}
                        />


                    </label>


                    Opmerkingen:

                    <label htmlFor="message-field">
                <textarea
                    type="text"
                    id="message-field"
                    name="message"
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)}
                    rows="4"
                    cols="50"
                />
                    </label>

                    <label htmlFor="terms-and-conditions">
                        Ik ga akkoord met de Algemene Voorwaarden:
                        <input
                            type="checkbox"
                            name="terms-and-conditions"
                            id="terms-and-conditions"
                            onChange={() => toggleCheckedTerms(!checkedTerms)}
                        />
                    </label>

                    <button type="submit" disabled={!checkedTerms}>Verzenden</button>
                </form>
            </>
            );
            }

            export default App;
