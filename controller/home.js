var request = require("request");

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

exports.TestTQM = function(req, res, next) {
  var options = {
    method: 'POST',
    url: 'https://www.tqm.co.th/sql/new_mysql-car.php',
    headers: { 
      'Postman-Token': '2ae57473-02e5-45f1-baf7-fddd11b73ced',
      'cache-control': 'no-cache',
      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
    },
    formData: { 
      status: 'submodel',
      page: 'selected',
      Makecode: 'AUDI',
      CARMODEL: 'A4',
      CarYear: '2008',
      type: '1' 
    } 
  };

  request(options, function (error, response, body) {
    if (error) return res.status(200).json(error); // throw new Error(error);

    return res.status(200).json(body);
  });

}