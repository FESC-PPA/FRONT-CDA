const signInWithEmailAndPassword = async () => {
    return {
        nom: "toño"
    }
}

export const signIn = async (email: string, password: string) => {
    const result = await signInWithEmailAndPassword()
    return result
};

const signOut = async () => {
    return null
}

export const logout = async () => await signOut();
