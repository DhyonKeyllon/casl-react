import { useCallback, useMemo, useState } from "react";
import { buildAbility } from "./guards/ability";
import { GuardContext } from "./guards/GuardContext";
import { getAbilitiesByUser, UserType } from "./guards/user-abilities";
import { Home } from "./pages/Home";

function App() {
  const [userType, setUserType] = useState<UserType>("admin");

  const userAbilities = useMemo(() => {
    return getAbilitiesByUser(userType);
  }, [userType]);

  const ability = useMemo(() => {
    return buildAbility(userAbilities);
  }, [userAbilities]);

  return (
    <GuardContext.Provider value={ability}>
      <div className="App">
        <div className="flex gap-4 justify-center items-center bg-gray-100 p-4">
          <button
            className="bg-green-500 rounded-lg shadow-md p-2 text-zinc-800"
            onClick={() => setUserType("admin")}
          >
            Admin
          </button>
          <button
            className="bg-yellow-500 rounded-lg shadow-md p-2 text-zinc-800"
            onClick={() => setUserType("user")}
          >
            User
          </button>
        </div>

        <h1>Current user: {userType}</h1>

        <Home />
      </div>
    </GuardContext.Provider>
  );
}

export default App;
