import React from 'react';
import MapIcon from '@material-ui/icons/Map';
import ViewListIcon from '@material-ui/icons/ViewList';
import ListAltIcon from '@material-ui/icons/ListAlt';

export const mainNavList = [
  { name: 'Map View', key: 'map-view', icon: <MapIcon /> },
  { name: 'List View', key: 'list-view', icon: <ViewListIcon /> },
  { name: 'Zone Summary', key: 'zone-summary', icon: <ListAltIcon /> },
  { name: 'Sensor Summary', key: 'sensor-summary', icon: <ListAltIcon /> },
];
