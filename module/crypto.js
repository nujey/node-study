'use strict'

const crypto = require('crypto')

// MD5 SHA1 常用的哈希算法
const hash = crypto.createHash('md5')
const sha1 = crypto.createHash('sha1')
const sha256 = crypto.createHash('sha256')
const sha512 = crypto.createHash('sha512')

console.log(hash.digest('hex'))
console.log(sha1.digest('hex'))
console.log(sha256.digest('hex'))
console.log(sha512.digest('hex'))


// Hmac算法也是一种哈希算法，可以利用MD5 和SHA1 
const hmac = crypto.createHmac('sha512', 'secret-key')

console.log(hmac.digest('hex'))

// AES 对称加密算法 加密和解密都是同一个密钥 需要自己封装函数

// AES有很多不同的算法， aes192, aes-128-ecb, aes-256-cbc

function aesEncrypt(data, key) {
  const cipher = crypto.createCipher('aes192', key)
  var crypted = cipher.update(data, 'utf8', 'hex')
  crypted += cipher.final('hex')
  return crypted
}

function aesDecrypt(encrypted, key) {
  const decipher = crypto.createDecipher('aes192', key)
  var decrypted = decipher.update(encrypted, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}

var data = 'Hello, CC'
var key = 'password'
var encrypted = aesEncrypt(data, key)
var decrypted = aesDecrypt(encrypted, key)

console.log('Plain text:' + data)
console.log('Encrypted text:'+ encrypted)
console.log('decrypted text:'+ decrypted)



// DH Diffie-Hellman
// 密钥交换协议 可以让双方在不泄漏密钥的情况下协商出一个密钥

var ming = crypto.createDiffieHellman(512)
var ming_keys = ming.generateKeys()

var prime = ming.getPrime()
var generator = ming.getGenerator()

console.log('prime:'+ prime.toString('hex'))
console.log('Generator:'+ generator.toString('hex'))

var hong = crypto.createDiffieHellman(prime, generator);
var hong_keys = hong.generateKeys()

var ming_secret = ming.computeSecret(hong_keys)
var hong_secret = hong.computeSecret(ming_keys)

console.log('ming-secret:'+ ming_secret.toString('hex'))
console.log('hong-secret:'+ hong_secret.toString('hex'))
