let showed_box = 0;

function Next(index){

    showed_box = -1200 * index;

    document.getElementById('sld').style.transform = "translateX("+showed_box+"px)";
}

//

function Previous(){

    showed_box += 1200;

    if(showed_box > 0)
        showed_box = -6000;

    document.getElementById('sld').style.transform = "translateX("+showed_box+"px)";

}

function revealText(showID, hideIDs) {

  for (let i = 0; i < hideIDs.length; i++ ){
    const hideID = hideIDs[i]
    const hideDiv = document.getElementById(hideID);
    hideDiv.style.display = "none";
  }

    const showDiv = document.getElementById(showID);
    if (showDiv.style.display == "none") {
      //show div if hidden
        showDiv.style.display = "block";
    } else {
      //hide div
        showDiv.style.display = "block";
    }
}

// function hiddenText(id) {
//
//   let e = document.getElementById(id);
//
//   if(e.style.display == "block")
//      e.style.display = "none";
//   else {
//     e.style.display = "block";
//   }
//  }
