$(function () {
  $("form")
    .exValidation({
      firstValidate: true,
      rules: {
		company_name:"chkrequired",
        name: "chkrequired",
        tel_number: "chkrequired chknumonly",
        mail_address: "chkrequired chkemail chkhankaku",
        Inquiry: "chkradio",
        comment: "chkrequired"
      },
      stepValidation: true
    });
});
