import React from 'react';

// import { Container } from './styles';

function SSR() {
  return (
    <>
      <p>SSR side</p>
    </>
  );
}

export default SSR;

export const getServerSideProps = async ({ req }) => {
  const { token } = req.cookies;

  if(!token){
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {},
  }

}