//import { ElementType } from 'react';
import { useEffect } from 'react';

import Cookie from 'js-cookie';

import { useRouter } from 'next/router';

// export default function withAuth(WrapperComponent: ElementType){
export default function withAuth(WrapperComponent){
  const Wrapper = (props) => {

    const router = useRouter();

    useEffect(()=>{
  
      const token = Cookie.get('token');
      if(!token){
        router.replace('/');
      }
  
    },[])

    return <WrapperComponent {...props} />
  }

  return Wrapper;
}