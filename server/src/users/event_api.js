
const config = require('../../../config')
const kafkaConfig = require('../../kafkaConfig')
const kafka_node = require('kafka-node')
const {Kafka} = require('kafkajs')
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [`${kafkaConfig.ADDRESS}:${kafkaConfig.PORT}`]
})
// console.log(Kafka)
const admin = kafka.admin()
const producer = kafka.producer()
const consumer = kafka.consumer({ groupId: 'test-group' })

const run = async () => {
  // Producing
  await producer.connect()
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  })

  // Consuming
  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })

  console.log('------------------------------------------------------')
  await admin.connect()
  const topics = await admin.listTopics()
  console.log(topics)
}

run().catch(console.error)


// const admin = kafka.admin()
//
// // console.log(admin)
//
//
// (async function() {
//   await admin.connect()
//   const topics = await admin.listTopics()
//   console.log(topics)
//   await admin.disconnect()
// })()


function getKafkaAddr(req, res) {
  console.log(kafkaConfig.ADDRESS)
  return res.status(200).json({data: kafkaConfig.ADDRESS})
}

async function getTopics(req, res) {
  await admin.connect()
  const topics = await admin.listTopics()
  await admin.disconnect()
  console.log(topics)
  return res.status(200).json({data: topics})
}

function getTrace(req, res) {
  console.log("test api")

  res.status(200).json({data: 'test success'})
}

module.exports = {
  getKafkaAddr,
  getTopics,
  getTrace
}
