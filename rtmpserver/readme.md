## RTMP Server setup:

- Inside rtmpserver folder `npm init -y`
- install Node-Media-Server with `npm install node-media-server`
- create `index.js`
- paste the following code:

```javascript
const NodeMediaServer = require('node-media-server');

const config = {
	rtmp: {
		port: 1935,
		chunk_size: 60000,
		gop_cache: true,
		ping: 30,
		ping_timeout: 60,
	},
	http: {
		port: 8000,
		allow_origin: '*',
	},
};

var nms = new NodeMediaServer(config);
nms.run();
```

- Install OBS (Open Broadcast Software): https://obsproject.com/
