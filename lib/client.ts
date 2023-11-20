import { createClient } from 'next-sanity'

const projectId = 'qcmevzws'
const dataset = 'production'
const apiVersion = '2023-10-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'published',
})
