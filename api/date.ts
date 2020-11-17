import { NowRequest, NowResponse } from '@now/node';

export default (req: NowRequest, res: NowResponse) => {
  const {
    query: { name },
  } = req

  res.send(`Hello ${name}!`)
};
