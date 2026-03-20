window.onload = function () {
  if (
    document.querySelectorAll(".progress").length > 0 &&
    document.querySelectorAll(".progress [data-progress]").length > 0
  ) {
    document
      .querySelectorAll(".progress [data-progress]")
      .forEach((x) => AnimateProgress(x));
  }
};

function AnimateProgress(el) {
  el.className = "animate-progress";

  el.setAttribute(
    "style",
    `--animate-progress:${el.getAttribute("data-progress")}%;`,
  );
}

document
  .querySelector(".service-tab-left .btn-form-submit")
  .addEventListener("click", function () {
    var triggerEl = document.querySelector("#contact-tab");
    var tab = new bootstrap.Tab(triggerEl);
    tab.show();
  });
