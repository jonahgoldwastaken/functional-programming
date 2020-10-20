import { resolve } from 'path'

require('dotenv')({ config: { path: resolve(__dirname, '..', '.env') } })

console.log('hoi')
