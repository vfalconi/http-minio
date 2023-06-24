const { extname } = require('node:path');
const express = require('express');
const minio = require('../lib/Minio')
const router = express.Router();

router.get('/:bucket/:object*?', async function(req, res, next) {
	const bucket = req.params.bucket;
	const object = req.path.split('/').slice(2).join('/') || 'index.html';
	return minio.getObject(bucket, object)
		.then(content => {
			res.type(extname(object));
			res.send(content);
		})
		.catch(e => {
			console.log(e);
			res.status(404).send('Not found')
		});
});

module.exports = router;
