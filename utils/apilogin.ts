import { test as base, request } from '@playwright/test';

const test=base.extend<{
    session_id: string;
  }>({
    session_id:async ({},use)=>
        {
            const requestContext = await request.newContext({
                ignoreHTTPSErrors: true, // <--- Fix SSL issue
              });
           const response=await requestContext.post('https://phoenix.kube.gcp-qa.clh-int.com/api/accountauthentication/login',{form: {
            email: 'castlight_user@castlighthealth.com',
            password: 'monkey55',
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
           });
           const body = await response.json();
           console.log(body.session_id);
           await use(body.session_id);

        }

     });

 export { test };     
  