function showContent2() {
  let catchingIcon = document.getElementById("bt-2");
  catchingIcon.addEventListener("click", function () {
    let catchingContent = document.getElementsByClassName("response")[1];

    // Verifica se o conteúdo está visível
    if (catchingContent.style.visibility === "hidden") {
      catchingContent.style.visibility = "visible";
    } else {
      catchingContent.style.visibility = "hidden";
    }
  });
}