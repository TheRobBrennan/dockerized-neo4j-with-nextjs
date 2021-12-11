import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

export const SignInOut = ({ styles }) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <h4>Signed in as {session.user.name}</h4>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <h4>Not signed in </h4>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};
