const dateInput = document.querySelector("input[type=date]");
const button = document.querySelector("button");
dateInput.max = new Date().toISOString().split("T")[0];
const dds = document.querySelectorAll("dd");

main();

function main() {
  if (dateInput) {
    button.addEventListener("click", (e) => {
      if (!dateInput.value) return;
      const inputDate = new Date(dateInput.value);
      let y1 = inputDate.getFullYear();
      let m1 = inputDate.getMonth() + 1;
      let d1 = inputDate.getDate();
      console.log(y1, m1, d1);
      const nowDate = new Date();
      let y2 = nowDate.getFullYear();
      let m2 = nowDate.getMonth() + 1;
      let d2 = nowDate.getDate();

      const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      let y3, m3, d3;
      y3 = y2 - y1;

      if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
      }
      if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
      }
      d3 = d2 - d1;
      m3 = m2 - m1;
      y3 = y2 - y1;

      if (!dds.length === 3) {
        notifyError("something went wrong");
        return;
      }
      for (let index = 0; index < dds.length; index++) {
        const element = dds[index];

        if (index === 0) {
          element.textContent = y3;
        }
        if (index === 1) {
          element.textContent = m3;
        }
        if (index === 2) {
          element.textContent = d3;
        }
      }
    });
  }
}

function notifyError(text) {
  const error = document.querySelector(".error");
  if (error) {
    error.textContent = text;
    setTimeout(() => {
      error.textContent = "";
    }, 4000);
  }
}
