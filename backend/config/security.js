import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
export const security=[
 helmet(),
 cors({origin:process.env.CLIENT_URL,credentials:true}),
 rateLimit({windowMs:15*60*1000,max:100})
];
