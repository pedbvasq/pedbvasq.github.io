document.querySelector(".btn").addEventListener("click", function () {
  // alert('CV on update')
  // return
  var cvUrl = './Pedrocv.pdf';
  var link = document.createElement("a");
  link.href = cvUrl;
  link.download = "Pedrocv.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
