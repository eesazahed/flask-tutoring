let available = [

    ["sun", "time12"],
    ["sun", "time13"],
    ["sun", "time14"],
    ["sun", "time15"],
    ["sun", "time16"],
    ["sun", "time17"],
    ["sun", "time18"],

    ["mon", "time17"],
    ["mon", "time18"],

    ["tue", "time17"],
    ["tue", "time18"],

    ["wed", "time17"],
    ["wed", "time18"],

    ["thu", "time17"],
    ["thu", "time18"],

    ["fri", "time17"],
    ["fri", "time18"],

    ["sat", "time14"],
    ["sat", "time15"],
    ["sat", "time16"],
    ["sat", "time17"],
    ["sat", "time18"],
];

//console.log(available[0][0]);

const table = $("tbody");

for (let i = 9; i < 19; i++) {

    $(table).append(
        `<tr class="row${i}">
            <th scope="row">${i}:00</th>
            <td class="sun">N/A</td>
            <td class="mon">N/A</td>
            <td class="tue">N/A</td>
            <td class="wed">N/A</td>
            <td class="thu">N/A</td>
            <td class="fri">N/A</td>
            <td class="sat">N/A</td>
        </tr>`
    );

    let childEl = document.querySelector(`.row${i}`).children;

    for (let num = 1; num < childEl.length; num++) {
        childEl[num].classList.add(`time${i}`);
    }

    $("td").css("background-color", "#e8e8e8");

}

for (let i = 0; i < available.length; i++) {

    if (document.querySelector(`.${available[i][0]}.${available[i][1]}`)) {

        $(`.${available[i][0]}.${available[i][1]}`).html("&#9989;");
        $(`.${available[i][0]}.${available[i][1]}`).css("background-color", "lightGreen");

    }
}