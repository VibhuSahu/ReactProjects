import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

export default function App() {

    // useState for showing password in password filled
    const [password, setPassword] = useState("");

    // perameter used to make password
    const [length, setLenght] = useState(8);    // Length of the password
    const [charactersupper, setCharactersupper] = useState(true); // Does it will have characters
    const [characterslower, setCharacterslower] = useState(true); // Does it will have characters
    const [specialcharacters, setSpecialcharacters] = useState(false); // Does it will have special characters
    const [number, setNumber] = useState(false);    // Does it will have numbers 


    // function for the components

    const handlecopy = useCallback(() => {
        /** * This function copies the generated password to the clipboard.
         * It uses the Clipboard API to write the password to the clipboard.
         * @returns {void}
         */
        navigator.clipboard.writeText(password)
            .then(() => {
                console.log("Password copied to clipboard");
            })
            .catch((error) => {
                console.error("Failed to copy password: ", error);
            });
    }, [password]);


    const passwordGenrator = useCallback(() => {
        /**
         * This function generates a random password based on the specified criteria.
         * It uses the current state values to determine the characters to include in the password.
         * 
         * @returns {void}
         */

        let value = "";
        let searchString = "";

        if (charactersupper) searchString += "abcdefghijklmnopqrstuvwxyz";
        if (characterslower) searchString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (specialcharacters) searchString += "!#$%&'()*+,-./:;<=>?";
        if (number) searchString += "0123456789";

        for (let count = 0; count <= length; count++) {
            value += searchString.charAt(Math.floor(Math.random() * searchString.length));
        }
        setPassword(value);
    }, [
        length,
        characters,
        specialcharacters,
        number,
        setPassword
    ])


    useEffect(() => {
        /** * This effect runs when the component mounts and generates an initial password.
         * It calls the passwordGenrator function to set the initial password state.
         * * @returns {void}
         */
        passwordGenrator();
    }, [
        length,
        charactersupper,
        characterslower,
        specialcharacters,
        number,
        passwordGenrator
    ])

    // useRef for the input field to focus on it
    const inputRef = useRef(null);
    
    
    
    return (
        <>
            <div className="bg-stone-800 flex w-screen h-screen items-center justify-center">
                <div>
                    <h1
                    className='text-center text-5xl text-amber-300'
                    >Generate Password</h1>
                </div>

                <div>
                    <input
                    className=''
                    readOnly
                    value={password}
                    type='Password'
                    placeholder='Password'
                    ></input>
                    <button
                    className=''
                    >Copy</button>
                </div>

                <div>
                    <label htmlFor="length">Length</label>
                    <input
                        className='w-full'
                        type="range"
                        id="length"
                        value={length}
                        onChange={(e) => setLenght(e.target.value)}
                        min="4"
                        max="100"
                    />
                </div>
                

            </div>
        </>
    )
}