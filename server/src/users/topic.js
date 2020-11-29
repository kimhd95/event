const request = require('request-promise-native')
const Info = require('./info.js')

const uri = Info.kafkaURI

const topics = [
  'identity',
  'inventory',
  'statistics',
  'community',
  'secret',
  'supervisor',
  'config',
  'monitoring',
  'plugin',
  'repository',
]


function select(req, res) {
  // 카프카에서 토픽목록 + 개수?
  return res.status(200).json({data: topics})
}

function deleteUnused(req, res) {
  // 특정 주기동안 0인 토픽 삭제
}

async function create(req, res) {
  try {
    const options = {
      uri: uri,
      method: 'POST',
      headers: {
        'Content-Type': 'application/vnd.kafka.json.v2+json',
        'Accept': 'application/vnd.kafka.v2+json'
      },
      form: {
        records: [{'key': ''}],
        offsets: [
          {
            partition: 0,
            offset: 0,
            error_code: null,
            error: null
          }
        ],
        key_schema_id: null,
        value_schema_id: null
      },
      json: true
    }

    const response = await request.post(options)
  } catch (e) {
    console.errer(e)
    return res.status(500).json({msg: 'Internal Server Error'})
  }

}

function consume(req, res) {

}
