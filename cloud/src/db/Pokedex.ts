import { auth, db } from "@/cloud/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

export namespace Pokedex {
  export const DB_COLLECTION = "pokedex";

  function createRecord(pokemonId: string): any {
    return {
      pokemonId,
      createdAt: new Date().toISOString(),
    };
  }

  export const API = {
    addPokedexEntry: async (pokemonId: string) => {
      const pokemonRecord = createRecord(pokemonId);

      try {
        const user = auth.currentUser;
        const userId = user?.uid;

        const userTeamCollection = collection(
          db,
          `${DB_COLLECTION}/${userId}/records`
        );

        return await addDoc(userTeamCollection, pokemonRecord);
      } catch (e) {
        console.error("Failed to add pokedex entry", e);
      }
    },

    getPokeDexEntries: async (userId: string) => {
      try {
        const user = auth.currentUser;
        const userId = user?.uid;

        const userPokedexCollection = collection(
          db,
          `${DB_COLLECTION}/${userId}/records`
        );

        const querySnapshot = await getDocs(userPokedexCollection);
        const pokedexEntries = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        return pokedexEntries;
      } catch (e) {
        console.error("Failed to get pokedex entries", e);
      }
    },
  } as const;
}
