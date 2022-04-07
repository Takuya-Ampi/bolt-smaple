const { App } = require('@slack/bolt');

const app = new App({ 
  token: "xoxb-2626196685191-3301441364418-mhRvsOu9Q0eJnyiS1UO5QrhQ", // todo env
  signingSecret: "3502edded2dea284196431d01ba698a3" // todo env
});

(async()=>
  {
    //Webアプリの起動
    await app.start(3000);
    console.log('Bolt app is running!');
  }
)();