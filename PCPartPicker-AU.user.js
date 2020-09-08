// ==UserScript==
// @name        PCPartPicker AU
// @match       *://*.pcpartpicker.com/*
// @grant       none
// @version     1.0
// @author      Baconn
// @description 7/7/2020, 11:44:23 AM
// ==/UserScript==

if (location.hostname.startsWith('pcpartpicker.com')) {
  window.stop();
  location.hostname = 'au.pcpartpicker.com';
} 
