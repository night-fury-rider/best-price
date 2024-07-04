import * as React from 'react';
import {StyleSheet} from 'react-native';
import {DataTable as LibraryDataTable, Text} from 'react-native-paper';

import * as componentData from './datatable.json';

import {IDataTable} from './datatable.types';

const DataTable = ({
  columns,
  customColumnStyle,
  customColumnTextStyle,
  customContainerStyle,
  customRowStyle,
  customRowCellStyle,
  rows,
}: IDataTable) => {
  if (!rows || rows.length === 0) {
    return (
      <LibraryDataTable.Row style={styles.noDataRow}>
        <LibraryDataTable.Cell style={styles.noDataRowCell}>
          <Text variant="titleLarge">{componentData.messages.noData}</Text>
        </LibraryDataTable.Cell>
      </LibraryDataTable.Row>
    );
  }
  return (
    <LibraryDataTable style={[styles.container, customContainerStyle]}>
      <LibraryDataTable.Header>
        {columns.map(columnObj => (
          <LibraryDataTable.Title
            numeric
            key={columnObj.key}
            style={[
              styles.column,
              {flexGrow: columnObj.grow ? columnObj.grow : 1},
              customColumnStyle,
            ]}
            textStyle={[styles.columnText, customColumnTextStyle]}>
            {columnObj.name}
          </LibraryDataTable.Title>
        ))}
      </LibraryDataTable.Header>

      {rows.map(rowObj => (
        <LibraryDataTable.Row
          key={rowObj.key}
          style={[styles.row, customRowStyle]}>
          <LibraryDataTable.Cell
            style={[
              styles.rowCell,
              {flexGrow: rowObj.grow ? rowObj.grow : 1},
              customRowCellStyle,
            ]}>
            {rowObj.name}
          </LibraryDataTable.Cell>
          <LibraryDataTable.Cell
            numeric
            style={[
              styles.rowCell,
              {flexGrow: rowObj.grow ? rowObj.grow : 1},
              customRowCellStyle,
            ]}>
            {rowObj.value}
          </LibraryDataTable.Cell>
        </LibraryDataTable.Row>
      ))}
    </LibraryDataTable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'grey',
    borderWidth: 1,
  },
  column: {
    justifyContent: 'center',
  },
  columnText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noDataRow: {
    marginTop: 50,
  },
  noDataRowCell: {
    justifyContent: 'center',
  },
  row: {
    justifyContent: 'center',
  },
  rowCell: {
    justifyContent: 'center',
  },
});

export default DataTable;
