/**
 * Created by zhangxu on 16/11/20.
 */
'use strict';


var { NativeModules } = require('react-native');

var RCTModule = NativeModules.BP550BTModule;

/**
 * @module BP550BTModule
 */

module.exports = {

  Event_Notify: RCTModule.Event_Notify,

  /**
   * Get the BP550BT device's battery.
   * @param {string} mac Device's mac address
   */
  getBattery: function (mac) {
    if (RCTModule != null) {
      RCTModule.getBattery(mac);
    }else {
      console.log('~~~~~ RCTModule is null')
    }

  },

 /**
   * Get the BP550BT device's firmwareVersion.
   * @param {string} mac Device's mac address
   */
  getFirmVersion: function (mac) {
    if (RCTModule != null) {
      RCTModule.getFirmVersion(mac);
    }else {
      console.log('~~~~~ RCTModule is null')
    }

  },

  /**
   * get offline data number.
   * @param {string} mac Device's mac address
   */
  getOffLineNum: function (mac) {
      if (RCTModule != null) {
          RCTModule.getOffLineNum(mac);
      }else {
          console.log('~~~~~ RCTModule is null')
      }
  },

  /**
   * get offline data number.
   * @param {string} mac Device's mac address
   */
  getOffLineData: function (mac) {
    if (RCTModule != null) {
      RCTModule.getOffLineData(mac);
    }else {
      console.log('~~~~~ RCTModule is null')
    }
  },

  /**
   * Get the KN-550BT device's functionInfo.
   * @param {string} mac Device's mac address
   */
  getFunctionInfo: function (mac) {
      if (RCTModule != null) {
          RCTModule.getFunctionInfo(mac);
      }else {
          console.log('~~~~~ RCTModule is null')
      }
  },

  /**
   * Get the KN-550BT device's functionInfo.
   * @param {string} mac Device's mac address
   */
  getDisplayConfig: function (mac) {
    if (RCTModule != null) {
        RCTModule.getDisplayConfig(mac);
    }else {
        console.log('~~~~~ RCTModule is null')
    }
  },

  /**
   * Get the KN-550BT device's functionInfo.
   * @param {string} mac Device's mac address
   */
  setDisplayConfig: function (mac, lightOn, timeOn) {
    if (RCTModule != null) {
        RCTModule.setDisplayConfig(mac, lightOn, timeOn);
    }else {
        console.log('~~~~~ RCTModule is null')
    }
  },

  /**
   * Get the KN-550BT device's functionInfo.
   * @param {string} mac Device's mac address
   */
  getTime: function (mac) {
    if (RCTModule != null) {
        RCTModule.getTime(mac);
    }else {
        console.log('~~~~~ RCTModule is null')
    }
  },

  /**
   * Get the KN-550BT device's functionInfo.
   * @param {string} mac Device's mac address
   */
  transferFinished: function (mac) {
    if (RCTModule != null) {
        RCTModule.transferFinished(mac);
    }else {
        console.log('~~~~~ RCTModule is null')
    }
  },

  /**
   * Disconnect the KN-550BT
   *
   * @param {string} mac Device's mac address
   */
  disconnect: function (mac) {
    if (RCTModule != null) {
      RCTModule.disconnect(mac);
    }else {
      console.log('~~~~~ RCTModule is null')
    }
  },

  /**
   * Get all connected BP550BT device
   *
   * e.g. {"devices":["A4D5783FB00C","A4D5783FFE58"]}
   */
  getAllConnectedDevices: function () {
      RCTModule.getAllConnectedDevices()
  }
}

