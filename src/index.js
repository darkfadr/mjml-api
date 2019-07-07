const {send, json} = require('micro');
const mjml = require('mjml');

module.exports = async (req, res) => {
  try {
    const body = await json(req); 
    const output = mjml(body.mjml);

    return send(res, 200, {
      success: true,
      data: {
        mjml: output.html
      }
    });
  } catch(err) {
    console.log('error', err);
    send(res, code, {
      success: false,
      message: 'An error occured while parsing your template'
    });
  }
};