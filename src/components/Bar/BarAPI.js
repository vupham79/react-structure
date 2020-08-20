import withQuery from 'with-query'

import { request } from '../../configures/axios'

export const getDataRequest = (params) => request.get(withQuery('/v1/data', params))
