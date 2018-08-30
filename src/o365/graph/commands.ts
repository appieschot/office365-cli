const prefix: string = 'graph';

export default {
  CONNECT: `${prefix} connect`,
  DISCONNECT: `${prefix} disconnect`,
  GROUPSETTING_ADD: `${prefix} groupsetting add`,
  GROUPSETTING_GET: `${prefix} groupsetting get`,
  GROUPSETTING_LIST: `${prefix} groupsetting list`,
  GROUPSETTINGTEMPLATE_GET: `${prefix} groupsettingtemplate get`,
  GROUPSETTINGTEMPLATE_LIST: `${prefix} groupsettingtemplate list`,
  O365GROUP_ADD: `${prefix} o365group add`,
  O365GROUP_GET: `${prefix} o365group get`,
  O365GROUP_LIST: `${prefix} o365group list`,
  O365GROUP_SET: `${prefix} o365group set`,
  O365GROUP_REMOVE: `${prefix} o365group remove`,
  O365GROUP_RESTORE: `${prefix} o365group restore`,
  SITECLASSIFICATION_GET: `${prefix} siteclassification get`,
  SITECLASSIFICATION_ENABLE: `${prefix} siteclassification enable`,
  STATUS: `${prefix} status`,
  TEAMS_LIST: `${prefix} teams list`,
  USER_GET: `${prefix} user get`,
  USER_LIST: `${prefix} user list`,
  USER_SENDMAIL: `${prefix} user sendmail`,
};