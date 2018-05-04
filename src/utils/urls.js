const backendUrl = 'https://www.ieesee.com:8080';

const urlmapping = {
  login: backendUrl + '/afu/app/api/admin/client/login',
  getSimpleArtPlayData: backendUrl + '/getSimpleArtPlayData/',
}

module.exports = {
  urlmapping: urlmapping,
}