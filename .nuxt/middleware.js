const middleware = {}

middleware['babel.config'] = require('../middleware/babel.config.js')
middleware['babel.config'] = middleware['babel.config'].default || middleware['babel.config']

middleware['mw_vuex'] = require('../middleware/mw_vuex.js')
middleware['mw_vuex'] = middleware['mw_vuex'].default || middleware['mw_vuex']

middleware['mw1'] = require('../middleware/mw1.js')
middleware['mw1'] = middleware['mw1'].default || middleware['mw1']

middleware['mw2'] = require('../middleware/mw2.js')
middleware['mw2'] = middleware['mw2'].default || middleware['mw2']

export default middleware
