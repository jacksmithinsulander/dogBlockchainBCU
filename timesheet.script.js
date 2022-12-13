import Sheet from "./sheet.js";
import Time from "./time.js";

const user = document.getElementById("user");
const work = document.getElementById("work");
const saveWorkBtn = document.getElementById("saveWorkBtn");
const showtimeList = document.getElementById("showTimeList");
const validateBtn = document.getElementById("validateBtn");
const editBtn = document.getElementById("editBtn");

// SKAPA VÅR KEDJA
let timeSheet = new Sheet();

validateBtn.addEventListener("click", () => {
    console.log("Börjar validering");
    timeSheet.isChainValid();
})

editBtn.addEventListener("click", () => {
  //  console.log("Im going to edit something!");
    timeSheet.timeSheet[2].data.work = 20;
  //  console.log("edited timeSheet", timeSheet);
    printTimes();
});

saveWorkBtn.addEventListener("click", () => {


        // SKAPA NYTT OBJEKT
        let newWorkTime = {
            user: user.value,
            work: Number(work.value)
        }

      //  console.log("newWorkTime", newWorkTime);

        // ÄNDRA
        timeSheet.addTime(new Time(newWorkTime));

   // console.log("timeSheet", timeSheet);

    setTimeout(printTimes, 100);
})

function printTimes() {
    showtimeList.innerHTML = "";

    timeSheet.timeSheet.map(work => {
      //  console.log("Tiderna för sig", work.data.user);

        let timeBox = document.createElement("div");
        timeBox.style.border = "1px solid black";
        timeBox.style.padding = "20px";
        timeBox.style.margin = "20px";

        if (work.data.work < 4) {
            timeBox.style.backgroundColor = "yellow"
        } else if (work.data.work >= 4 && work.work < 8) {
            timeBox.style.backgroundColor = "orange"
        } else {
            timeBox.style.backgroundColor = "red"
        }
    
        timeBox.id = work.id;
        timeBox.innerHTML = "<p>" + work.prevHash + "<br/>" + work.data.user + "<br/>" + work.data.work + "<br/>" + work.hash + "</p>";
        
        showtimeList.appendChild(timeBox);
    })
}

