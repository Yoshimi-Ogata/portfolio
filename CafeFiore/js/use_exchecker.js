$(function(){
  $("form")
    .exValidation({
      firstValidate: true,
      rules: {
        name: "chkrequired",
        tel_number: "chkrequired chknumonly",
        mail_address: "chkrequired chkemail chkhankaku",
        select: "chkradio",
        comment: "chkrequired"
      },
      stepValidation: true
    });
});
