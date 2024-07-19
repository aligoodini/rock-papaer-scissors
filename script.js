const optionImages = document.querySelectorAll(".option_image");

const container = document.querySelector(".container");
const user = document.querySelector(".user_result img");
const cpu = document.querySelector(".cpu_result img");
const resultScore = document.querySelector(".result-score");

let srcUser = "";
let srcCpu = "";
const randomSrc = ["./rock.png", "./paper.png", "./scissors.png"];
let randomNum = 0;
let userScore = 0;
let cpuScore = 0;

optionImages.forEach((item) => {
  item.addEventListener("click", () => {
    // =========================================== show moving
    container.classList.add("start");

    setTimeout(() => {
      container.classList.remove("start");

      srcUser = item.children[0].getAttribute("src");
      console.log(srcUser);
      user.setAttribute("src", srcUser);

      randomNum = Math.trunc(Math.random() * 3);
      // console.log(randomNum);
      srcCpu = randomSrc[randomNum];
      console.log(srcCpu);
      cpu.setAttribute("src", srcCpu);
      // ========================================================== result score
      if (
        (srcUser == "./rock.png" && srcCpu == "./rock.png") ||
        (srcUser == "./paper.png" && srcCpu == "./paper.png") ||
        (srcUser == "./scissors.png" && srcCpu == "./scissors.png")
      ) {
        userScore += 0;
        cpuScore += 0;
        resultScore.innerHTML = `User : ${userScore}  -------  Cpu : ${cpuScore}`;

        console.log(userScore, cpuScore);
      } else if (
        (srcUser == "./rock.png" && srcCpu == "./scissors.png") ||
        (srcUser == "./paper.png" && srcCpu == "./rock.png") ||
        (srcUser == "./scissors.png" && srcCpu == "./paper.png")
      ) {
        userScore += 1;
        cpuScore += 0;
        resultScore.innerHTML = `User : ${userScore}  -------  Cpu : ${cpuScore}`;

        console.log(userScore, cpuScore);
      } else {
        userScore += 0;
        cpuScore += 1;
        resultScore.innerHTML = `User : ${userScore}  -------  Cpu : ${cpuScore}`;

        console.log(userScore, cpuScore);
      }
    }, 3000);
  });
});
