import { NowRequest, NowResponse } from '@now/node';

export default (_req: NowRequest, res: NowResponse) => {
  const date = new Date().toString();
  console.log('HERE', date)
  res.json({
    body: "Hello world" 
  })
};
