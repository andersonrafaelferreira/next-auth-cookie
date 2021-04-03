// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Cookie from 'js-cookie';

import { addDays } from 'date-fns';

export default(req, res) => {

  async function getToken() {
    Cookie.set("token", "d8ahp93y3uqa9yec9ya36o26196",{
      expires: addDays(new Date(), 1),
    }); 
    
    const token = Cookie.get("token"); 
  
    console.log(token);

    return token;
  }

  getToken();

  res.status(200).json({ name: 'John Doe' })
}
