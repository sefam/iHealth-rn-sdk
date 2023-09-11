'use strict';


var {NativeModules} = require('react-native');

var RCTModule = NativeModules.AM5ProfileModule

/**
 * @module AM5ProfileModule
 */
module.exports = {

  ACTION_ERROR: RCTModule.ACTION_ERROR,
  ERROR_NUM: RCTModule.ERROR_NUM,
  ERROR_DESCRIPTION: RCTModule.ERROR_DESCRIPTION,

  ACTION_USER_BIND: RCTModule.ACTION_USER_BIND,
  ACTION_USER_UNBIND: RCTModule.ACTION_USER_UNBIND,
  ACTION_FUNCTION_SUPPORT: RCTModule.ACTION_FUNCTION_SUPPORT,
  ACTION_BASIC_INFO: RCTModule.ACTION_BASIC_INFO,
  ACTION_MAC_ADDRESS: RCTModule.ACTION_MAC_ADDRESS,

  MAC_ADDRESS: RCTModule.MAC_ADDRESS,
  BASIC_BATTSTATUS: RCTModule.BASIC_BATTSTATUS,
  BASIC_DEIVCEID: RCTModule.BASIC_DEIVCEID,
  BASIC_ENERGE: RCTModule.BASIC_ENERGE,
  BASIC_FIRMWAREVERSION: RCTModule.BASIC_FIRMWAREVERSION,
  BASIC_MODE: RCTModule.BASIC_MODE,
  BASIC_PAIRFLAG: RCTModule.BASIC_PAIRFLAG,
  BASIC_REBOOT: RCTModule.BASIC_REBOOT,

  ACTION_LIVE_DATA: RCTModule.ACTION_LIVE_DATA,
  ACTION_ACTIVITY_COUNT: RCTModule.ACTION_ACTIVITY_COUNT,
  ACTION_SET_TIME: RCTModule.ACTION_SET_TIME,
  ACTION_SET_ALARM: RCTModule.ACTION_SET_ALARM,
  ACTION_SET_GOAL: RCTModule.ACTION_SET_GOAL,
  ACTION_SET_LONG_SIT: RCTModule.ACTION_SET_LONG_SIT,
  ACTION_SET_USER_INFO: RCTModule.ACTION_SET_USER_INFO,
  ACTION_SET_UNIT: RCTModule.ACTION_SET_UNIT,
  ACTION_SET_HAND_WEAR_MODE: RCTModule.ACTION_SET_HAND_WEAR_MODE,
  ACTION_SET_UP_HAND_GESTURE: RCTModule.ACTION_SET_UP_HAND_GESTURE,
  ACTION_SET_HEART_RATE_INTERVAL: RCTModule.ACTION_SET_HEART_RATE_INTERVAL,
  ACTION_SET_HEART_RATE_MEASURE_MODE: RCTModule.ACTION_SET_HEART_RATE_MEASURE_MODE,
  ACTION_SET_ONE_KEY_RESET: RCTModule.ACTION_SET_ONE_KEY_RESET,
  ACTION_SET_NOT_DISTURB: RCTModule.ACTION_SET_NOT_DISTURB,
  ACTION_SET_SPORT_MODE: RCTModule.ACTION_SET_SPORT_MODE,

  OPERATION_RESULT: RCTModule.OPERATION_RESULT,
  OPERATION_ACTION: RCTModule.OPERATION_ACTION,

  ACTION_NOTICE_COMMING_CALL: RCTModule.ACTION_NOTICE_COMMING_CALL,
  ACTION_NOTICE_COMMING_CALL_STOP: RCTModule.ACTION_NOTICE_COMMING_CALL_STOP,
  ACTION_NOTICE_NEW_MESSAGE: RCTModule.ACTION_NOTICE_NEW_MESSAGE,

  ACTION_SYNC_ACTIVITY: RCTModule.ACTION_SYNC_ACTIVITY,
  ACTION_SYNC_ACTIVITY_DATA: RCTModule.ACTION_SYNC_ACTIVITY_DATA,
  ACTION_SYNC_CONFIG: RCTModule.ACTION_SYNC_CONFIG,
  ACTION_SYNC_HEALTH_DATA: RCTModule.ACTION_SYNC_HEALTH_DATA,
  ACTION_SYNC_HEALTH_DATA_SPORT: RCTModule.ACTION_SYNC_HEALTH_DATA_SPORT,
  ACTION_SYNC_HEALTH_DATA_SLEEP: RCTModule.ACTION_SYNC_HEALTH_DATA_SLEEP,
  ACTION_SYNC_HEALTH_DATA_HEART_RATE: RCTModule.ACTION_SYNC_HEALTH_DATA_HEART_RATE,
  ACTION_SYNC_HEALTH_DATA_BLOOD_PRESSURE: RCTModule.ACTION_SYNC_HEALTH_DATA_BLOOD_PRESSURE,

  OPERATION_STATUS: RCTModule.OPERATION_STATUS,
  PROGRESS: RCTModule.PROGRESS,

  ACTION_GET_ALL_CONNECTED_DEVICES: RCTModule.ACTION_GET_ALL_CONNECTED_DEVICES
}