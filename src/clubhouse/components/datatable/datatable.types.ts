import {TextStyle, ViewStyle} from 'react-native';

interface IColumn {
  name: string;
  key?: any;
  grow?: any;
}

interface IDataTable {
  columns: IColumn[];
  rows: IRow[];
  customColumnStyle?: ViewStyle;
  customColumnTextStyle?: TextStyle;
  customContainerStyle?: ViewStyle;
  customRowStyle?: ViewStyle;
  customRowCellStyle?: ViewStyle;
}

interface IRow {
  name: string;
  value: any;
  key?: any;
  grow?: any;
}

export type {IColumn, IDataTable, IRow};
