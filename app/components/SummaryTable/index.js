/**
 *
 * SummaryTable
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Typography from '@material-ui/core/Typography';
import TableToolbar from './TableToolbar';

function SummaryTable(props) {
  const { title, headers, records } = props;
  return (
    <React.Fragment>
      <TableToolbar title={title} />
      <Table>
        <TableHead>
          <TableRow>
            {headers.map(item => (
              <TableCell>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map(item => (
            <TableRow>
              {headers.map(headerItem => {
                const opacityVal =
                  !item[headerItem] || item[headerItem] === 0 ? 0.3 : 1;
                return (
                  <TableCell style={{ opacity: opacityVal }}>
                    {item[headerItem] ? item[headerItem] : 0}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

SummaryTable.propTypes = {};

export default SummaryTable;
