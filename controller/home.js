exports.Index = function(req, res, next) {
  return res.status(200).json({
    title: "ChomCHOB mock API",
    description: "This is mock API service for skill test of the front-end developer",
    company_info: {
      company_name: "Chomchob Group Co.,Ltd.", 
      address: "69/6 Tang Hua Pug Building (9th Floor) alley Sathon10, Nort Sathon Road, Silom, Bang Rak, Bangkok 10500",
      website: "https://www.chomchob.com",
      tel: "(+66)2-6350334",
      mail: "customer@chomchob.com",
      line_id: "@chomchobth"
    }
  });
}