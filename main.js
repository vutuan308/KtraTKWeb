document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
  
    var email = document.getElementById("email").value;
    var comment = document.getElementById("com").value;
    var rate = document.getElementById("rate").value;
  
    if (!email || !comment || !rate) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }
  
    if (!validateEmail(email)) {
      alert("Vui lòng nhập một địa chỉ email hợp lệ.");
      return;
    }

    alert("Gửi thành công!");
    document.getElementById("email").value = "";
    document.getElementById("com").value = "";
    document.getElementById("rate").value = "";
  });
  function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }