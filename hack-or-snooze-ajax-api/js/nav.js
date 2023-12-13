"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
  // $mainNav.show();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
  $mainNav.hide();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}


// Show ui for submitting a new story

function navSubmitStoryClick() {
  hidePageComponents();
  $submitForm.show();
}

$navSubmitStory.on("click", navSubmitStoryClick);

// Show ui for favorited stories
function myFavoriteStoriesClick() {
  hidePageComponents();
  showFavoriteStories();
}

$navFavorites.on("click", myFavoriteStoriesClick);

// Show ui for user submitted stories

function myStoriesClick() {
  hidePageComponents();
  showMyStories();
}

$myStoriesList.on("click", myStoriesClick);

function updateNavOnLogin(){
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}
function navProfileClick(evt) {
  console.debug("navProfileClick", evt);
  hidePageComponents();
  $userProfile.show();
}

$navUserProfile.on("click", navProfileClick);