this.name           = "Education_Station_Bar.js";
this.author         = "Cholmondely";
this.copyright      = "(C) 2022 Cholmondely";
this.licence        = "CC-NC-by-SA 4.0";
this.description    = "Adds a station bar where you might overhear useful tips";
this.version        = "0.0.9";

"use strict";

// LittleBear's comments: This script would let you give a randomly picked item each time. Although you might want to also add a timer so the messages change over time. You could also add tests for Government type, economy or station type so different items are overheard in different systems types and station types.

// Set Up your F4 Screen Option Like this:-

this.startUpComplete = this.shipDockedWithStation = function(station) {
this.barinterface();
}
this.removebar = this.shipWillLaunchFromStation = function() {
player.ship.dockedStation.setInterface("bar_chatter",null);
}

//  Now add your Visit the Bar Interface like this:- 

this.barinterface = function() {	
player.ship.dockedStation.setInterface("bar_chatter",{
title: "Visit the Station Bar",
category: "Activities",
summary: "Useful gossip can sometimes be overheard in the Bar",
callback: this.showBar.bind(this)});	
};

// Now add this code so that when the Visit the Bar Option is selected Oolite will randomly pick one of the messages you have set up in descriptions. 

this.showBar = function() {
mission.runScreen({
title: "The Local Bar",
screenID:"show_bar",
message: expandDescription("[education_bar_gossip]"),
overlay: "litf_bg_localbar.png", //This adds the bar image behind the message
                  })
}

