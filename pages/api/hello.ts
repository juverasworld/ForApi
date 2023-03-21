import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req);
//  let result;
//     try  {
//  result =   fetch();
    
// } catch (error) {
//     console.log(error.message);
    
// }finally{

// }
    if (req.method === 'GET') {
        res.status(200).json({ method: "Get" })
    }
    res.status(200).json({ method: 'Post' });
};
export default handler;