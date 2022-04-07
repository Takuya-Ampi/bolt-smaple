const { App } = require('@slack/bolt');

const app = new App({ 
  token: "xoxb-2626196685191-3301441364418-2ablD5pPdFDITEQsFIbQ4ly3", // todo env
  signingSecret: "3502edded2dea284196431d01ba698a3" // todo env
});

app.command('/echo', async({command, ack, say}) => {
  console.log('aaa')
  await ack();
  await say(`echo:${command.text}`)
})

app.message('hello', async ({ message, say }) => {
  // イベントがトリガーされたチャンネルに say() でメッセージを送信します
  await say(`Hey there <@${message.user}>!`);
});

(async()=>
  {
    //Webアプリの起動
    await app.start(3000);
    console.log('Bolt app is running!');
  }
)();
