this.name           = "Education_GNN.js";
this.author         = "Cholmondely";
this.copyright      = "(C) 2022 Cholmondely";
this.licence        = "CC-NC-by-SA 4.0";
this.description    = "This OXP doesn't do anything at all yet.";
this.version        = "0.1.0";

"use strict";

//Needs other stuff: Under this.startupcomplete set up a news variable as 0 if not already defined. This gives you an easy way to check that each news item in your script is only given once. Under exiting.hyperspace increment a timer each time a jump is made so you can spread out the flavour news items so they don't pop up all at once.

//this.startUpComplete = function()
//{
//    if (!missionVariables.planner_planNames)
//    {
//	missionVariables.planner_plans = JSON.stringify({});
//	missionVariables.planner_planNames = JSON.stringify({"1_EXIT":
//							     "Exit."});
//    }
//    this._plans = JSON.parse(missionVariables.planner_plans);
//    this._planNames =  JSON.parse(missionVariables.planner_planNames);
//    this.$dockedCheck();
//}

//Then you just need a test like this under exiting hyperspace:- 

// Send the 2nd (Rooters) Broadcast to GNN.- Is Sent as a Priority 1 once 4 jumps have been made since Broadcast 1 was sent.
if (missionVariables.random_station_names_news === 2 &&  missionVariables.random_station_names_timer > 3) {
missionVariables.random_station_names_timer = 0;
var news = new Object;
news.ID = this.name;
news.Message = expandDescription("[random_station_names_2_news]");
news.Agency = 2;
news.Priority = 1;
this.passScreen(news,1); 
// The same method is used as above.
}

// Send the 3rd (Tionisla Chronicle) Broadcast to GNN.- Is Sent as a Priority 1 once 6 jumps have been made since Broadcast 2 was sent.
if (missionVariables.random_station_names_news === 3 &&  missionVariables.random_station_names_timer > 5) {
missionVariables.random_station_names_timer = 0;
var news = new Object;
news.ID = this.name;
news.Message = expandDescription("[random_station_names_3_news]");
news.Agency = 4;
news.Priority = 1;
this.passScreen(news,1); 
// The same method is used as above.
}

//And so on for however many news broadcasts you want to write.

// Now copy and past in the function below to send the news items to GNN when the conditions are met:

this.passScreen = function(news,mode)
{var a = worldScripts.GNN._insertNews(news);
if(!a){ if(mode) missionVariables.random_station_names_news++;  // If GNN conforms sucess, advance the News Counting variable to the next Broadcast.
return;
} else {if(a<0){ // If the buffer was full then the mission variable counting the News Broadcasts wasn't advanced. Once the player has made the required number of jumps Random Station names will check again.
return;
}}}

// In a descriptions file write the text for your news broadcasts. All you need is a:-

"random_station_names_1_news" = "Type in your text!";
"random_station_names_2_news" = "Type in your text for the next one";

And so on for however many broadcasts you want to send.
 