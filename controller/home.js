exports.Index = function (req, res, next) {
  return res.status(200).json({
    title: 'ChomCHOB mock API',
    description: 'This is mock API service for skill test of the front-end developer',
    company_info: {
      company_name: 'Chomchob Group Co.,Ltd.',
      address: '98 Sathorn Square Building 16th Floor, 1605-1606 North Sathorn Rd., Silom, Bang Rak, Bangkok 10500',
      website: 'https://www.chomchob.com',
      // tel: '(+66)2-6350334',
      // mail: 'people@chomchob.com',
      // line_id: '@chomchobth'
    }
  })
}
