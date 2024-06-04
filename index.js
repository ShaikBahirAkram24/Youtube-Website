document.querySelectorAll(".thumbnailContainer").forEach(function(container) {
    container.addEventListener("click", function() {
      var url = container.getAttribute("data-url");
      window.location.href = url;
    });
  });

  