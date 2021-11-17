var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.apispreadsheets.com/data/20431/",
    "method": "GET"
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  
    var content = response.content;
    $("#content").append(content);
  
    var participants = response.data[0].participants;
    $("#participants").append(participants);
  
    var participants1 = response.data[1].participants;
    $("#participants1").append(participants1);
  
    var participants2 = response.data[2].participants;
    $("#participants2").append(participants2);
  
    var participants3 = response.data[3].participants;
    $("#participants3").append(participants3);
  
    var participants4 = response.data[4].participants;
    $("#participants4").append(participants4);
  
    var participants5 = response.data[5].participants;
    $("#participants5").append(participants5);
  
    var participants6 = response.data[6].participants;
    $("#participants6").append(participants6);
  
    var participants7 = response.data[7].participants;
    $("#participants7").append(participants7);
  
    var participants8 = response.data[8].participants;
    $("#participants8").append(participants8);
  
    var participants9 = response.data[9].participants;
    $("#participants9").append(participants9);
  
    var participants10 = response.data[10].participants;
    $("#participants10").append(participants10);
  
    var participants11 = response.data[11].participants;
    $("#participants11").append(participants11);
  
    var participants12 = response.data[12].participants;
    $("#participants12").append(participants12);
  
    var participants13 = response.data[13].participants;
    $("#participants13").append(participants13);
  
    var participants14 = response.data[14].participants;
    $("#participants14").append(participants14);
  
    var participants15 = response.data[15].participants;
    $("#participants15").append(participants15);
  
    var participants16 = response.data[16].participants;
    $("#participants16").append(participants16);
  
    var participants17 = response.data[17].participants;
    $("#participants17").append(participants17);
  
    var participants18 = response.data[18].participants;
    $("#participants18").append(participants18);
  
    var participants19 = response.data[19].participants;
    $("#participants19").append(participants19);
  
    var participants20 = response.data[20].participants;
    $("#participants20").append(participants20);
  
    var participants21 = response.data[21].participants;
    $("#participants21").append(participants21);
  
    var participants22 = response.data[22].participants;
    $("#participants22").append(participants22);
  
    var participants23 = response.data[23].participants;
    $("#participants23").append(participants23);
  
    var participants24 = response.data[24].participants;
    $("#participants24").append(participants24);
  
    var participants25 = response.data[25].participants;
    $("#participants25").append(participants25);
          
    var placements = response.data[0].placements;
    $("#placements").append(placements);
  
    var placements1 = response.data[1].placements;
    $("#placements1").append(placements1);
  
    var placements2 = response.data[2].placements;
    $("#placements2").append(placements2);
  
    var placements3 = response.data[3].placements;
    $("#placements3").append(placements3);
  
    var placements4 = response.data[4].placements;
    $("#placements4").append(placements4);
  
    var placements5 = response.data[5].placements;
    $("#placements5").append(placements5);
  
    var placements6 = response.data[6].placements;
    $("#placements6").append(placements6);
  
    var placements7 = response.data[7].placements;
    $("#placements7").append(placements7);
  
    var placements8 = response.data[8].placements;
    $("#placements8").append(placements8);
  
    var placements9 = response.data[9].placements;
    $("#placements9").append(placements9);
  
    var placements10 = response.data[10].placements;
    $("#placements10").append(placements10);
  
    var placements11 = response.data[11].placements;
    $("#placements11").append(placements11);
  
    var placements12 = response.data[12].placements;
    $("#placements12").append(placements12);
  
    var placements13 = response.data[13].placements;
    $("#placements13").append(placements13);
  
    var placements14 = response.data[14].placements;
    $("#placements14").append(placements14);
  
    var placements15 = response.data[15].placements;
    $("#placements15").append(placements15);
  
    var placements16 = response.data[16].placements;
    $("#placements16").append(placements16);
  
    var placements17 = response.data[17].placements;
    $("#placements17").append(placements17);
  
    var placements18 = response.data[18].placements;
    $("#placements18").append(placements18);
  
    var placements19 = response.data[19].placements;
    $("#placements19").append(placements19);
  
    var placements20 = response.data[20].placements;
    $("#placements20").append(placements20);
  
    var placements21 = response.data[21].placements;
    $("#placements21").append(placements21);
  
    var placements22 = response.data[22].placements;
    $("#placements22").append(placements22);
  
    var placements23 = response.data[23].placements;
    $("#placements23").append(placements23);
  
    var placements24 = response.data[24].placements;
    $("#placements24").append(placements24);
  
    var placements25 = response.data[25].placements;
    $("#placements25").append(placements25);
          
  });
