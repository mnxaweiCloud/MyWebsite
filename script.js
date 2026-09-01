const BTNofCopy = document.getElementById("CopyofEmail");
const emailInput = document.getElementById("Email");

const defaultIcon = `<i class="fa-regular fa-copy fa-5x" style="color: #468B52;"></i>`;
const copiedIcon = `<i class="fa-solid fa-copy fa-5x" style="color: #468B52;"></i>`;

function copyToClipboard() {
    navigator.clipboard.writeText(emailInput.value)
        .then(() => {
            BTNofCopy.innerHTML = copiedIcon;

            setTimeout(() => {
                BTNofCopy.innerHTML = defaultIcon;
            }, 1500);
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}

BTNofCopy.addEventListener("click", copyToClipboard);

const age = document.getElementById("agevar");

function getYearsSince(startDateString) {
    const startDate = new Date(startDateString); // مثال: "2010-03-24"
    const now = new Date();

    const msPerYear = 1000 * 60 * 60 * 24 * 365.25; // بتاخد في الاعتبار السنين الكبيسة
    const diffInMs = now - startDate;

    return diffInMs / msPerYear;
}

const years = getYearsSince("2010-03-24");

document.getElementById("agevar").innerHTML = Math.floor(years);



