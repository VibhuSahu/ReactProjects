import { useEffect, useCallback, useState, useRef } from "react";
import "./App.css";

// libraries for icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  // Ref to store the previous password to avoid unnecessary updates
  const prevPasswordRef = useRef(null);

  // Function to generate a random password based on user preferences
  const generatePassword = useCallback(
    (
      length,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols
    ) => {
      /**
       * Generates a random password based on user preferences.
       *
       * @param {number} length - The desired length of the generated password.
       * @param {boolean} includeUppercase - Whether to include uppercase letters (A-Z).
       * @param {boolean} includeLowercase - Whether to include lowercase letters (a-z).
       * @param {boolean} includeNumbers - Whether to include numbers (0-9).
       * @param {boolean} includeSymbols - Whether to include symbols (e.g., !@#$%^&*).
       * @returns {string} The randomly generated password.
       *
       * @example
       * // Generate a 12-character password with all character types
       * const pwd = generatePassword(12, true, true, true, true);
       * // Example output: "aB3$kP!9zQ2@"
       */

      const lowercase = "abcdefghijklmnopqrstuvwxyz";
      const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numbers = "0123456789";
      const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

      let characterSet = lowercase;
      if (includeUppercase) characterSet += uppercase;
      if (includeLowercase) characterSet += lowercase;
      if (includeNumbers) characterSet += numbers;
      if (includeSymbols) characterSet += symbols;

      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
      }

      return password;
    }
  );

  useEffect(() => {
    const newPassword = generatePassword(
      length,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols
    );
    setPassword(newPassword);
  }, [
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    setPassword,
  ]);


  // Function to copy the generated password to clipboard
  const copyToClipboard = useCallback(() => {
    if (prevPasswordRef.current) {
      window.navigator.clipboard.writeText(password).then(() => {
        alert("Password copied to clipboard!");
      }).catch((err) => {
        console.error("Failed to copy password: ", err);
      });
    } else {
      alert("No password to copy!");
    }
  }, [password]);

  return (
    <>
      {/* Display */}
      <div className="flex flex-col gap-5 items-center justify-center h-screen bg-black">
        <div className="w-200 p-6 shadow-lg rounded-lg bg-white flex flex-col gap-4">
          {/* Header */}
          <div className="flex text-center items-center justify-center mb-4">
            <h1 className="text-3xl font-bold text-center mb-4">
              Password Generator
            </h1>
          </div>

          {/* Container */}
          <div className="flex flex-row gap-4 items-center justify-center">
            <input
              type="text"
              value={password}
              readOnly
              placeholder="Generated Password"
              ref={prevPasswordRef}
            />
            <button
              onClick={copyToClipboard}
            >
              <FontAwesomeIcon icon={faCopy} style={{ color: "#63E6BE" }} />
              Copy
            </button>
          </div>

          {/* Controls */}
          <div className="grid grid-cols-2 grid-rows-3 gap-4 p-4 shadow-lg rounded-lg bg-transparent">
            {/* Div container for Length of the password */}
            <div className="flex items-center justify-center col-span-2">
              <input
                type="range"
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(Number(e.target.value))}
                min="4"
                max="45"
              />
              <label>Length: {length}</label>
            </div>

            {/* Checkboxes for character types */}
            {/* Checkbox for uppercase */}
            <div className="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
              />
              <label>Uppercase Letters</label>
            </div>

            {/* Checkbox for lowercase */}
            <div className="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
              />
              <label>Lowercase Letters</label>
            </div>

            {/* Checkbox for Number */}
            <div className="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
              />
              <label>Numbers</label>
            </div>

            {/* Checkbox for Symbols */}
            <div className="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
              />
              <label>Symbols</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
