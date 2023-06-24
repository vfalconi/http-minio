const Minio = require('minio');

class MinioAPI {
	constructor(opts) {
		this.clientOpts = {
			...{
				endPoint: process.env.MINIO_ENDPOINT,
				port: parseInt(process.env.MINIO_PORT, 10),
				useSSL: false,
				accessKey: process.env.MINIO_ACCESS_KEY,
				secretKey: process.env.MINIO_SECRET_KEY,
			},
			...opts,
		};
		this.client = this.#createClient()
	}

	#createClient = () => {
		let client;
		try {
			client = new Minio.Client(this.clientOpts);
			console.log('minio client created')
			return client;
		} catch (e) {
			console.log(e.message);
		}
	}

	getObject = (bucket, object) => {
		return new Promise((resolve, reject) => {
			this.client.getObject(bucket, object, function (err, stream) {
				if (err) return reject(err);
				const buffers = [];
				stream.on('data', (chunk) => buffers.push(chunk));
				stream.on('end', () => resolve(Buffer.concat(buffers)));
				stream.on('error', (e) => reject(err));
			});
		});
	};
}

module.exports = new MinioAPI();
