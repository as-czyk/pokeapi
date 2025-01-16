import { auth, db } from "@/cloud/firebase";
import { addDoc, collection, deleteDoc, doc, getDoc } from "firebase/firestore";
export namespace Team {
  export const DB_COLLECTION = "team";

  function createRecord(pokemonId: string, nickname: string): any {
    return {
      pokemonId,
      nickname,
      createdAt: new Date().toISOString(),
    };
  }

  export const API = {
    addPokemonToTeam: async (pokemonId: string, nickname: string) => {
      const pokemonRecord = createRecord(pokemonId, nickname);

      try {
        const user = auth.currentUser;
        const userId = user?.uid;

        const userTeamCollection = collection(
          db,
          `${DB_COLLECTION}/${userId}/records`
        );

        return await addDoc(userTeamCollection, pokemonRecord);
      } catch (e) {
        console.error("Failed to add pokemon to team:", e);
      }
    },
    removePokemonFromTeam: async (pokemonId: string) => {
      try {
        const user = auth.currentUser;
        const userId = user?.uid;

        const documentReference = doc(
          db,
          `${DB_COLLECTION}/${userId}/records/${pokemonId}`
        );

        return await deleteDoc(documentReference);
      } catch (e) {
        console.error("Failed to remove pokemon from team:", e);
      }
    },
  } as const;
}
