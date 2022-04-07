const { App } = require('@slack/bolt');

const app = new App({ 
  token: "xoxb-2626196685191-3301441364418-2ablD5pPdFDITEQsFIbQ4ly3", // todo env
  signingSecret: "3502edded2dea284196431d01ba698a3" // todo env
});

app.event('reaction_added', async({}))

(async()=>
  {
    //Webアプリの起動
    await app.start(3000);
    console.log('Bolt app is running!');
  }
)();